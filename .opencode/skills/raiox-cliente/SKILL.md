---
name: raiox-cliente
description: >
  Raio-X Digital completo para cliente. Pesquisa Google Maps, site, Instagram, YouTube,
  gera dois documentos: PDF pro cliente (identidade visual da empresa) e PDF interno (escopo, preços, complexidade).
  Use quando o usuário pedir "raio-x", "raiox", "diagnóstico digital", "analisar cliente",
  "diagnóstico completo", ou /raiox-cliente.
---

# /raiox-cliente — Raio-X Digital Completo para Cliente

Skill de diagnóstico e prospecção. Recebe os dados de um cliente → pesquisa completa na internet → gera dois documentos profissionais: um pro cliente e um interno pra APSIDE.

**Este é o primeiro passo antes de fechar qualquer contrato.**

## Dependências

- **Nome do cliente + cidade** (obrigatório)
- **Prints/screenshots** do Instagram, GMB, site (se o usuário enviar)
- **Playwright** (já instalado localmente)
- **Logo APSIDE:** `identidade/logo-apside-gradiente.svg`
- **Logo do cliente:** baixada do site deles ou enviada pelo usuário

---

## Fluxo completo (3 fases)

### Fase 1 — Pesquisa e Coleta de Dados

**Objetivo:** reunir todas as informações reais do cliente na internet.

#### 1.1 Google Maps (GMB)
1. Buscar o nome do negócio no Google
2. Localizar o painel do GMB
3. Anotar:
   - Nome completo
   - Nota média + quantidade de avaliações
   - Endereço completo
   - Telefone
   - Horário de funcionamento
   - Website
   - Instagram (se linkado)
   - Categoria
   - Fotos (quantas tem)
   - Postagens (quantas feitas)
   - Q&A (perguntas e respostas)

#### 1.2 Website
1. Acessar o site do cliente
2. Anotar:
   - Estrutura (quantas páginas, menu)
   - Serviços listados
   - Planos/preços (se tiver)
   - WhatsApp integrado (sim/não)
   - Formulário de contato
   - Blog/conteúdo
   - FAQ
   - Área do cliente
   - LGPD/cookies
   - Tema/template usado

#### 1.3 SEO Técnico
1. Verificar `sitemap.xml` (existe? returna 200?)
2. Verificar `robots.txt` (está configurado?)
3. Verificar Google Analytics/GA4 (tem script no site?)
4. Verificar Meta Pixel (Facebook)
5. Verificar Google Tag Manager
6. Anotar title da página principal
7. Anotar meta description

#### 1.4 Instagram
1. Acessar o perfil do Instagram
2. Anotar:
   - Quantidade de seguidores
   - Quantidade de posts
   - Quantidade seguindo
   - Bio (texto completo)
   - Link na bio
   - Highlights organizados
   - Frequência de posts (estimativa)
   - Reels (quantos)
   - Tipo de conteúdo (educativo, promocional, etc)

#### 1.5 YouTube
1. Buscar canal no YouTube
2. Anotar:
   - Nome do canal
   - Quantidade de inscritos
   - Quantidade de vídeos
   - Última postagem (data)
   - Tipo de conteúdo

#### 1.6 Redes Sociais (outras)
1. Verificar Facebook, LinkedIn, TikTok
2. Anotar se existem e qual atividade

---

### Fase 2 — Análise e Score

**Objetivo:** calcular o score digital (0-100) e identificar pontos fortes e fracos.

#### 2.1 Critérios de Análise (10 itens)

| Critério | Pontos | O que verificar |
|----------|--------|-----------------|
| **GMB Nota** | 15 | Nota ≥4.5 = ok, <4.5 = problema |
| **GMB Avaliações** | 15 | >50 = ok, 20-50 = warn, <20 = problema |
| **Website** | 15 | Existe e funcional = ok, não existe = problema |
| **SEO Técnico** | 10 | Sitemap + GA4 = ok, um dos dois = warn, nenhum = problema |
| **Instagram** | 10 | >500 seg = ok, 100-500 = warn, <100 = problema |
| **Fotos no GMB** | 10 | >10 fotos = ok, 3-10 = warn, <3 = problema |
| **WhatsApp** | 5 | Integrado = ok, não integrado = problema |
| **YouTube** | 5 | Ativo = ok, existe mas parado = warn, não existe = problema |
| **Conteúdo** | 5 | Blog/FAQ = ok, nenhum = problema |
| **Automação** | 5 | Chatbot/bot = ok, nenhum = problema |

