# Identidade Visual — APSIDE

> Referência rápida para skills e produção de conteúdo.
> Manual completo: `identidade/MANUAL-DAMARCA.md`

---

## 1. Paleta de cores

Paleta (ordem do operador, 05/10/2026) — índigo sobre preto. Substitui
todo o time marinho/verde/azul anterior. Atualização da noite de 05/10/2026:
accent virou `#4331e9`, fundo escuro virou `#000000` com fade de `#2F2399`.

### Tokens

| Token | Cor | Hex | RGB | Uso |
|---|---|---|---|---|
| `--brand-primary` | Índigo | `#4130D8` | rgb(65, 48, 216) | Ações principais, botões, CTA, destaques hero, régua/barras |
| `--brand-secondary` | Índigo profundo | `#2F2399` | rgb(47, 35, 153) | Apoio, cards secundários, bordas, sombras profundas, fade do fundo |
| `--brand-accent` | Índigo vivo | `#4331e9` | rgb(67, 49, 233) | Barras, bordas, números grandes, swatches — **não usar como texto** |
| `--brand-accent-text` | Índigo claro | `#6E5CFF` | rgb(110, 92, 255) | Texto de destaque, kicker, palavra/numeral no escuro (4,6:1 sobre preto) |
| `--brand-background` | Preto | `#000000` | rgb(0, 0, 0) | Fundo principal (dark premium, com fade de `#2F2399` no rodapé) |
| `--brand-text` | Off-white | `#E7E6EF` | rgb(231, 230, 239) | Texto em superfície escura; superfície clara |

### Superfícies

| Superfície | Cor | Texto base | Apoio |
|---|---|---|---|
| Escura | `#000000` (+ fade `#2F2399` → preto) | `#E7E6EF` | `#6E5CFF` |
| Clara | `#E7E6EF` | `#000000` | `#2F2399` |

### Cor de destaque por fundo

| Fundo | Palavra/numeral de destaque | Régua / barras | Botão primário |
|---|---|---|---|
| Escuro (`#000000`) | **Índigo claro `#6E5CFF`** | `#4130D8` | `#4130D8` + texto `#E7E6EF` |
| Claro (`#E7E6EF`) | **Índigo `#4130D8`** (ou `#4331e9`) | `#4130D8` | `#4130D8` + texto `#E7E6EF` |

**Contraste no escuro:** `#4331e9` sobre preto dá 2,9:1 — serve pra barras,
bordas e superfícies, mas **não como texto** (mesmo problema do antigo
`#4130D8`). O texto de destaque é `#6E5CFF` (4,6:1). No fundo claro,
`#4331e9` dá 5,9:1 e pode ser usado como texto normalmente.

### Cores fora da paleta (proibidas)

`#1F2133` (marinho antigo), `#34544C` (verde antigo), `#0066FF` (azul antigo),
`#00E65B`, `#6E00FF`, `#FFFFFF` como fundo. Branco puro só aparece dentro de
fotos, prints e mockups de terceiros.

### Gradiente — ABOLIDO (1 exceção)

Nenhum gradiente em elementos, botões, cards ou texto. Cores chapadas.
**Exceção única (05/10/2026):** fade do fundo escuro — `#2F2399` subindo do
rodapé e dissolvendo no preto (`radial-gradient` ou `linear-gradient`), sem
nunca passar por trás de texto de corpo. (Trio antigo verde→azul→roxo abolido
em 02/10/2026.)

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
| Botão secundário | Transparente, texto = destaque do fundo, borda 1px `#4130D8` (claro) / `#6E5CFF` (escuro) |
| Sombras | Sutis (tabela acima) |

---

## 4. Logo (wordmark)

Tipo: texto "APSIDE" em DM Sans Bold, letter-spacing largo. **Sem símbolo.**

| Versão | Arquivo | Fundo | Cor |
|---|---|---|---|
| Clara | `logo-apside.svg` | Escuro `#000000` | `#E7E6EF` |
| Escura | `logo-apside-claro.svg` | Claro `#E7E6EF` | `#000000` |

**Uso:** slide final (CTA), header de propostas, site institucional.
**Tamanho:** 120–200px de largura.

---

## 5. Ícone — DESCONTINUADO (05/10/2026)

O símbolo orbital (átomo) foi **removido da marca por ordem do operador**. Os
quatro arquivos `icone-apside*.svg` foram apagados. A marca é só o wordmark.

- Não existe favicon/perfil com símbolo: usar recorte do wordmark ou a palavra
  em fundo `#000000`.
- Nenhuma peça nova pode referenciar `icone-apside*`.

---

## 6. Regras de uso

### Sempre fazer
- Destaque de palavra/numeral conforme a tabela (escuro → `#6E5CFF`, claro → `#4130D8`)
- Alternar fundo escuro ↔ claro slide a slide (nunca dois seguidos iguais)
- Fundo escuro com fade de `#2F2399` subindo do rodapé e dissolvendo no preto
- Trocar logo conforme o fundo (escuro → `logo-apside.svg`; claro → `logo-apside-claro.svg`)
- Botão CTA sempre `#4130D8` com texto `#E7E6EF`
- Usar as cores de borda e sombra conforme a tabela

### Nunca fazer
- Usar cor fora dos 6 tokens (marinho, verde, azul elétrico antigos estão mortos)
- Usar gradiente em elementos, botões, cards ou texto (só o fade de fundo `#2F2399`→preto é permitido)
- Usar o ícone `icone-apside*` — apagado em 05/10/2026
- Usar `#4130D8` ou `#4331e9` como texto de destaque sobre o fundo escuro (2,2:1 e 2,9:1 — usar `#6E5CFF`)
- Usar `#6E5CFF` como texto sobre fundo claro (contraste baixo — usar `#4331e9` ou `#2F2399`)
- Misturar paletas de marcas diferentes na mesma peça
- Introduzir cor "do nada" no meio de um carrossel
- Usar gradiente atrás de texto
- Colocar buzzwords proibidas (ver `memoria/preferencias.md`) em peças visuais
- Usar fonte diferente das definidas

---

## 7. Padrão de carrossel / posts

- Palavra/numeral de destaque: **`#6E5CFF` no escuro**, **`#4130D8` no claro**
- Fundo escuro `#000000` + fade `#2F2399` → régua/barras `#4130D8`; texto base `#E7E6EF`
- Fundo claro `#E7E6EF` → régua/barras `#4130D8`; texto base `#000000`
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
├── logo-apside-claro.svg    ← wordmark escuro (#000000, fundo claro)
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

*Atualizado em 2026-10-05 — accent `#4331e9` / texto `#6E5CFF`, fundo preto com fade `#2F2399`, ícone removido.*
