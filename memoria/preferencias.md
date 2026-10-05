# Preferências

> Como o OpenCode escreve em nome da APSIDE. Tom, estilo, vícios a evitar.
> Preenchido pelo `/instalar`.

## Tom de voz

Fala direto, informal, pensamento solto e estratégico — estilo conversa de WhatsApp / áudio transcrito. Escreve como fala: usa "né", "acabou que", "belo serviço", "no sufoco". Exemplo real capturado: raciocínio sobre pesquisa de agentes de IA (Bruno Okamoto / Pixel AI Hub), saturação do nicho em 18–24 meses, construção de autoridade via conteúdo, e a dificuldade de investir agora (Cloud R$500/mês ainda pesa).

## O que evitar

- "vamos juntos!"
- emoji em email formal
- "caro cliente"
- jargão de guru
- "alavancar"
- "sinergia"
- "expert"

## Estilo geral

Honesto sobre limitações (grana, fase inicial). Estratégico, enxerga o mercado em camadas (quem tem dinheiro vs quem tá no sufoco). Prefere autoridade por conteúdo e prova real a buzzword.

## Preferências adicionais

### Logo APSIDE

- **NUNCA usar a logo em gradiente** (`logo-apside-gradiente*`). Regra dita pelo Guilherme em 28/09/2026 — os arquivos foram excluídos do repositório.
- Usar o wordmark sólido: `identidade/logo-apside.svg` (branco) em fundo escuro, `identidade/logo-apside-claro.svg` (preto) em fundo claro.
- Vale pra tudo: prévias, PDFs de cliente, propostas, posts.

### Geração de imagens para GMB

- **NÃO usar prompts de IA** (Midjourney, DALL-E) pra imagens do GMB. Resultado sempre ruim, genérico, "horrible" nas palavras do Guilherme.
- **SIM usar HTML + CSS → PNG** via puppeteer. Layout split: fundo claro à esquerda com badge + título + features, fundo escuro da paleta (`#181721`) à direita com visual/mockup.
- Template base: `marketing/gmb-imagens/gerar-pngs.cjs` + HTMLs na mesma pasta.
- **Cores e fontes: só `identidade/design-guide.md`** (paleta índigo/obsidian desde 05/10/2026). **NUNCA gradiente da marca** (verde→azul→roxo abolido em 02/10/2026); roxo `#6E00FF` fora da paleta.
- **Palavra de destaque, botões e barras:** conforme a tabela de destaque do `design-guide.md` (escuro → `#948CD8`, claro → `#4130D8`).
- Sempre gerar em **2x (deviceScaleFactor: 2)** pra qualidade boa em telas Retina.

### Estilo visual aceito

- Layout split 50/50 (claro esquerda + escuro direita) — funciona tanto pra posts (1200x900) quanto pra capa (1080x608).
- Badge no topo esquerdo com cor de destaque.
- Features com check verde (✓) em círculo.
- Barra `#4130D8` 4px no rodapé (nunca gradiente).
- Mockups realistas (celular com WhatsApp, navegador com site, card de avaliação).

### O que NÃO fazer

- Não criar prompts de IA com palavras-vazia ("photorealistic", "editorial style", "stunning").
- Não usar Edge headless pra screenshots (não funciona no Windows). Usar puppeteer.
- Não criar HTML de referência gigante quando o usuário pede imagens — ir direto pras imagens.
