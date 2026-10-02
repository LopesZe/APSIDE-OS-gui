import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import * as tools from "./tools.js";

const server = new Server(
  { name: "sistema-{{OS_NAME}}", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "buscar_cliente",
      description: "Busca clientes por nome (parcial, case-insensitive)",
      inputSchema: {
        type: "object",
        properties: { nome: { type: "string", description: "Nome do cliente" } },
        required: ["nome"],
      },
    },
    {
      name: "listar_clientes",
      description: "Lista todos os clientes cadastrados",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "criar_cliente",
      description: "Cadastra um cliente novo",
      inputSchema: {
        type: "object",
        properties: {
          nome: { type: "string" },
          cnpj: { type: "string" },
          cidade: { type: "string" },
          contato: { type: "string" },
          endereco: { type: "string" },
        },
        required: ["nome"],
      },
    },
    {
      name: "buscar_produto",
      description: "Busca produtos por descrição, código ou marca",
      inputSchema: {
        type: "object",
        properties: { query: { type: "string", description: "Termo de busca" } },
      },
    },
    {
      name: "criar_produto",
      description: "Cadastra um produto novo",
      inputSchema: {
        type: "object",
        properties: {
          codigo: { type: "string" },
          descricao: { type: "string" },
          marca: { type: "string" },
          unidade: { type: "string" },
          preco_ref: { type: "number" },
        },
        required: ["descricao"],
      },
    },
    {
      name: "registrar_pedido",
      description: "Registra um pedido com itens",
      inputSchema: {
        type: "object",
        properties: {
          cliente_id: { type: "number" },
          data: { type: "string" },
          valor_total: { type: "number" },
          vendedor: { type: "string" },
          numero_pedido: { type: "string" },
          origem: { type: "string" },
          condicao: { type: "string" },
          itens: {
            type: "array",
            items: {
              type: "object",
              properties: {
                produto_id: { type: "number" },
                qtd: { type: "number" },
                preco_unit: { type: "number" },
                subtotal: { type: "number" },
              },
            },
          },
        },
        required: ["cliente_id", "data", "itens"],
      },
    },
    {
      name: "listar_pedidos",
      description: "Lista pedidos com filtros opcionais",
      inputSchema: {
        type: "object",
        properties: {
          de: { type: "string", description: "Data inicial (YYYY-MM-DD)" },
          ate: { type: "string", description: "Data final (YYYY-MM-DD)" },
          cliente_id: { type: "number" },
        },
      },
    },
    {
      name: "relatorio_comissao",
      description: "Gera relatório de comissão do mês",
      inputSchema: {
        type: "object",
        properties: { mes: { type: "string", description: "Mês (YYYY-MM)" } },
        required: ["mes"],
      },
    },
    {
      name: "salvar_fechamento",
      description: "Salva dados do fechamento mensal de comissão",
      inputSchema: {
        type: "object",
        properties: {
          mes: { type: "string" },
          das_valor: { type: "number" },
          das_anexo: { type: "string" },
          numeros: {
            type: "array",
            items: {
              type: "object",
              properties: { cliente: { type: "string" }, valor: { type: "number" } },
            },
          },
        },
        required: ["mes"],
      },
    },
    {
      name: "salvar_nf",
      description: "Associa arquivo de NF a um pedido",
      inputSchema: {
        type: "object",
        properties: {
          pedido_id: { type: "number" },
          arquivo: { type: "string" },
        },
        required: ["pedido_id", "arquivo"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  try {
    let result;
    switch (name) {
      case "buscar_cliente": result = await tools.buscarCliente(args.nome); break;
      case "listar_clientes": result = await tools.listarClientes(); break;
      case "criar_cliente": result = await tools.criarCliente(args); break;
      case "buscar_produto": result = await tools.buscarProduto(args.query); break;
      case "criar_produto": result = await tools.criarProduto(args); break;
      case "registrar_pedido": result = await tools.registrarPedido(args); break;
      case "listar_pedidos": result = await tools.listarPedidos(args); break;
      case "relatorio_comissao": result = await tools.relatorioComissao(args.mes); break;
      case "salvar_fechamento": result = await tools.salvarFechamento(args); break;
      case "salvar_nf": result = await tools.salvarNF(args); break;
      default: throw new Error(`Tool desconhecida: ${name}`);
    }
    return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
  } catch (err) {
    return { content: [{ type: "text", text: `Erro: ${err.message}` }], isError: true };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.log("MCP server rodando");
