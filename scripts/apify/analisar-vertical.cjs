// Varredura de vertical — analisa outputs do Apify e nota cada nicho nos 4 filtros
// Uso: node scripts/apify/analisar-vertical.js
const fs = require("fs");
const path = require("path");

// Sufixo opcional de região: node analisar-vertical.cjs -guarapuava
const SUF = process.argv[2] || "";

const VERTICAIS = {
  obras: { arquivo: "output-v-obras.json", nome: "Reformas/obras (engenharia, marcenaria, construtora)" },
  imobiliarias: { arquivo: "output-v-imobiliarias.json", nome: "Imobiliárias / administradoras" },
  esquadrias: { arquivo: "output-v-esquadrias.json", nome: "Esquadrias / portas de aço / alumínio" },
  oficinas: { arquivo: "output-v-oficinas.json", nome: "Oficinas especializadas (mecânica, funilaria, suspensão)" },
  odonto: {
    arquivo: "output-v-odonto.json",
    nome: "Odonto (clínica odontológica, dentista, ortodontia)",
    // filtro de categoria: mantém só consultórios/clínicas odonto (derruba ruído tipo rua/comércio)
    filtro: /dent|dental|odont|oral|orthodont|teeth|tooth|smile|sorriso/i,
  },
  estetica: {
    arquivo: "output-v-estetica.json",
    nome: "Estética (clínica de estética, facial e corporal, laser)",
    filtro: /beauty|esthetic|estétic|spa|skin|laser|weight|massage|hair removal|depila|wellness|salon|bem-estar|specialized clinic|health and beauty/i,
  },
};

// Ticket/bolso do nicho (qualitativo — avaliado à mão, baseado no produto do nicho)
const BOLSO = {
  obras: 9,          // obra de engenharia/marcenaria: ticket milhares~dezenas de mil
  imobiliarias: 8,   // comissão por venda/locação; já paga portal/anúncio
  esquadrias: 8,     // kit de esquadrias é item de obra: 3-30k
  oficinas: 6,       // ticket 300-2k por serviço; especializadas sobem
  odonto: 9,         // CLV paciente (implante/orto) R$5-30k; paga por paciente, entende LTV
  estetica: 8,       // CLV cliente de ciclo (laser/skin) R$5-15k; retorna a cada 3-4 meses
};

// "Site" que é só rede social/encurtador não conta como site próprio (gap Instagram-first)
const SOCIAL_HOST = /instagram\.com|facebook\.com|linktr\.ee|wa\.me|api\.whatsapp|beacons\.ai|link\.bio|carrd\.co|hotmart|kw\.ai/i;
function temSiteProprio(p) {
  return !!p.website && !SOCIAL_HOST.test(p.website);
}

function notaPercentual(frac, cortes) {
  // frac = fração 0..1 (ex: % sem site). cortes = [alto, medio] faixas de frac
  if (frac >= cortes[0]) return 10;
  if (frac >= cortes[1]) return 7;
  if (frac >= cortes[2]) return 4;
  return 1;
}

function scoreOportunidade(p) {
  if (p.permanentlyClosed) return null; // descarta fechado
  let s = 0;
  if (!temSiteProprio(p)) s += 35;
  const imgs = p.imagesCount ?? 0;
  if (imgs < 10) s += 25;
  else if (imgs < 20) s += 15;
  else if (imgs < 50) s += 5;
  const rev = p.reviewsCount ?? 0;
  if (rev < 5) s += 20;
  else if (rev < 20) s += 10;
  else if (rev < 100) s += 3;
  if (p.claimThisBusiness) s += 20;
  if (p.temporarilyClosed) s -= 20;
  return Math.max(0, Math.min(100, s));
}

