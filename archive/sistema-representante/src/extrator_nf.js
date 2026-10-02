// Extrator de NF-e brasileira via regex
// Usado pelo registrar_nota.mjs e pelo bot_telegram.mjs

export function extrairDadosPdf(texto) {
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

  // Nome do cliente (após Razão Social ou Nome Destinatário)
  const clienteMatch = texto.match(/(?:raz[ãa]o social|nome do destinat[áa]rio)[:\s]*(.*?)(?:\n|cnpj)/i);
  if (clienteMatch) dados.cliente = clienteMatch[1].trim();

  // Valor total
  const valorMatch = texto.match(/valor total[:\s]*R?\$?\s*([\d.,]+)/i);
  if (valorMatch) dados.valor_total = parseFloat(valorMatch[1].replace(".", "").replace(",", "."));

  // Condição de pagamento
  const condMatch = texto.match(/condi[çc][ãa]o de pagamento[:\s]*(.*?)(?:\n|$)/i);
  if (condMatch) dados.condicao = condMatch[1].trim();

  // Vendedor
  const vendedorMatch = texto.match(/vendedor[:\s]*(.*?)(?:\n|$)/i);
  if (vendedorMatch) dados.vendedor = vendedorMatch[1].trim();

  return dados;
}
