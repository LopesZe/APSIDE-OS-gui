import { supabase } from "./db.js";

const TAXA_COMISSAO = {{COMMISSION_RATE}};
const MARCA_PRIMARIA = "{{PRIMARY_BRAND}}";

// ==================== CLIENTES ====================

export async function buscarCliente(nome) {
  const { data, error } = await supabase
    .from("clientes")
    .select("*")
    .ilike("nome", `%${nome}%`);
  if (error) throw new Error(error.message);
  return data || [];
}

export async function listarClientes() {
  const { data, error } = await supabase.from("clientes").select("*").order("nome");
  if (error) throw new Error(error.message);
  return data || [];
}

export async function criarCliente({ nome, cnpj, cidade, contato, endereco }) {
  const { data, error } = await supabase
    .from("clientes")
    .insert({ nome, cnpj, cidade, contato, endereco })
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

// ==================== PRODUTOS ====================

export async function buscarProduto(query) {
  let q = supabase.from("produtos").select("*").order("descricao");
  if (query) q = q.or(`descricao.ilike.%${query}%, codigo.ilike.%${query}%, marca.ilike.%${query}%`);
  const { data, error } = await q;
  if (error) throw new Error(error.message);
  return data || [];
}

export async function criarProduto({ codigo, descricao, marca, unidade, preco_ref }) {
  const { data, error } = await supabase
    .from("produtos")
    .insert({ codigo, descricao, marca, unidade, preco_ref })
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

// ==================== PEDIDOS ====================

export async function registrarPedido({ cliente_id, data, valor_total, vendedor, numero_pedido, origem, condicao, itens }) {
  const { data: pedido, error } = await supabase
    .from("pedidos")
    .insert({ cliente_id, data, valor_total, vendedor, numero_pedido, origem, condicao })
    .select("id")
    .single();
  if (error) throw new Error(error.message);

  if (itens && itens.length) {
    for (const item of itens) {
      await supabase.from("itens_pedido").insert({
        pedido_id: pedido.id,
        produto_id: item.produto_id,
        qtd: item.qtd,
        preco_unit: item.preco_unit,
        subtotal: item.subtotal || item.qtd * item.preco_unit,
      });
    }
  }

  return pedido;
}

export async function listarPedidos({ de, ate, cliente_id } = {}) {
  let q = supabase
    .from("pedidos")
    .select("*, clientes(nome, cidade)")
    .order("data", { ascending: false });
  if (de) q = q.gte("data", de);
  if (ate) q = q.lte("data", ate);
  if (cliente_id) q = q.eq("cliente_id", cliente_id);
  const { data, error } = await q;
  if (error) throw new Error(error.message);
  return data || [];
}

// ==================== COMISSÕES ====================

export async function relatorioComissao(mes) {
  const ini = `${mes}-01`;
  const fim = `${mes}-31`;

  const { data: itens } = await supabase
    .from("itens_pedido")
    .select("subtotal, pedidos(data, clientes(nome)), produtos(marca)");

  let totalRegistrado = 0;
  const porCliente = {};

  for (const it of itens || []) {
    if (it.produtos?.marca !== MARCA_PRIMARIA) continue;
    if (!it.pedidos || it.pedidos.data < ini || it.pedidos.data > fim) continue;
    const nome = it.pedidos.clientes?.name || "—";
    const v = Number(it.subtotal || 0);
    porCliente[nome] = (porCliente[nome] || 0) + v;
    totalRegistrado += v;
  }

  const { data: nums } = await supabase.from("lumanti_numeros").select("*").eq("mes", mes);
  let totalLumanti = 0;
  const lumPorCliente = {};
  for (const n of nums || []) {
    lumPorCliente[n.cliente] = (lumPorCliente[n.cliente] || 0) + Number(n.valor || 0);
    totalLumanti += Number(n.valor || 0);
  }

  const meta5 = Math.round(totalRegistrado * TAXA_COMISSAO * 100) / 100;
  const realizado5 = Math.round(totalLumanti * TAXA_COMISSAO * 100) / 100;

  return {
    mes,
    taxa: TAXA_COMISSAO,
    total_registrado: totalRegistrado,
    total_lumanti: totalLumanti,
    meta_5: meta5,
    realizado_5: realizado5,
    variacao: Math.round((realizado5 - meta5) * 100) / 100,
    por_cliente: Object.entries(porCliente).map(([cliente, registrado]) => ({
      cliente,
      registrado,
      lumanti: lumPorCliente[cliente] || 0,
      diff: (lumPorCliente[cliente] || 0) - registrado,
    })),
  };
}

export async function salvarFechamento({ mes, das_valor, das_anexo, numeros }) {
  const { error } = await supabase.from("comissoes_mes").upsert(
    { mes, das_valor, das_anexo },
    { onConflict: "mes" }
  );
  if (error) throw new Error(error.message);

  if (numeros && numeros.length) {
    await supabase.from("lumanti_numeros").delete().eq("mes", mes);
    const rows = numeros
      .filter((n) => n.cliente && n.valor != null)
      .map((n) => ({ mes, cliente: n.cliente, valor: n.valor }));
    if (rows.length) {
      await supabase.from("lumanti_numeros").insert(rows);
    }
  }

  return { ok: true };
}

// ==================== NF ====================

export async function salvarNF({ pedido_id, arquivo }) {
  const { error } = await supabase
    .from("pedidos")
    .update({ nf_arquivo: arquivo })
    .eq("id", pedido_id);
  if (error) throw new Error(error.message);
  return { ok: true };
}
