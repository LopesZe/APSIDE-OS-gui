import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Extrator de NF-e brasileira via regex
function extrairDadosPdf(texto) {
  const dados = {
    numero: null,
    data: null,
    cliente: null,
    cnpj: null,
    itens: [],
    valor_total: null,
    vendedor: null,
    condicao: null,
  };

  // Número da NF
  const numMatch = texto.match(/N[°º]\s*(\d+)/i) || texto.match(/(\d{3,})\s*$/m);
  if (numMatch) dados.numero = numMatch[1];

  // Data de emissão
  const dataMatch = texto.match(/(\d{2})[\/\-](\d{2})[\/\-](\d{4})/);
  if (dataMatch) dados.data = `${dataMatch[3]}-${dataMatch[2]}-${dataMatch[1]}`;

  // CNPJ do cliente
  const cnpjMatch = texto.match(/(\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})/);
  if (cnpjMatch) dados.cnpj = cnpjMatch[1];

  // Valor total
  const valorMatch = texto.match(/valor total[:\s]*R?\$?\s*([\d.,]+)/i);
  if (valorMatch) dados.valor_total = parseFloat(valorMatch[1].replace(".", "").replace(",", "."));

  // Condição de pagamento
  const condMatch = texto.match(/condi[çc][ãa]o de pagamento[:\s]*(.*?)(?:\n|$)/i);
  if (condMatch) dados.condicao = condMatch[1].trim();

  return dados;
}

// Registrar pedido no banco
async function registrarPedido(dados, arquivoPdf) {
  const { createClient } = await import("@supabase/supabase-js");

  // Carrega .env
  const envPath = path.join(__dirname, ".env");
  const env = readFileSync(envPath, "utf8");
  const envVars = {};
  for (const line of env.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    envVars[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }

  const supabase = createClient(envVars.SUPABASE_URL, envVars.SUPABASE_KEY);

  // Buscar ou criar cliente
  let clienteId = null;
  if (dados.cnpj) {
    const { data: existente } = await supabase
      .from("clientes")
      .select("id")
      .eq("cnpj", dados.cnpj)
      .maybeSingle();
    if (existente) clienteId = existente.id;
  }

  if (!clienteId && dados.cliente) {
    const { data: novo } = await supabase
      .from("clientes")
      .insert({ nome: dados.cliente, cnpj: dados.cnpj })
      .select("id")
      .single();
    if (novo) clienteId = novo.id;
  }

  // Registrar pedido
  const { data: pedido } = await supabase
    .from("pedidos")
    .insert({
      cliente_id: clienteId,
      data: dados.data,
      valor_total: dados.valor_total,
      numero_pedido: dados.numero,
      origem: dados.numero,
      condicao: dados.condicao,
      nf_arquivo: arquivoPdf ? path.basename(arquivoPdf) : null,
    })
    .select("id")
    .single();

  if (!pedido) throw new Error("Falha ao criar pedido");

  // Registrar itens
  for (const item of dados.itens) {
    // Buscar ou criar produto
    let produtoId = null;
    if (item.codigo) {
      const { data: existente } = await supabase
        .from("produtos")
        .select("id")
        .eq("codigo", item.codigo)
        .maybeSingle();
      if (existente) produtoId = existente.id;
    }

    if (!produtoId && item.descricao) {
      const { data: novo } = await supabase
        .from("produtos")
        .insert({
          codigo: item.codigo,
          descricao: item.descricao,
          marca: item.marca,
          unidade: item.unidade,
          preco_ref: item.preco_unit,
        })
        .select("id")
        .single();
      if (novo) produtoId = novo.id;
    }

    if (produtoId) {
      await supabase.from("itens_pedido").insert({
        pedido_id: pedido.id,
        produto_id: produtoId,
        qtd: item.qtd,
        preco_unit: item.preco_unit,
        subtotal: item.subtotal || item.qtd * item.preco_unit,
      });
    }
  }

  return pedido.id;
}

// Main
const arquivo = process.argv[2];
if (!arquivo) {
  console.error("Uso: node registrar_nota.mjs <caminho_do_pdf>");
  process.exit(1);
}

try {
  const texto = readFileSync(arquivo, "utf8");
  const dados = extrairDadosPdf(texto);
  const pedidoId = await registrarPedido(dados, arquivo);
  console.log(`Pedido #${pedidoId} registrado com sucesso`);
  console.log(`Cliente: ${dados.cliente || "—"}`);
  console.log(`NF: ${dados.numero || "—"}`);
  console.log(`Data: ${dados.data || "—"}`);
  console.log(`Valor: R$ ${dados.valor_total || "—"}`);
} catch (err) {
  console.error("Erro:", err.message);
  process.exit(1);
}
