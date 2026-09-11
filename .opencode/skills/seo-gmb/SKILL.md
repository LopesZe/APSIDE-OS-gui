---
name: seo-gmb
description: >
  Pipeline completo de SEO local: diagnostico do concorrente lider no GMB +
  analise SEO on-page do site + relatorio visual + checklist de implementacao.
  Use quando o usuario pedir "SEO", "analisar SEO", "seo do site", "seo local",
  "concorrente no google", "o que o concorrente faz", ou /seo-gmb.
---

# /seo-gmb — Pipeline Completo de SEO Local

Skill de vendas e entrega. Faz engenharia reversa do concorrente lider no Google Meu Negocio, analisa o site do cliente e gera um relatorio completo com plano de acao.

## Dependencias

- WebSearch / WebFetch (busca no Google)
- Acesso ao site do cliente (URL)
- `memoria/empresa.md` (se disponivel)
- Playwright (render HTML para PNG)
- Logo APSIDE: `identidade/LOGO FUNDO ESCURO.png`

## Gatilho

"SEO", "analisar SEO", "seo do site", "seo local", "concorrente no google", "o que o concorrente faz", "/seo-gmb"

---

## Fluxo completo (4 etapas)

### Etapa 1 — Diagnostico do Concorrente no GMB

**O que faz:** Encontra o concorrente lider (1o organico no Map Pack), extrai categorias, servicos, areas, avaliacoes e monta plano de acao pro perfil do cliente.

**Prompt base (copiar e preencher):**

```
# CONTEXTO
Voce e um especialista em SEO local. Vou usar voce para fazer um
DIAGNOSTICO do concorrente que esta em 1o lugar no Google Meu Negocio
da minha regiao, para eu copiar o que funciona no meu proprio perfil.

MEU NEGOCIO:
- Tipo de servico: [EX: encanador]
- Cidade principal: [EX: Sao Paulo]
- Site (se tiver): [COLE O LINK OU ESCREVA "nao tenho"]

# PASSO 1 — IDENTIFICAR O CONCORRENTE CERTO
Na tela do Google com a busca local (ex: "encanador em Sao Paulo"),
olhe o bloco de mapa (o "Map Pack" com 3 empresas no topo).
- IGNORE TOTALMENTE qualquer item com o selo "Patrocinado", "Anuncio"
  ou "Ad". Esses sao pagos e NAO contam.
- Pegue a PRIMEIRA empresa ORGANICA (a primeira que nao seja anuncio).
- Antes de continuar, PARE e me pergunte:
  "O concorrente que vou analisar e [NOME DA EMPRESA]. Confirma?"
- So siga depois que eu responder "sim". Se eu disser outro nome, use
  o que eu indicar.

# PASSO 2 — ABRIR E EXTRAIR OS DADOS
Depois da minha confirmacao, abra o perfil completo desse concorrente
no Google Meu Negocio. Navegue e expanda TODAS as abas e secoes
(Sobre, Servicos, Produtos, Avaliacoes, Fotos) — muitas so aparecem
ao clicar. Nao responda com base so no que esta visivel de primeira.

Extraia e organize:
1. CATEGORIAS — a principal e todas as secundarias
2. SERVICOS — lista completa, com descricao quando houver
3. AREAS DE ATENDIMENTO — todas as cidades/regioes
4. PRODUTOS — nome, preco e descricao de cada um
5. AVALIACOES — nota media, total de avaliacoes e os 5 temas/palavras
   mais repetidos no que os clientes elogiam (e nas reclamacoes, se
   houver)
6. ATRIBUTOS — horario de funcionamento, atributos de identidade
   (ex: "liderado por mulheres") e outros destaques
7. FOTOS — quantidade aproximada e tipos predominantes

# PASSO 3 — PLANO DE ACAO PARA O MEU PERFIL
Monte uma secao objetiva com:
- Categorias que eu DEVERIA adotar (principal + secundarias)
- Servicos que valem a pena (vou validar o volume no Semrush depois)
- Areas de atendimento que fazem sentido pra mim
- O que esse concorrente faz BEM e eu deveria copiar
- Onde ele esta FRACO (oportunidades de eu supera-lo)

# FORMATO DA RESPOSTA
Entregue em topicos claros, separados por secao (Passo 2 e Passo 3).
Use tabela quando ajudar. Seja direto, sem enrolacao.

# REGRAS IMPORTANTES
- Teste do "isso e real?": so sugira categorias, servicos ou areas que
  facam sentido pra um negocio legitimo igual ao meu. Nao invente nem
  encha de itens so pra preencher — o Google pune perfis que parecem
  spam.
- Se algum campo nao estiver visivel ou acessivel, me avise. NUNCA
  invente um dado.
- NUNCA analise um resultado patrocinado/anuncio. Sempre o 1o organico.
- Nao conclua o diagnostico sem ter aberto e lido o perfil de fato.
```

