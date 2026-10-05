# Manual da Marca — APSIDE

> Documento oficial de identidade visual. Toda peça que sai em nome da APSIDE segue este manual.

---

## 1. A Marca

### 1.1 Essência

APSIDE conecta negócios locais ao seu próximo cliente. Diagnostica problemas digitais e implementa soluções que resolvem — presença no Google, sites, automação, captação.

### 1.2 Personalidade

- Direta e honesta
- Moderna sem ser barulhenta
- Tecnológica sem ser fria
- Confiante sem ser arrogante

### 1.3 Promessa

Transformar presença digital em resultado concreto.

---

## 2. Logo

### 2.1 Construção

A logo é um wordmark composto pela palavra **APSIDE** em tipografia DM Sans Bold, sem caracteres especiais, sem ornamentos.

```
┌───────────────────────────┐
│                           │
│        APSIDE             │
│                           │
└───────────────────────────┘
```

### 2.2 Versões

| Versão | Arquivo | Fundo | Cor do texto |
|---|---|---|---|
| Clara | `logo-apside.svg` | Escuro (`#000000`) | Off-white `#E7E6EF` |
| Escura | `logo-apside-claro.svg` | Claro (`#E7E6EF`) | Preto `#000000` |
| ~~Gradiente~~ **PROIBIDA** | *arquivo excluído (28/09/2026)* | — | **Nunca usar — usar Clara/Escura conforme o fundo** |

### 2.3 Espaço de respiro

A logo deve ter ao menos metade de sua altura como espaço livre ao redor.

```
    ┌─── espaço livre ───┐
    │                    │
    │    ┌──────────┐    │
    │    │  APSIDE  │    │
    │    └──────────┘    │
    │                    │
    └─── espaço livre ───┘
```

### 2.4 Tamanhos

| Uso | Largura mínima |
|---|---|
| Digital (site, propostas) | 120px |
| Digital (carrossel, post) | 100px |
| Impresso (A4, A3) | 30mm |
| Impresso (A2, banners) | 50mm |

### 2.5 Onde usar

- Slide final de carrosséis (CTA)
- Header de propostas comerciais
- Site institucional
- Assinatura de e-mail

---

## 3. Ícone — DESCONTINUADO (05/10/2026)

O símbolo orbital (átomo) foi **removido da marca por ordem do operador**. Os
quatro arquivos `icone-apside*.svg` foram apagados do repositório.

- A marca é **só o wordmark** (seção 2).
- Favicon, perfil social e cantos de peça usam a palavra APSIDE — nunca um símbolo.
- Nenhuma peça nova pode referenciar `icone-apside*`.

---

## 4. Paleta de Cores

Paleta — índigo sobre preto (ordem do operador, 05/10/2026). Atualização da
noite de 05/10/2026: accent virou `#4331e9` e o fundo escuro virou `#000000`
com fade de `#2F2399` subindo do rodapé.

### 4.1 Tokens

| Token | Nome | HEX | RGB | Uso |
|---|---|---|---|---|
| `--brand-primary` | Índigo | `#4130D8` | 65, 48, 216 | Ações, botões, CTA, destaques hero, régua/barras |
| `--brand-secondary` | Índigo profundo | `#2F2399` | 47, 35, 153 | Apoio, cards secundários, bordas, fade do fundo |
| `--brand-accent` | Índigo vivo | `#4331e9` | 67, 49, 233 | Barras, bordas, números grandes — **não usar como texto no escuro** |
| `--brand-accent-text` | Índigo claro | `#6E5CFF` | 110, 92, 255 | Texto de destaque, kicker, palavra/numeral no escuro (4,6:1) |
| `--brand-background` | Preto | `#000000` | 0, 0, 0 | Fundo principal (com fade de `#2F2399`) |
| `--brand-text` | Off-white | `#E7E6EF` | 231, 230, 239 | Texto no escuro; superfície clara |

### 4.2 Superfícies

| Superfície | Cor | Texto base | Apoio |
|---|---|---|---|
| Escura | `#000000` (+ fade `#2F2399`) | `#E7E6EF` | `#6E5CFF` |
| Clara | `#E7E6EF` | `#000000` | `#2F2399` |

### 4.3 Gradiente — ABOLIDO (1 exceção)

