# Identidade Visual — APSIDE

> Referência rápida para skills e produção de conteúdo.
> Manual completo: `identidade/MANUAL-DAMARCA.md`

---

## 1. Paleta de cores

Paleta nova (ordem do operador, 05/10/2026) — índigo sobre obsidian. Substitui
todo o time marinho/verde/azul anterior.

### Tokens

| Token | Cor | Hex | RGB | Uso |
|---|---|---|---|---|
| `--brand-primary` | Índigo | `#4130D8` | rgb(65, 48, 216) | Ações principais, botões, CTA, destaques hero, régua/barras |
| `--brand-secondary` | Índigo profundo | `#2F2399` | rgb(47, 35, 153) | Apoio, cards secundários, bordas, sombras profundas |
| `--brand-accent` | Lavanda | `#948CD8` | rgb(148, 140, 216) | Subtítulos, badges, textos de apoio, palavra de destaque no escuro |
| `--brand-background` | Obsidian | `#181721` | rgb(24, 23, 33) | Fundo principal (dark premium) |
| `--brand-text` | Off-white | `#E7E6EF` | rgb(231, 230, 239) | Texto em superfície escura; superfície clara |

### Superfícies

| Superfície | Cor | Texto base | Apoio |
|---|---|---|---|
| Escura | `#181721` | `#E7E6EF` | `#948CD8` |
| Clara | `#E7E6EF` | `#181721` | `#2F2399` |

### Cor de destaque por fundo

| Fundo | Palavra/numeral de destaque | Régua / barras | Botão primário |
|---|---|---|---|
| Escuro (`#181721`) | **Lavanda `#948CD8`** | `#4130D8` (ou `#948CD8` quando a régua for fina demais pra `#4130D8`) | `#4130D8` + texto `#E7E6EF` |
| Claro (`#E7E6EF`) | **Índigo `#4130D8`** | `#4130D8` | `#4130D8` + texto `#E7E6EF` |

**Por que o destaque no escuro é lavanda:** `#4130D8` sobre `#181721` dá 2,2:1 de
contraste — ilegível como texto. A lavanda dá ~5,9:1 e mantém o índigo para
elementos e botões (contraste de texto branco/`#E7E6EF` sobre `#4130D8` ≈ 8:1).

### Cores fora da paleta (proibidas)

`#1F2133` (marinho antigo), `#34544C` (verde antigo), `#0066FF` (azul antigo),
`#00E65B`, `#6E00FF`, `#FFFFFF` como fundo. Branco puro só aparece dentro de
fotos, prints e mockups de terceiros.

### Gradiente — ABOLIDO

Nenhum gradiente da marca, em nenhuma peça. Cores chapadas. (Trio antigo
verde→azul→roxo abolido em 02/10/2026.)

### Bordas e sombra

| Contexto | Borda | Sombra |
|---|---|---|
| Fundo escuro | `rgba(255,255,255,0.08)` | `0 4px 24px rgba(0,0,0,0.5)` |
| Fundo claro | `rgba(24,23,33,0.08)` | `0 4px 24px rgba(24,23,33,0.15)` |

---

## 2. Tipografia

Sistema de 3 fontes (ordem do operador, 05/10/2026). **Inter saiu.**

| Token | Fonte | Papel | Pesos |
|---|---|---|---|
| `--font-display` | **DM Sans** | Títulos, chamadas, hero, logo (Bold 700, uppercase) | 400 / 500 / 700 / 800 |
| `--font-body` | **Plus Jakarta Sans** | Corpo, UI, relatórios longos, propostas densas (mobile) | 400 / 500 / 600 |
| `--font-mono` | **JetBrains Mono** | Preços, código, métricas, badges | 400 / 600 / 700 |

### Escala tipográfica

| Nível | Uso | Fonte / peso | Tamanho / line-height |
|---|---|---|---|
| Display / Hero | Chamada principal | DM Sans Bold | 48px / 1.1 |
| Heading H2 | Títulos de seção | DM Sans Bold | 32px / 1.2 |
| Card Title H3 | Título de card | DM Sans SemiBold | 20px |
| Body Large | Texto de peça | DM Sans Regular | 16px |
| Corpo denso | Relatório, proposta | Plus Jakarta Sans | 16px / 1.6 |
| Mono / badge | Preço, código, métrica | JetBrains Mono | 12px |

**Regra de uso:** preço, numeral e código sempre em JetBrains Mono (`R$ 5.000,00`,
`#4130D8`, `VIGENCIA_05_10_2026`). Texto corrido em relatório/proposta, Plus
Jakarta Sans. Tudo que for título/chamada, DM Sans.