**Saida desta etapa:**
- Categorias do concorrente (principal + secundarias)
- Lista de servicos com descricoes
- Areas de atendimento
- Analise de avaliacoes (nota, volume, temas)
- Plano de acao pro perfil do cliente

---

### Etapa 2 — Analise SEO On-Page do Site

**O que faz:** Analisa o site do cliente nos fatores de SEO on-page que ele controla.

**O que verificar:**

| Fator | O que olhar | Onde |
|-------|-------------|------|
| **Titulo (title tag)** | Palavra-chave principal? Tamanho ideal (50-60 chars)? Cidade no titulo? | `<title>` no HTML |
| **Meta descricao** | Tem? Chama clique? Palavra-chave + cidade? (150-160 chars) | `<meta name="description">` |
| **H1** | Um unico H1? Contem palavra-chave? | Tag `<h1>` |
| **H2s** | Subtitulos com variacoes da palavra-chave? | Tags `<h2>` |
| **URLs** | Estrutura limpa? Palavra-chave na URL? | Barra de endereco |
| **Texto** | Conteudo relevante? Minimo 300 palavras na pagina principal? | Body |
| **Palavras semanticas** | Tem palavras correlacionadas ao assunto? (ex: vidracaria → "instalacao", "reparo", "vidro") | Body |
| **Imagens** | Tem `alt` descritivo? Nome do arquivo descritivo? | Tags `<img>` |
| **Velocidade** | Carrega rapido? (testar com PageSpeed Insights) | pagespeed.web.dev |
| **Mobile** | Responsivo? Texto legivel sem zoom? | Visual + PageSpeed |
| **Schema** | Tem dados estruturados (LocalBusiness)? | `<script type="application/ld+json">` |
| **Links internos** | Navegacao entre paginas? Breadcrumb? | Body |
| **SSL** | HTTPS funcionando? | Barra de endereco |

**Como extrair:**
1. Buscar a URL do cliente
2. Ler o HTML da pagina principal
3. Verificar cada fator acima
4. Notar o que esta bom e o que falta

**Score on-page (0-100):**

| Fator | Pontos |
|-------|--------|
| Title tag otimizada | 15 |
| Meta descricao | 10 |
| H1 unico e otimizado | 10 |
| H2s com variacoes | 10 |
| Conteudo (300+ palavras) | 15 |
| Palavras semanticas (LSI) | 5 |
| Imagens com alt | 10 |
| Velocidade boa (>70 PageSpeed) | 10 |
| Mobile responsivo | 10 |
| Schema LocalBusiness | 5 |
| HTTPS | 5 |

**Classificacao:**
- 0-30 = VERMELHO (precisa URGENTE)
- 31-60 = AMARELO (oportunidade clara)
- 61-80 = OK (melhorias pontuais)
- 81-100 = COMPLETO (ja bem servido)

---

### Etapa 3 — Relatorio Combinado (Markdown + HTML)

**O que faz:** Gera o relatorio completo em dois formatos: markdown pra voce e HTML visual pro cliente.

#### Saida Markdown (interno)

Salvar em `dados/seo/[nome-do-cliente]-[data]/diagnostico-seo.md` com a estrutura:

1. **Cabecalho** — nome, data, cidade, servico
2. **Secao 1: Concorrente GMB** — categorias, servicos, areas, avaliacoes, pontos fortes/fracos
3. **Secao 2: SEO On-Page** — score (0-100), tabela de fatores com status, o que bom/falta
4. **Secao 3: Matematica do SEO** — volume de busca, trafego potencial, conversao estimada, faturamento potencial
5. **Secao 4: Topic Cluster** — estrutura de URLs do concorrente, estrutura sugerida
6. **Secao 5: Plano de Acao** — checklist GMB + checklist SEO on-page + topic cluster + prioridades
7. **Secao 6: Proximos Passos** — o que entregar, prazo, investimento

#### Saida HTML (visual pro cliente)

Criar `relatorio-seo.html` na mesma pasta. Layout:

- **Fundo:** marinho `#1F2133` (cor da marca)
- **Largura:** 1080px (proporcao Instagram/story)
- **Fonte:** Inter (Google Fonts)
- **Estrutura:**
  - Header com logo APSIDE
  - Score GMB (gauge visual verde/amarelo/vermelho)
  - Score On-Page (gauge visual)
  - Tabela "Concorrente Lider" com dados extraidos
  - **Matematica do SEO** — trafego potencial vs atual (visual comparativo)
  - **Topic Cluster** — estrutura de URLs sugerida
  - Tabela "Seu Site" com fatores OK/faltando
  - Checklist de implementacao
  - CTA final (contato)

**Renderizar PNG:**

```javascript
// render-seo.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.resolve(__dirname, 'relatorio-seo.html'));
  await p.waitForTimeout(1500);
  const buf = await p.screenshot({ fullPage: true });
  fs.writeFileSync(path.resolve(__dirname, 'relatorio-seo.png'), buf);
  console.log('gerado relatorio-seo.png', buf.length, 'bytes');
  await b.close();
})();
```

---

### Etapa 4 — Checklist de Implementacao

**O que faz:** Gera lista practica de o que fazer, em ordem de prioridade.

**Checklist GMB (perfil do Google):**
- [ ] Adicionar categoria principal: [categoria]
- [ ] Adicionar categorias secundarias: [lista]
- [ ] Cadastrar [N] servicos validados
- [ ] Definir areas de atendimento: [lista]
- [ ] Subir [N]+ fotos reais
- [ ] Solicitar avaliacoes (meta: 10+)
- [ ] Responder avaliacoes existentes
- [ ] Manter horario atualizado

**Checklist SEO On-Page (site):**
- [ ] Corrigir title tag: [sugestao]
- [ ] Criar meta descricao: [sugestao]
- [ ] Ajustar H1: [sugestao]
- [ ] Adicionar H2s com variacoes
- [ ] Escrever conteudo (minimo 300 palavras)
- [ ] Adicionar alt em todas as imagens
- [ ] Otimizar velocidade (meta: >70 PageSpeed)
- [ ] Verificar responsividade mobile
- [ ] Inserir schema LocalBusiness
- [ ] Garantir HTTPS

**Priorizacao:**
1. Title tag + Meta descricao (impacto imediato, 30 min)
2. H1 + H2s (impacto alto, 1h)
3. Conteudo (impacto alto, 2-4h)
4. Fotos no GMB (impacto alto, rapido)
5. Avaliacoes (impacto alto, recorrente)
6. Schema (impacto medio, 1h)
7. Velocidade (impacto medio, depende do hosting)
8. Imagens alt (impacto baixo, rapido)

---

### Etapa 5 — Matematica do SEO (pro cliente entender o valor)

**O que faz:** Calcula o potencial financeiro de SEO pro cliente. Mostra quanto ele pode ganhar se estiver bem posicionado.

**Como calcular:**

```
1. VOLUME DE BUSCA:
   → Buscar "[servico] [cidade]" no Google
   → Estimar quantas pessoas buscam isso por mes
   → Ex: "vidracaria em Campinas" = ~1.500 buscas/mes

2. TRAFEGO POTENCIAL:
   → Posicao 1-3 = ~60% dos cliques
   → Posicao 4-10 = ~30% dos cliques
   → Posicao 11+ = ~5% dos cliques
   → Ex: 1.500 × 60% = 900 visitas/mes (se no topo)

3. CONVERSAO:
   → Site local: 3-5% dos visitantes ligam/mandam WhatsApp
   → Ex: 900 × 4% = 36 leads/mes

4. FATURAMENTO:
   → Leads × Ticket medio = Faturamento potencial
   → Ex: 36 × R$300 = R$10.800/mes potencial
```

**Como mostrar pro cliente:**

> "Existem [X] pessoas por mes buscando [servico] em [cidade]. Hoje voce nao aparece pra nenhuma. Seu concorrente aparece pra [Y] delas. Com um site otimizado, voce poderia estar captando [Z] clientes por mes. Sao R$[valor] em receita que esta indo pro concorrente."

**Importante:**
- NUNCA inventar os numeros — usar estimativas conservadoras
- Mostrar que o investimento se paga em poucos meses
- Comparar com Google Ads (mais caro, para quando parar de pagar)

---

### Etapa 6 — Topic Cluster (estrutura de URLs)

**O que faz:** Mostra como o concorrente estrutura as URLs e sugere a estrutura ideal pro cliente.