function mediana(nums) {
  if (!nums.length) return 0;
  const s = [...nums].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

const resultados = {};

for (const [chave, meta] of Object.entries(VERTICAIS)) {
  const arq = meta.arquivo.replace(".json", SUF + ".json");
  const arqPath = path.join(__dirname, arq);
  if (!fs.existsSync(arqPath)) {
    console.log(`(skip) ${chave}: arquivo ${arq} não existe nesta região`);
    continue;
  }
  const raw = JSON.parse(fs.readFileSync(arqPath, "utf8"));
  // dedupe por placeId/fid
  const vistos = new Set();
  const itens = [];
  for (const p of raw) {
    const id = p.placeId || p.fid || p.title;
    if (vistos.has(id)) continue;
    vistos.add(id);
    // filtro de categoria (só nos nichos novos — evita ruído tipo rua/estabelecimento errado)
    if (meta.filtro) {
      const cats = [p.categoriesName, p.categoryName, ...(Array.isArray(p.categories) ? p.categories : [])]
        .filter(Boolean).join(" | ");
      if (!meta.filtro.test(cats) && !meta.filtro.test(p.title || "")) continue;
    }
    itens.push(p);
  }
  const vivos = itens.filter((p) => !p.permanentlyClosed);
  const comRev = vivos.filter((p) => (p.reviewsCount ?? 0) >= 10);
  const semSite = vivos.filter((p) => !temSiteProprio(p));
  const socialComoSite = vivos.filter((p) => p.website && !temSiteProprio(p));
  const fracos = vivos.filter((p) => !temSiteProprio(p) || (p.imagesCount ?? 0) < 10);
  const naoReivindicados = vivos.filter((p) => p.claimThisBusiness);
  const fechados = itens.length - vivos.length;

  const scores = vivos.map((p) => ({ p, s: scoreOportunidade(p) }));
  scores.sort((a, b) => b.s - a.s);

  // Filtro 1: depende de ser encontrado — nicho com busca ativa gera avaliações
  const medRev = mediana(vivos.map((p) => p.reviewsCount ?? 0));
  const f1 = vivos.length ? notaPercentual(comRev.length / vivos.length, [0.35, 0.15, 0.05]) : 1;

  // Filtro 2: bolso (qualitativo por nicho)
  const f2 = BOLSO[chave] >= 8 ? 10 : BOLSO[chave] >= 6 ? 7 : 4;

  // Filtro 3: dor de aquisição visível — presença fraca
  const f3 = vivos.length ? notaPercentual(fracos.length / vivos.length, [0.7, 0.5, 0.3]) : 1;

  // Filtro 4: braga justa — sem agência instalada (proxy: sem site próprio)
  const f4 = vivos.length ? notaPercentual(semSite.length / vivos.length, [0.7, 0.45, 0.25]) : 1;

  const media = ((f1 + f2 + f3 + f4) / 4).toFixed(1);

  resultados[chave] = {
    nome: meta.nome,
    total: itens.length,
    vivos: vivos.length,
    fechados,
    f1, f2, f3, f4,
    media: Number(media),
    stats: {
      medianaReviews: medRev,
      pctCom10Reviews: vivos.length ? Math.round((comRev.length / vivos.length) * 100) : 0,
      pctSemSite: vivos.length ? Math.round((semSite.length / vivos.length) * 100) : 0,
      pctSocialComoSite: vivos.length ? Math.round((socialComoSite.length / vivos.length) * 100) : 0,
      pctPresencaFraca: vivos.length ? Math.round((fracos.length / vivos.length) * 100) : 0,
      pctNaoReivindicado: vivos.length ? Math.round((naoReivindicados.length / vivos.length) * 100) : 0,
      semSite: semSite.length,
    },
    top: scores.slice(0, 12).map(({ p, s }) => ({
      nota: s,
      nome: p.title,
      cidade: p.city,
      tel: p.phone || "",
      rev: p.reviewsCount ?? 0,
      imgs: p.imagesCount ?? 0,
      site: temSiteProprio(p) ? "sim" : (p.website ? "social" : "NAO"),
      reivindicado: p.claimThisBusiness ? "nao" : "sim",
      url: p.url,
    })),
  };
}

// Ranking final
const ranking = Object.entries(resultados)
  .sort((a, b) => b[1].media - a[1].media)
  .map(([k, v], i) => `${i + 1}º ${v.nome} — ${v.media}/10 (F1=${v.f1} busca | F2=${v.f2} bolso | F3=${v.f3} dor | F4=${v.f4} braga) — ${v.vivos} negócios`);

console.log("=== RANKING DAS VERTICAIS ===");
console.log(ranking.join("\n"));
console.log("\n=== STATS ===");
for (const [k, v] of Object.entries(resultados)) {
  console.log(`${k}: ${v.total} bruto / ${v.vivos} vivos / ${v.fechados} fechados | mediana reviews: ${v.stats.medianaReviews} | ${v.stats.pctCom10Reviews}% com 10+ rev | ${v.stats.pctSemSite}% sem site (deles ${v.stats.pctSocialComoSite}% é só social) | ${v.stats.pctPresencaFraca}% presença fraca | ${v.stats.pctNaoReivindicado}% não reivindicado`);
}
console.log("\n=== TOP 12 PROSPECTS POR VERTICAL ===");
for (const [k, v] of Object.entries(resultados)) {
  console.log(`\n--- ${v.nome} ---`);
  for (const t of v.top) {
    console.log(`[${t.nota}] ${t.nome} (${t.cidade}) tel:${t.tel} rev:${t.rev} imgs:${t.imgs} site:${t.site} reivindicado:${t.reivindicado}`);
  }
}

const outName = "vertical-resultado" + SUF + ".json";
fs.writeFileSync(path.join(__dirname, outName), JSON.stringify(resultados, null, 2));
console.log("\nJSON salvo em scripts/apify/" + outName);