#### 2.2 Cálculo do Score

**Soma total = Score (0-100)**

**Classificação:**
- **0-30 = 🔴 CRÍTICO** — Precisa URGENTE
- **31-60 = 🟡 REGULAR** — Oportunidade clara
- **61-80 = 🟢 BOM** — Base sólida, melhorias pontuais
- **81-100 = ✅ EXCELENTE** — Não prospecar

#### 2.3 Identificar Dados Corretos vs Errados

**Importante:** verificar SE os dados coletados estão corretos. Exemplos:
- GA4 instalado? → verificar script no HTML
- Instagram tem link pra WhatsApp? → verificar bio
- YouTube está ativo? → verificar data do último vídeo
- Site é "profissional"? → ser neutro, não elogiar demais

---

### Fase 3 — Geração dos Documentos

**Objetivo:** criar dois PDFs profissionais.

#### Documento 1: PRO CLIENTE (`raiox-[nome]-cliente.pdf`)

**Estrutura (7 páginas A4 landscape):**

| Página | Conteúdo | Regras |
|--------|----------|--------|
| 1 | **Capa** | Logo do cliente (centro) + logo APSIDE (canto inferior) + score + data |
| 2 | **Diagnóstico** | Score grande + classificação + grid de 10 critérios (✓/⚠/✗) |
| 3 | **O que funciona / O que pode melhorar** | 2 colunas, cards proporcionais ao conteúdo, centralizados |
| 4 | **Resumo da presença** | Tabela ordenada por status (bom → warn → ruim), linhas coloridas suavemente |
| 5 | **Comparativo GMB** | Antes/depois com 8 slots de fotos (photo picker) + mapa |
| 6 | **Plano de Ação** | 2 colunas: "Depende da APSIDE" + "Depende da empresa", tópicos e subtópicos |
| 7 | **Contato** | Logo do cliente + "Diagnóstico gerado por" + logo APSIDE |

**Regras visuais:**
- Cores do cliente (buscar no site deles a cor primária)
- Logo do cliente real (SVG/PNG do site)
- Logo APSIDE: `identidade/logo-apside-gradiente.svg`
- Fonte: Inter (Google Fonts)
- Ícones padronizados: ✓ (verde), ⚠ (amarelo), ✗ (vermelho) — NUNCA misturar
- Sem botões CTA (é PDF)
- Sem informações internas (oportunidade APSIDE, argumento de venda, preços)
- Page numbers na mesma posição em todas as páginas
- Cards com `height: fit-content` (não esticar até o fim)
- Conteúdo centralizado vertical e horizontalmente
- Fontes legíveis (mínimo 11px pra corpo, 13px pra títulos)
- Comparativo GMB: 8 slots de fotos (grid 4x2) + 1 slot de mapa grande em cada coluna
- Photo picker: cada slot recebe 1 foto, mas permite selecionar múltiplas de uma vez

**Regras de conteúdo:**
- NUNCA elogiar o site ("profissional", "moderno") — ser neutro
- NUNCA mostrar "oportunidade para APSIDE" — é documento pro cliente
- NUNCA mostrar preços ou argumentos de venda
- NUNCA usar nome próprio no CTA ("Falar com Roque") — usar nome da empresa
- SEMPRE incluir dados reais (nota, avaliações, endereço, telefone)
- SEMPRE incluir a data no footer
- YouTube: se parado há >6 meses, escrever "Última postagem há X meses" (não "ativo")
- Instagram: verificar se link pra WhatsApp antes de afirmar

#### Documento 2: INTERNO APSIDE (`escopo-[nome]-apside.pdf`)

**Estrutura (6 páginas A4 landscape):**

| Página | Conteúdo |
|--------|----------|
| 1 | **Capa** | "Documento Interno" + nome do cliente + score + prazo estimado |
| 2 | **Ficha do cliente** | Dados gerais + presença digital atual |
| 3 | **Serviços propostos** | Tabela com descrição, complexidade (Baixa/Média/Alta), dependências |
| 4 | **Precificação** | 3 pacotes com preços e itens |
| 5 | **Cronograma** | Fases de execução com prazos |
| 6 | **Notas internas** | Pontos de atenção, argumento de venda, materiais necessários, próximos passos |