**Conceito:**
```
ESTRUTURA RUIM (generica):
/servicos/
/sobre/
/contato/

ESTRUTURA BOA (por cidade/servico):
/servico/cidade/
/servico/cidade/subservico-1/
/servico/cidade/subservico-2/

EXEMPLO REAL (vidracaria):
/vidracaria/campinas/
/vidracaria/paulinia/
/vidracaria/limeira/
/vidracaria/instalacao/
/vidracaria/reparo/
```

**Por que funciona:**
- Google entende a hierarquia do site
- Cada pagina ranquea pra uma palavra-chave especifica
- Topic cluster = autoridade no assunto
- "Quando o Google vê que voce domina tudo sobre um assunto, ele confia mais no seu site"

**Como mostrar pro cliente:**

> "Seu concorrente tem uma pagina pra cada cidade que ele atende. Pra Campinas, tem. Pra Paulinia, tem. Pra Limeira, tem. Cada pagina traz clientes diferentes. Voce so tem uma pagina generica. Sao clientes que estao indo pro concorrente."

**Checklist de Topic Cluster:**
- [ ] Criar pagina principal: /[servico]/[cidade]/
- [ ] Criar paginas por sub-servico: /[servico]/[cidade]/[subservico]/
- [ ] Criar paginas por regiao (se atende varias): /[servico]/[bairro]/
- [ ] Linkar todas as paginas entre si (links internos)
- [ ] Cada pagina com conteudo unico (nao copiar/colar)

---

## Como rodar (sequencia)

Quando o usuario pedir `/seo-gmb` ou "analisar SEO do [NOME]", rodar na ordem:

```
1. Perguntar: nome do negocio, tipo de servico, cidade, URL do site
2. RODAR ETAPA 1 (diagnostico GMB):
   → Buscar "[servico] [cidade]" no Google
   → Encontrar 1o concorrente organico (ignorar anuncios)
   → Confirmar nome com o usuario
   → Extrair dados do perfil GMB
   → Montar plano de acao

3. RODAR ETAPA 2 (SEO on-page):
   → Buscar a URL do cliente
   → Ler HTML e verificar 12 fatores
   → Calcular score on-page

4. RODAR ETAPA 3 (relatorio):
   → Gerar markdown com tudo
   → Gerar HTML visual
   → Renderizar PNG

5. RODAR ETAPA 4 (checklist):
   → Gerar checklist GMB + SEO
   → Priorizar por impacto

6. RODAR ETAPA 5 (matematica do SEO):
   → Estimar volume de busca do servico na cidade
   → Calcular trafego potencial
   → Calcular conversao estimada
   → Mostrar faturamento potencial

7. RODAR ETAPA 6 (topic cluster):
   → Mapear URLs do concorrente
   → Sugerir estrutura pro cliente
   → Listar paginas a criar

8. ENTREGAR RESUMO:
   - Score GMB do concorrente: XX
   - Score on-page do site: XX/100
   - Trafego potencial: XX visitas/mes
   - Faturamento potencial: R$XX/mes
   - Arquivos: diagnostico-seo.md + relatorio-seo.png
   - Top 3 prioridades
```

---

## Modo parcial

| Pedido do usuario | Etapa rodada |
|---|---|
| "diagnostico do concorrente", "o que o concorrente faz" | So Etapa 1 |
| "analise do site", "seo on-page" | So Etapa 2 |
| "relatorio de seo", "mostrar pro cliente" | Etapas 3+4 |
| "seo completo", "/seo-gmb" | **Todas as 4** |

---

## Organizacao de arquivos

```
dados/seo/[nome-do-cliente]-[data]/
├── diagnostico-seo.md        ← relatorio markdown (interno)
├── relatorio-seo.html        ← HTML visual (fonte)
├── render-seo.js             ← script de renderizacao
└── relatorio-seo.png         ← PNG pronto pra cliente
```

---

## Regras

- **Nunca inventar dados** — so anotar o que foi encontrado de fato
- **Ignorar anuncios** — sempre o 1o organico no Map Pack
- **Confirmar concorrente** — sempre perguntar ao usuario antes de extrair
- **Teste "isso e real?"** — so sugerir categorias/servicos que o negocio realmente entrega
- **Fotos reais** — nunca banco de imagens
- **Salvar tudo** — diagnostico pode virar prova social depois
- **Priorizar por impacto** — title tag antes de schema
- **Tom direto** — sem jargao, sem enrolacao