**Nunca usar gradiente em elementos, botões, cards ou texto.** Cores chapadas.
**Exceção única (05/10/2026):** fade do fundo escuro — `#2F2399` subindo do
rodapé e dissolvendo no preto. (Trio antigo verde→azul→roxo abolido em
02/10/2026; roxo `#6E00FF` fora da paleta.)

### 4.4 Regra de destaque

| Fundo | Palavra/numeral | Régua e barras | Botão primário |
|---|---|---|---|
| Escuro (`#000000`) | **Índigo claro `#6E5CFF`** | `#4130D8` | `#4130D8` + texto `#E7E6EF` |
| Claro (`#E7E6EF`) | **Índigo `#4130D8`** (ou `#4331e9`) | `#4130D8` | `#4130D8` + texto `#E7E6EF` |

`#4331e9` dá 2,9:1 sobre o preto — serve pra barras, bordas e superfícies,
não como texto (usar `#6E5CFF`, 4,6:1). No fundo claro, `#6E5CFF` dá 3,6:1 —
não serve como texto pequeno (usar `#4331e9` ou `#2F2399`).

### 4.5 Cores de suporte

| Uso | Cor | Contexto |
|---|---|---|
| Borda (fundo escuro) | `rgba(255,255,255,0.08)` | Cards, separadores |
| Borda (fundo claro) | `rgba(24,23,33,0.08)` | Cards, separadores |
| Sombra (fundo escuro) | `0 4px 24px rgba(0,0,0,0.5)` | Elevação de cards |
| Sombra (fundo claro) | `0 4px 24px rgba(24,23,33,0.15)` | Elevação de cards |

### 4.6 Proibido

- Cores fora dos 5 tokens — inclui as mortas `#1F2133`, `#34544C`, `#0066FF`, `#00E65B`
- Branco `#FFFFFF` como fundo (fotos e prints de terceiros são exceção)
- Gradiente em elementos, botões ou texto (só o fade de fundo `#2F2399`→preto é permitido)
- Misturar cores de marcas parceiras com as cores da APSIDE

---

## 5. Tipografia

### 5.1 Fontes (3 fontes — 05/10/2026)

| Fonte | Papel | Uso | Pesos |
|---|---|---|---|
| **DM Sans** | Principal | Títulos, chamadas, banners, logo (Bold 700, uppercase) | 400, 500, 700, 800 |
| **Plus Jakarta Sans** | Leitura | Corpo, relatórios longos, propostas densas (mobile), UI | 400, 500, 600 |
| **JetBrains Mono** | Dados | Preços, código, métricas, badges | 400, 600, 700 |

**Inter saiu da paleta tipográfica em 05/10/2026.**

### 5.2 Hierarquia

| Nível | Fonte | Peso | Tamanho / line-height |
|---|---|---|---|
| Display / Hero | DM Sans | 700 | 48px / 1.1 |
| Heading H2 | DM Sans | 700 | 32px / 1.2 |
| Card Title H3 | DM Sans | 600 | 20px |
| Body Large (peça) | DM Sans | 400 | 16px |
| Corpo denso (relatório/proposta) | Plus Jakarta Sans | 400 | 16px / 1.6 |
| Botão / badge | Plus Jakarta Sans | 600 | 14–16px |
| Dado / preço / código | JetBrains Mono | 600–700 | 12–14px |

**Regra:** preço, numeral e código **sempre** em JetBrains Mono
(`R$ 5.000,00`, `#4130D8`, `VIGENCIA_05_10_2026`).

### 5.3 Importação

```
https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap
```

### 5.4 Proibido

- Usar fonte fora das três (Inter incluída — saiu)
- Usar peso inadequado (ex.: título em 400)
- Criar hierarquia com tamanho sem usar peso
- Escrever preço/metrica fora do monoespaçado

---

## 6. Elementos de Interface

### 6.1 Bordas

- Espessura: **1px**
- Cor: conforme fundo (ver seção 4.4)
- Estilo: sólida

### 6.2 Border-radius

- Cards: **12px**
- Botões: **8px**

### 6.3 Sombras

| Fundo | Sombra |
|---|---|
| Escuro | `0 4px 24px rgba(0,0,0,0.4)` |
| Claro | `0 4px 24px rgba(0,0,0,0.15)` |