Import Google Fonts:
```
https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap
```

---

## 3. Elementos de interface

| Elemento | Regra |
|---|---|
| Bordas | 1px, cor conforme fundo (tabela acima) |
| Border-radius | 12px cards / 8px botões |
| Botão primário (CTA) | Fundo `#4130D8`, texto `#E7E6EF`, sem borda, sem gradiente |
| Botão secundário | Transparente, texto = destaque do fundo, borda 1px `#4130D8` (claro) / `#948CD8` (escuro) |
| Sombras | Sutis (tabela acima) |

---

## 4. Logo (wordmark)

Tipo: texto "APSIDE" em DM Sans Bold, letter-spacing largo. **Sem símbolo.**

| Versão | Arquivo | Fundo | Cor |
|---|---|---|---|
| Clara | `logo-apside.svg` | Escuro `#181721` | `#E7E6EF` |
| Escura | `logo-apside-claro.svg` | Claro `#E7E6EF` | `#181721` |

**Uso:** slide final (CTA), header de propostas, site institucional.
**Tamanho:** 120–200px de largura.

---

## 5. Ícone — DESCONTINUADO (05/10/2026)

O símbolo orbital (átomo) foi **removido da marca por ordem do operador**. Os
quatro arquivos `icone-apside*.svg` foram apagados. A marca é só o wordmark.

- Não existe favicon/perfil com símbolo: usar recorte do wordmark ou a palavra
  em fundo `#181721`.
- Nenhuma peça nova pode referenciar `icone-apside*`.

---

## 6. Regras de uso

### Sempre fazer
- Destaque de palavra/numeral conforme a tabela (escuro → `#948CD8`, claro → `#4130D8`)
- Alternar fundo escuro ↔ claro slide a slide (nunca dois seguidos iguais)
- Trocar logo conforme o fundo (escuro → `logo-apside.svg`; claro → `logo-apside-claro.svg`)
- Botão CTA sempre `#4130D8` com texto `#E7E6EF`
- Usar as cores de borda e sombra conforme a tabela

### Nunca fazer
- Usar cor fora dos 5 tokens (marinho, verde, azul elétrico antigos estão mortos)
- Usar gradiente da marca em qualquer peça
- Usar o ícone `icone-apside*` — apagado em 05/10/2026
- Usar `#4130D8` como cor de texto sobre obsidian (contraste baixo — usar `#948CD8`)
- Usar `#948CD8` como texto sobre fundo claro (contraste baixo — usar `#2F2399`)
- Misturar paletas de marcas diferentes na mesma peça
- Introduzir cor "do nada" no meio de um carrossel
- Usar gradiente atrás de texto
- Colocar buzzwords proibidas (ver `memoria/preferencias.md`) em peças visuais
- Usar fonte diferente das definidas

---

## 7. Padrão de carrossel / posts

- Palavra/numeral de destaque: **`#948CD8` no escuro**, **`#4130D8` no claro**
- Fundo escuro `#181721` → régua/barras `#4130D8`; texto base `#E7E6EF`
- Fundo claro `#E7E6EF` → régua/barras `#4130D8`; texto base `#181721`
- RÉGUA/divisória usa `#4130D8` nos dois fundos
- Logo no topo; **sem ícone no canto** — só `@handle` quando fizer sentido

---

## 8. Arquivos da identidade

```
identidade/
├── design-guide.md          ← este arquivo
├── MANUAL-DAMARCA.md        ← manual completo da marca
├── brandkit.svg             ← folha de referência visual
├── brandkit.png             ← folha renderizada
├── logo-apside.svg          ← wordmark claro (#E7E6EF, fundo escuro)
├── logo-apside-claro.svg    ← wordmark escuro (#181721, fundo claro)
└── marcas.md                ← marcas parceiras (template)
```

---

## 9. Templates de conteúdo

Templates em `marketing/templates/`:
- `carrossel-base.html` (1080×1080, 7 slides)
- `post-unico-base.html` (1080×1080)
- `story-base.html` (1080×1920, 9:16)
- `legenda-modelo.md`
- `render.js`

Para criar peça nova: copiar para `marketing/conteudo/carrossel-<tema>-<AAAA-MM-DD>/` e trocar texto. Cores paramêtricas no topo do CSS (`:root`) — trocar pela paleta 05/10/2026.

---

*Atualizado em 2026-10-05 — paleta índigo/obsidian, ícone removido.*
