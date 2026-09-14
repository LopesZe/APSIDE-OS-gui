# Template de Carrossel — APSIDE

Base reutilizável para carrosséis do Instagram (1080×1080, quadrado).

## Arquivos

- `carrossel-base.html` — carrossel (7 slides, 1080×1080)
- `post-unico-base.html` — post único (1 slide, 1080×1080)
- `story-base.html` — story/reel (1 slide, 1080×1920, 9:16)
- `legenda-modelo.md` — esqueleto de legenda (hook→contexto→CTA→oferta→hashtags)
- `render.js` — gera `instagram/slide-01.png` … a partir de qualquer html acima
  (use `node render.js <arquivo.html>`; padrão `carrossel-base.html`)

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

- Fundo escuro (marinho) → destaque **verde neon**
- Fundo claro (branco) → destaque **azul elétrico**
- Alterna escuro ↔ claro slide a slide (nunca dois iguais seguidos)
- LOGO/ÍCONE trocados por fundo (escuro → `LOGO/ICONE FUNDO ESCURO`, claro → `CLARO`)
- Régua e palavra-chave usam a cor de destaque — **nunca gradiente atrás de texto**
- LOGO no topo; ícone pequeno no canto inferior (invertido com o `@handle`)

## Correções tranquilas (tudo num só lugar)

As 4 variáveis no topo do `<style>` controlam toda a paleta:

```css
:root {
  --fundo-escuro:  #1F2133;
  --fundo-claro:   #FFFFFF;
  --acento-escuro: #00E65B;  /* verde neon  */
  --acento-claro:  #0066FF;  /* azul elétrico */
}
```

- Quer trocar a cor de destaque de TODOS os slides escuros? Muda `--acento-escuro`.
- Quer trocar a cor de TODOS os claros? Muda `--acento-claro`.
- Quer mudar o fundo de todos? Muda `--fundo-escuro` / `--fundo-claro`.
- Mudar só UM slide: edite o `--accent` inline desse `<div class="slide ...">` (opcional).
- Tamanho do post: 1080×1080 fixo no `.slide`.

A regra completa também está em `identidade/design-guide.md`.
