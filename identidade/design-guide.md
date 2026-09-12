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

### Gradiente da marca

| Posição | Cor | Hex |
|---|---|---|
| Início | Verde Neon | `#00E65B` |
| Meio | Azul Elétrico | `#0066FF` |
| Fim | Roxo / Violeta | `#6E00FF` |

CSS: `linear-gradient(90deg, #00E65B 0%, #0066FF 50%, #6E00FF 100%)`

### Cor de destaque por fundo

| Fundo | Destaque |
|---|---|
| Escuro (`#1F2133`) | Verde Neon `#00E65B` |
| Claro (`#FFFFFF`) | Azul Elétrico `#0066FF` |

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
| Botões CTA | Gradiente da marca como fundo, texto branco |
| Sombras | Sutis e elegantes (ver tabela acima) |

---

## 4. Logo (wordmark)

Tipo: texto "APSIDE" em DM Sans Bold, centralizado.

| Versão | Arquivo | Fundo |
|---|---|---|
| Branca | `logo-apside.svg` | Escuro |
| Preta | `logo-apside-claro.svg` | Claro |
| Gradiente | `logo-apside-gradiente.svg` | Escuro |
| Gradiente | `logo-apside-gradiente-claro.svg` | Claro |

**Uso:** slide final (CTA), header de propostas, site institucional.
**Tamanho:** 120–200px de largura.

---

## 5. Ícone (símbolo)

Tipo: átomo/orbital — representa IA, tecnologia, conexão.

| Versão | Arquivo | Fundo |
|---|---|---|
| Gradiente | `icone-apside.svg` | Escuro |
| Branco | `icone-apside-branco.svg` | Escuro |
| Gradiente | `icone-apside-claro.svg` | Claro |
| Preto | `icone-apside-preto.svg` | Claro |

**Uso:** favicon, perfil social, cantos pequenos.
**Tamanho:** 32–48px.

---

## 6. Regras de uso

### Sempre fazer
- Usar gradiente verde → azul → roxo como elemento de marca
- Alternar fundo escuro ↔ claro slide a slide (nunca dois seguidos iguais)
- Trocar logo/ícone conforme o fundo (escuro → versão escura; claro → versão clara)
- Destaque do slide escuro = verde neon; destaque do slide claro = azul elétrico
- Usar as cores de borda e sombra conforme a tabela

### Nunca fazer
- Misturar paletas de marcas diferentes na mesma peça
- Introduzir cor "do nada" no meio de um carrossel
- Usar gradiente atrás de texto
- Colocar buzzwords proibidas (ver `memoria/preferencias.md`) em peças visuais
- Usar fonte diferente das definidas

---

## 7. Padrão de carrossel / posts

- Fundo escuro → destaque **verde neon `#00E65B`**
- Fundo claro → destaque **azul elétrico `#0066FF`**
- Roxo `#6E00FF` só entra se presente desde o slide 1
- RÉGUA/divisória usa a cor de destaque do slide
- Logo no topo; ícone pequeno no canto inferior

---

## 8. Arquivos da identidade

```
identidade/
├── design-guide.md          ← este arquivo
├── logo-apside.svg          ← wordmark branco
├── logo-apside-claro.svg    ← wordmark preto
├── logo-apside-gradiente.svg← wordmark gradiente (fundo escuro)
├── logo-apside-gradiente-claro.svg ← wordmark gradiente (fundo claro)
├── icone-apside.svg         ← ícone gradiente (fundo escuro)
├── icone-apside-branco.svg  ← ícone branco (fundo escuro)
├── icone-apside-claro.svg   ← ícone gradiente (fundo claro)
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

*Atualizado em 2026-09-12. Identidade visual completa.*