### 6.4 Botões

| Tipo | Fundo | Texto | Borda |
|---|---|---|---|
| Primário (CTA) | Índigo `#4130D8` | `#E7E6EF` | Nenhuma |
| Secundário | Transparente | Destaque do fundo (`#4130D8` claro / `#6E5CFF` escuro) | 1px mesma cor |
| Ghost | Transparente | Texto base do fundo | Nenhuma |

---

## 7. Padrão de Carrosséis e Posts

### 7.1 Regra de alternância

- Fundo escuro `#000000` + fade `#2F2399` → palavra de destaque **índigo claro `#6E5CFF`**; texto base `#E7E6EF`
- Fundo claro `#E7E6EF` → palavra de destaque **índigo `#4130D8`**; texto base `#000000`
- Régua e barras: **`#4130D8` nos dois fundos**
- Nunca dois fundos iguais seguidos

### 7.2 Posicionamento

```
┌─────────────────────────┐
│  [LOGO]                 │  ← topo, conforme fundo
│                         │
│     TÍTULO              │  ← DM Sans Bold
│     Subtítulo           │  ← Plus Jakarta Sans
│                         │
│  ─────────── (régua)    │  ← #4130D8
│                         │
│        R$ 5.000,00      │  ← JetBrains Mono
│              [@handle]  │  ← canto inferior (sem ícone)
└─────────────────────────┘
```

### 7.3 Regras

- Logo no topo; **sem ícone no canto** (ícone descontinuado 05/10/2026)
- Régua e barras em `#4130D8` nos dois fundos
- Preço, numeral e código em JetBrains Mono
- Nunca gradiente atrás de texto
- Nunca gradiente em elementos/botões (fade de fundo `#2F2399`→preto é a única exceção)

---

## 8. Aplicações

### 8.1 Digital

| Aplicação | Logo | Cores |
|---|---|---|
| Site | Wordmark | Preto `#000000` + índigo `#4130D8` |
| Carrossel | Wordmark topo | Escuro/claro alternado |
| Post único | Wordmark topo | Escuro ou claro |
| Story | Wordmark | Preto `#000000` |
| Proposta | Wordmark header | Superfície clara `#E7E6EF` |
| E-mail | Wordmark | Superfície clara |

### 8.2 Impresso

| Aplicação | Logo | Cores |
|---|---|---|
| Cartão de visita | Wordmark | Preto `#000000` + índigo `#4130D8` |
| Proposta (A4) | Wordmark header | Superfície clara |
| Banner | Wordmark | Preto `#000000` |

---

## 9. Estrutura de Arquivos

```
identidade/
├── MANUAL-DAMARCA.md              ← este documento
├── design-guide.md                ← referência rápida para skills
│
├── logo-apside.svg                ← wordmark claro (#E7E6EF, fundo escuro)
├── logo-apside-claro.svg          ← wordmark escuro (#000000, fundo claro)
│
├── brandkit.svg                   ← folha de referência visual
├── brandkit.png                   ← folha renderizada (scripts/gerar-brandkit.cjs)
│
└── marcas.md                      ← marcas parceiras (template)
```

> Os 4 arquivos `icone-apside*.svg` foram apagados em 05/10/2026.

---

## 10. Checklist de Produção

Antes de publicar qualquer peça:

- [ ] Cores estão nos 6 tokens (`#4130D8` `#2F2399` `#4331e9` `#6E5CFF` `#000000` `#E7E6EF`)?
- [ ] Fontes são DM Sans / Plus Jakarta Sans / JetBrains Mono?
- [ ] Preços e numerais estão em JetBrains Mono?
- [ ] Logo usada é a versão correta para o fundo?
- [ ] Nenhum `icone-apside*` aparece na peça?
- [ ] Bordas e sombras seguem o manual?
- [ ] Não há cores "do nada" no meio da peça?
- [ ] Não há buzzwords proibidas?
- [ ] Sem gradiente em elementos/botões/texto (fade de fundo é a única exceção)?

---

*APSIDE — Manual da Marca v2.1 — 05/10/2026 (paleta índigo/preto com fade `#2F2399`, 6 tokens, 3 fontes, sem ícone)*