**Regras visuais:**
- Cores da APSIDE (verde neon `#00E65B` + fundo escuro `#1F2133`)
- Logo APSIDE em todas as páginas
- Este documento NÃO é pro cliente

---

## Organização de arquivos

```
marketing/raiox/[nome-do-cliente]/
├── raiox-[nome]-cliente.html          ← HTML do documento pro cliente
├── raiox-[nome]-cliente.pdf           ← PDF pro cliente (enviar por WhatsApp)
├── raiox-cliente-pagina-01.png        ← PNGs individuais (opcionais)
├── raiox-cliente-pagina-02.png
├── ...
├── escopo-[nome]-apside.html          ← HTML do documento interno
├── escopo-[nome]-apside.pdf           ← PDF interno
├── render-cliente.cjs                 ← Script de render do cliente
└── render-apside.cjs                  ← Script de render interno
```

---

## Script de renderização

Criar `render-cliente.cjs`:

```javascript
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1122, height: 794 } });

  const htmlPath = path.resolve(__dirname, 'raiox-[nome]-cliente.html');
  await page.goto('file://' + htmlPath);
  await page.waitForTimeout(2000);

  const pages = await page.$$('.page');
  console.log(`Encontradas ${pages.length} páginas`);

  for (let i = 0; i < pages.length; i++) {
    const buf = await pages[i].screenshot({ type: 'png' });
    const filename = `raiox-cliente-pagina-${String(i + 1).padStart(2, '0')}.png`;
    fs.writeFileSync(path.resolve(__dirname, filename), buf);
    console.log(`Gerado ${filename} (${buf.length} bytes)`);
  }

  await page.pdf({
    path: path.resolve(__dirname, 'raiox-[nome]-cliente.pdf'),
    landscape: true,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('Gerado raiox-[nome]-cliente.pdf');

  await browser.close();
})();
```

Criar `render-apside.cjs` (mesmo padrão, trocando o HTML).

---

## Como rodar (seqüência automática)

Quando o usuário pedir `/raiox-cliente` ou "raio-x do [NOME]", rodar na ordem:

```
1. Receber nome do cliente + cidade
   → Se o usuário já mandou prints, usar como base
   → Se não, pesquisar na internet

2. RODAR FASE 1 (pesquisa):
   → Buscar GMB, site, Instagram, YouTube
   → Anotar TODOS os dados encontrados
   → Verificar se dados estão corretos (GA4 instalado? Instagram linka WhatsApp?)

3. RODAR FASE 2 (análise):
   → Calcular score (0-100)
   → Classificar (CRÍTICO/REGULAR/BOM/EXCELENTE)
   → Listar pontos fortes e fracos
   → Identificar cor primária do cliente (buscar no site)

4. RODAR FASE 3 (documentos):
   → Criar pasta marketing/raiox/[nome]/
   → Gerar HTML pro cliente (7 páginas, cores do cliente)
   → Gerar HTML interno (6 páginas, cores APSIDE)
   → Renderizar PDFs

5. ENTREGAR RESUMO:
   - Score: XX/100
   - Classificação: [texto]
   - PDF pro cliente: marketing/raiox/[nome]/raiox-[nome]-cliente.pdf
   - PDF interno: marketing/raiox/[nome]/escopo-[nome]-apside.pdf
   - Pontos fortes: [lista]
   - O que falta: [lista]
```

---

## Regras críticas

### Sempre fazer
- Pesquisar DADOS REAIS na internet — nunca inventar
- Usar IDENTIDADE VISUAL DO CLIENTE no documento pro cliente
- Gerar DOIS documentos (cliente + interno)
- Verificar SE os dados estão corretos (GA4, Instagram link, YouTube ativo)
- Centralizar conteúdo em todas as páginas
- Usar fontes legíveis (mínimo 11px)
- Ordenar tabela por status (bom → warn → ruim)
- Dividir plano de ação em "Depende da APSIDE" + "Depende da empresa"
- Incluir data no footer
- Placeholders pra fotos no comparativo (photo picker)

**Photo Picker — CSS e JavaScript obrigatórios:**

