# Template de Carrossel — APSIDE

Base reutilizável para carrosséis do Instagram (1080×1080, quadrado).
Paleta **v3.1** (`identidade/design-guide.md`): índigo sobre preto.

## Arquivos

- `carrossel-base.html` — carrossel (7 slides, 1080×1080)
- `post-unico-base.html` — post único (1 slide, 1080×1080)
- `story-base.html` — story/reel (1 slide, 1080×1920, 9:16)
- `legenda-modelo.md` — esqueleto de legenda (hook→contexto→CTA→oferta→hashtags)
- `render.js` — gera `instagram/slide-01.png` … a partir de qualquer html acima
  (use `node render.js <arquivo.html>`; padrão `carrossel-base.html`; render em
  **2x** pra qualidade Retina)

## Como usar

1. Copie `carrossel-base.html` + `render.js` para uma pasta do tema:
   `marketing/conteudo/carrossel-<tema>-<AAAA-MM-DD>/`
2. Edite o texto de cada slide (entre as tags `h2`, `p`, `topic`, `numeral`).
3. Rode o render:
   ```
   cd marketing/conteudo/carrossel-<tema>-<AAAA-MM-DD>
   NODE_PATH="<pasta-com-node_modules>/node_modules" node render.js
   ```
   (o `node_modules` com playwright já existe em
   `marketing/conteudo/carrossel-presenca-2026-08-25/node_modules`)

## Padrão de cores (regra do dono)

- Fundo escuro `#000000` (+ fade `#2F2399` subindo do rodapé) → palavra/numeral
  de destaque **índigo claro `#6E5CFF`**; réguas/barras **`#4130D8`**
- Fundo claro `#E7E6EF` → palavra/numeral de destaque **índigo `#4130D8`**;
  réguas/barras **`#4130D8`**
- Texto base: escuro → `#E7E6EF`; claro → `#000000`
- Alterna escuro ↔ claro slide a slide (nunca dois iguais seguidos)
- Logo = wordmark SVG trocado por fundo (escuro → `logo-apside.svg`,
  claro → `logo-apside-claro.svg`); **sem ícone** (descontinuado 05/10/2026)
- **Nunca gradiente atrás de texto** — único gradiente permitido é o fade de
  fundo `#2F2399`→preto

## Correções tranquilas (tudo num só lugar)

As 5 variáveis no topo do `<style>` controlam toda a paleta:

```css
:root {
  --fundo-escuro: #000000;      /* superfície escura */
  --fundo-claro:  #E7E6EF;      /* superfície clara */
  --regua: #4130D8;             /* réguas/barras — igual nos 2 fundos */
  --destaque-escuro: #6E5CFF;   /* palavra/numeral de destaque no escuro */
  --destaque-claro:  #4130D8;   /* palavra/numeral de destaque no claro */
}
```

- Quer trocar a cor de destaque de TODOS os slides escuros? Muda `--destaque-escuro`.
- Quer trocar a cor de destaque de TODOS os claros? Muda `--destaque-claro`.
- Quer mudar o fundo de todos? Muda `--fundo-escuro` / `--fundo-claro`.
- Mudar só UM slide: edite o `--accent` inline desse `<div class="slide ...">` (opcional).
- Tamanho do post: 1080×1080 fixo no `.slide`.

Fontes: **DM Sans** (títulos, badges) + **Plus Jakarta Sans** (corpo), via
Google Fonts — já embutidas no `<head>` de cada template.

A regra completa também está em `identidade/design-guide.md`.
