import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { supabase } from "../src/db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = readFileSync(path.join(__dirname, "index.html"), "utf8");

const MARCA_PRIMARIA = "{{PRIMARY_BRAND}}";
const DASHBOARD_TITLE = "{{DASHBOARD_TITLE}}";

const app = new Hono();

supabase.storage.createBucket("notas", { public: false }).catch(() => {});

app.get("/", (c) => c.html(html));

app.get("/api/dashboard", async (c) => {
  const de = c.req.query("de") || "2000-01-01";
  const ate = c.req.query("ate") || "2999-12-31";

  let query = supabase
    .from("pedidos")
    .select(
      "id, data, valor_total, vendedor, numero_pedido, clientes(nome, cidade), itens_pedido(qtd, subtotal, produtos(codigo, descricao, marca))"
    )
    .gte("data", de)
    .lte("data", ate);

  const { data: pedidos, error } = await query;
  if (error) return c.json({ error: error.message }, 500);

  let total = 0;
  const clientes = {};
  const marcas = {};
  const prodMap = {};
  for (const p of pedidos || []) {
    const v = Number(p.valor_total || 0);
    total += v;
    const nome = p.clientes?.nome || "—";
    clientes[nome] = (clientes[nome] || 0) + v;
    for (const it of p.itens_pedido || []) {
      const pr = it.produtos || {};
      const m = pr.marca || "SEM MARCA";
      marcas[m] = (marcas[m] || 0) + Number(it.subtotal || 0);
      const key = pr.codigo || "D:" + (pr.descricao || "");
      if (!prodMap[key])
        prodMap[key] = { codigo: pr.codigo || "—", descricao: pr.descricao || "—", marca: pr.marca || "", qty: 0, valor: 0 };
      prodMap[key].qty += Number(it.qtd || 0);
      prodMap[key].valor += Number(it.subtotal || 0);
    }
  }
  const num = pedidos?.length || 0;
  const ticket = num ? total / num : 0;

  const topClientes = Object.entries(clientes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([nome, valor]) => ({ nome, valor }));

  const vendasMarca = Object.entries(marcas)
    .sort((a, b) => b[1] - a[1])
    .map(([marca, valor]) => ({ marca, valor }));

  const topProdutos = Object.values(prodMap)
    .sort((a, b) => b.valor - a.valor)
    .slice(0, 10);

  const { count: nCli } = await supabase.from("clientes").select("*", { count: "exact", head: true });
  const { count: nProd } = await supabase.from("produtos").select("*", { count: "exact", head: true });

  return c.json({
    periodo: { de, ate },
    cards: {
      total_vendas: total,
      num_pedidos: num,
      ticket_medio: ticket,
      clientes: nCli || 0,
      produtos: nProd || 0,
    },
    topClientes,
    vendasMarca,
    topProdutos,
  });
});

app.get("/api/produtos", async (c) => {
  const q = c.req.query("q") || "";
  const de = c.req.query("de") || "";
  const ate = c.req.query("ate") || "";

  if (de || ate) {
    const ini = de || "2000-01-01";
    const fim = ate || "2999-12-31";
    const { data: peds } = await supabase.from("pedidos").select("id").gte("data", ini).lte("data", fim);
    const pedidoIds = (peds || []).map((p) => p.id);
    if (!pedidoIds.length) return c.json({ produtos: [] });

    const { data: itens } = await supabase.from("itens_pedido").select("produtos(*)").in("pedido_id", pedidoIds);
    const seen = new Set();
    const prods = [];
    for (const it of itens || []) {
      const pr = it.produtos;
      if (pr && !seen.has(pr.id)) {
        seen.add(pr.id);
        prods.push(pr);
      }
    }
    prods.sort((a, b) => (a.descricao || "").localeCompare(b.descricao || ""));

    let filtered = prods;
    if (q) {
      const ql = q.toLowerCase();
      filtered = prods.filter((p) => [p.descricao, p.codigo, p.marca].join(" ").toLowerCase().includes(ql));
    }
    return c.json({ produtos: filtered });
  }

  let query = supabase.from("produtos").select("*").order("descricao");
  if (q) query = query.or(`descricao.ilike.%${q}%, codigo.ilike.%${q}%, marca.ilike.%${q}%`);
  const { data, error } = await query;
  if (error) return c.json({ error: error.message }, 500);
  return c.json({ produtos: data || [] });
});

app.get("/api/clientes", async (c) => {
  const de = c.req.query("de") || "2000-01-01";
  const ate = c.req.query("ate") || "2999-12-31";
  const { data: cls } = await supabase.from("clientes").select("*");
  const { data: peds } = await supabase.from("pedidos").select("cliente_id, valor_total, data").gte("data", de).lte("data", ate);
  const agg = {};
  for (const p of peds || []) {
    const a = agg[p.cliente_id] || (agg[p.cliente_id] = { total: 0, n: 0, ult: "" });
    a.total += Number(p.valor_total || 0);
    a.n += 1;
    if (p.data > a.ult) a.ult = p.data;
  }
  const out = (cls || [])
    .map((cl) => {
      const a = agg[cl.id] || { total: 0, n: 0, ult: "" };
      return { id: cl.id, nome: cl.nome, cidade: cl.cidade, cnpj: cl.cnpj, total: a.total, num: a.n, ultima: a.ult };
    })
    .sort((x, y) => y.total - x.total);
  return c.json({ clientes: out });
});

app.get("/api/cliente/:id", async (c) => {
  const id = c.req.param("id");
  const { data: cl } = await supabase.from("clientes").select("*").eq("id", id).single();
  if (!cl) return c.json({ error: "cliente não encontrado" }, 404);
  const { data: peds } = await supabase
    .from("pedidos")
    .select("id, data, valor_total, origem, numero_pedido, vendedor, condicao")
    .eq("cliente_id", id)
    .order("data", { ascending: false });
  return c.json({ cliente: cl, pedidos: peds || [] });
});

app.get("/api/pedido/:id", async (c) => {
  const id = c.req.param("id");
  const { data: p } = await supabase
    .from("pedidos")
    .select("*, clientes(nome, cidade, cnpj), itens_pedido(id, qtd, preco_unit, subtotal, produtos(id, descricao, marca, codigo, unidade))")
    .eq("id", id)
    .single();
  if (!p) return c.json({ error: "pedido não encontrado" }, 404);
  return c.json({ pedido: p });
});

app.get("/api/pedido/:id/nf", async (c) => {
  const id = c.req.param("id");
  const { data: p } = await supabase.from("pedidos").select("nf_arquivo").eq("id", id).maybeSingle();
  if (!p || !p.nf_arquivo) return c.json({ error: "sem arquivo de NF para este pedido" }, 404);
  const { data: signed, error } = await supabase.storage.from("notas").createSignedUrl(p.nf_arquivo, 60);
  if (error) return c.json({ error: error.message }, 500);
  return c.json({ url: signed.signedUrl });
});

const port = process.env.PORT || 3000;
serve({ fetch: app.fetch, port }, (info) => {
  console.log(`${DASHBOARD_TITLE} em http://localhost:${info.port}`);
});
