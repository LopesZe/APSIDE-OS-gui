# Identidade Visual — APSIDE

> Referência rápida para skills e produção de conteúdo.
> Manual completo: `identidade/MANUAL-DAMARCA.md`

---

## 1. Paleta de cores

### Cores primárias

| Cor | Hex | RGB | Uso |
|---|---|---|---|
| Marinho (fundo escuro) | `#1F2133` | rgb(31, 33, 51) | Fundo principal, cards escuros |
| Branco (fundo claro) | `#FFFFFF` | rgb(255, 255, 255) | Fundo claro, cards claros |
| Preto | `#000000` | rgb(0, 0, 0) | Texto principal |
| Verde APSIDE | `#34544C` | rgb(52, 84, 76) | Elementos estruturais: cards, barras, régua, bordas, banner, ícone — nunca texto |
| Azul Elétrico | `#0066FF` | rgb(0, 102, 255) | Palavra/numeral de destaque (qualquer fundo), apoio |

### Gradiente da marca — ABOLIDO (02/10/2026)

**Nunca usar gradiente da marca.** O trio `#00E65B → #0066FF → #6E00FF` foi
substituído por cores chapadas: verde vira `#34544C`, azul continua `#0066FF`,
roxo saiu da paleta. Ordem do operador em 02/10/2026.

### Cor de destaque por fundo

| Fundo | Destaque (elementos: régua, barras, bordas) | Palavra de destaque | Texto base |
|---|---|---|---|
| Escuro (`#1F2133`) | Verde APSIDE `#34544C` | **Azul `#0066FF`** | Branco |
| Claro (`#FFFFFF`) | Azul `#0066FF` | **Azul `#0066FF`** | Preto |

**Regra de palavra (02/10/2026):** toda palavra/numeral de destaque usa azul
`#0066FF`, em qualquer fundo. Verde `#34544C` fica só nos elementos
estruturais — nunca como cor de texto.

### Cores de borda e sombra

| Contexto | Borda | Sombra |
|---|---|---|
| Fundo escuro | `rgba(255,255,255,0.08)` | `0 4px 24px rgba(0,0,0,0.4)` |
| Fundo claro | `rgba(0,0,0,0.08)` | `0 4px 24px rgba(0,0,0,0.15)` |

---

## 2. Tipografia

| Elemento | Fonte | Pesos |
|---|---|---|
| Títulos e destaques | DM Sans | 500 / 600 / 700 |
| Corpo, subtítulos, botões | Inter | 400 / 500 / 600 |

Import Google Fonts:
```
https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&family=Inter:wght@400;500;600&display=swap
```

---

## 3. Elementos de interface

| Elemento | Regra |
|---|---|
| Bordas | 1px, cor conforme fundo (ver tabela acima) |
| Border-radius | 12px (meio arredondado) |
| Botões CTA | Cor chapada (`#34544C` ou branco conforme fundo), texto branco — nunca gradiente |
| Sombras | Sutis e elegantes (ver tabela acima) |

---

## 4. Logo (wordmark)

Tipo: texto "APSIDE" em DM Sans Bold, centralizado.

| Versão | Arquivo | Fundo |
|---|---|---|
| Branca | `logo-apside.svg` | Escuro |
| Preta | `logo-apside-claro.svg` | Claro |
| ~~Gradiente~~ **PROIBIDA** | *arquivo excluído (28/09/2026)* | — |

**Uso:** slide final (CTA), header de propostas, site institucional.
**Tamanho:** 120–200px de largura.

---

## 5. Ícone (símbolo)

Tipo: átomo/orbital — representa IA, tecnologia, conexão.

| Versão | Arquivo | Fundo |
|---|---|---|
| Verde `#34544C` | `icone-apside.svg` | Escuro |
| Branco | `icone-apside-branco.svg` | Escuro |
| Verde `#34544C` | `icone-apside-claro.svg` | Claro |
| Preto | `icone-apside-preto.svg` | Claro |

**Uso:** favicon, perfil social, cantos pequenos.
**Tamanho:** 32–48px.

---

## 6. Regras de uso

### Sempre fazer
- Usar cores chapadas da paleta como destaque (palavra = azul `#0066FF`; elemento = verde `#34544C`)
- Alternar fundo escuro ↔ claro slide a slide (nunca dois seguidos iguais)
- Trocar logo/ícone conforme o fundo (escuro → versão escura; claro → versão clara)
- Palavra/numeral de destaque = azul `#0066FF` em qualquer fundo; texto base = branco (escuro) / preto (claro)
- Usar as cores de borda e sombra conforme a tabela

### Nunca fazer
- Usar verde `#34544C` como cor de texto/palavra (só elementos — regra 02/10/2026)
- **Usar gradiente da marca** (verde→azul→roxo) — abolido em 02/10/2026, em nenhuma peça
- Usar a **logo em gradiente** (arquivos `logo-apside-gradiente*` excluídos em 28/09/2026)
  — proibido. Usar o wordmark sólido: branco (`logo-apside.svg`) em fundo escuro,
  preto (`logo-apside-claro.svg`) em fundo claro
- Usar roxo `#6E00FF` — fora da paleta desde 02/10/2026
- Misturar paletas de marcas diferentes na mesma peça
- Introduzir cor "do nada" no meio de um carrossel
- Usar gradiente atrás de texto
- Colocar buzzwords proibidas (ver `memoria/preferencias.md`) em peças visuais
- Usar fonte diferente das definidas

---

## 7. Padrão de carrossel / posts

- Palavra/numeral de destaque = **azul `#0066FF`** (kicker, `.hl`, numeral) em qualquer fundo
- Fundo escuro → régua/barras **verde APSIDE `#34544C`**; texto base branco
- Fundo claro → régua/barras **azul `#0066FF`**; texto base preto
- RÉGUA/divisória usa a cor estrutural do slide (verde no escuro, azul no claro)
- Logo no topo; ícone pequeno no canto inferior

---

## 8. Arquivos da identidade

```
identidade/
├── design-guide.md          ← este arquivo
├── brandkit.svg             ← folha de referência visual
├── logo-apside.svg          ← wordmark branco
├── logo-apside-claro.svg    ← wordmark preto
├── icone-apside.svg         ← ícone verde sólido (fundo escuro)
├── icone-apside-branco.svg  ← ícone branco (fundo escuro)
├── icone-apside-claro.svg   ← ícone verde sólido (fundo claro)
├── icone-apside-preto.svg   ← ícone preto (fundo claro)
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

Para criar peça nova: copiar para `marketing/conteudo/carrossel-<tema>-<AAAA-MM-DD>/` e trocar texto. Cores paramêtricas no topo do CSS (`:root`).

---

*Atualizado em 2026-10-02 — gradiente abolido, verde `#34544C`, sem roxo.*