```css
/* Photo slot */
.photo-slot { position: relative; cursor: pointer; }
.photo-slot input[type="file"] { display: none; }
.photo-slot .pick-btn {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.2s;
  border-radius: inherit; z-index: 3;
}
.photo-slot:hover .pick-btn { opacity: 1; }
.photo-slot.has-photo .pick-btn { opacity: 0; }
.photo-slot.has-photo:hover .pick-btn { opacity: 1; }

/* Imagem no slot */
.comp-photo img, .comp-map img {
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover; z-index: 1;
}
.comp-photo.has-photo > :not(img):not(.pick-btn):not(input) { display: none; }
.comp-map.has-photo .comp-map-placeholder { display: none; }

/* Botão "Selecionar todas" */
.comp-photos-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 6px;
}
.comp-photos-header span { font-size: 10px; font-weight: 600; color: #666; }
.comp-photos-pick-all { font-size: 9px; color: #052c65; cursor: pointer; font-weight: 600; }
.comp-photos-pick-all input[type="file"] { display: none; }
```

```javascript
// Adicionar foto em 1 slot
function pickPhoto(input) {
  const files = input.files;
  if (!files.length) return;
  const slot = input.closest('.comp-photo') || input.closest('.comp-map');
  const file = files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    let img = slot.querySelector('img');
    if (!img) { img = document.createElement('img'); slot.appendChild(img); }
    img.src = e.target.result;
    slot.classList.add('has-photo');
  };
  reader.readAsDataURL(file);
  input.value = '';
}

// Adicionar fotos em TODOS os slots vazios de uma vez
function pickAllPhotos(input) {
  const files = input.files;
  if (!files.length) return;
  const card = input.closest('.comp-card');
  const slots = card.querySelectorAll('.comp-photo.photo-slot:not(.has-photo)');
  for (let i = 0; i < files.length && i < slots.length; i++) {
    const slot = slots[i];
    const reader = new FileReader();
    reader.onload = function(e) {
      let img = slot.querySelector('img');
      if (!img) { img = document.createElement('img'); slot.appendChild(img); }
      img.src = e.target.result;
      slot.classList.add('has-photo');
    };
    reader.readAsDataURL(files[i]);
  }
  input.value = '';
}
```

**HTML do comparativo (cada coluna):**
```html
<!-- Header com botão "Selecionar todas" -->
<div class="comp-photos-header">
  <span>Fotos do perfil</span>
  <label class="comp-photos-pick-all">
    <input type="file" accept="image/*" multiple onchange="pickAllPhotos(this)">
    + Selecionar todas
  </label>
</div>

<!-- Grid de 8 slots (4x2) -->
<div class="comp-photos">
  <div class="comp-photo photo-slot" onclick="this.querySelector('input').click()">
    <input type="file" accept="image/*" onchange="pickPhoto(this)">
    <div class="pick-btn"><div class="pick-icon">+</div></div>
    Fachada
  </div>
  <!-- ... mais 7 slots ... -->
</div>
```

### Nunca fazer
- Inventar dados que não foram encontrados
- Mostrar preços ou argumento de venda pro cliente
- Mostrar "oportunidade para APSIDE" no documento do cliente
- Usar nome próprio no CTA ("Falar com Roque")
- Elogiar o site ("profissional", "moderno") — ser neutro
- Misturar ícones (✓/⚠/✗) — padronizar
- Deitar espaço enorme embaixo das páginas
- Esticar cards até o fim da página
- Usar cores da APSIDE no documento do cliente
- Usar cores do cliente no documento interno
- Colocar botões CTA (é PDF, não site)
- Afirmar que YouTube está ativo se parado há >6 meses
- Afirmar que Instagram linka WhatsApp sem verificar

---

## Template de referência

O documento pro cliente segue o padrão visual do projeto Conta Gestor:
- `marketing/raiox/conta-gestor/raiox-conta-gestor-cliente.html`

O documento interno segue o padrão:
- `marketing/raiox/conta-gestor/escopo-projeto-apside.html`

Copiar estes HTMLs como base e trocar os dados do cliente.

---

## Exemplo de uso

**Usuário:** "raio-x da Pizzaria do centro"

**Resposta:**
1. "Vou pesquisar a Pizzaria do Centro no Google, site, Instagram e YouTube"
2. [Rodar pesquisa completa]
3. "Score: 45/100 — Regular. O que falta: sem sitemap, Instagram com 50 seguidores, sem fotos no GMB"
4. [Gerar documentos]
5. "PDF pro cliente: marketing/raiox/pizzaria-centro/raiox-pizzaria-centro-cliente.pdf"
6. "PDF interno: marketing/raiox/pizzaria-centro/escopo-pizzaria-centro-apside.pdf"
