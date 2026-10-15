# Preferências

> Como o OpenCode escreve em nome da APSIDE. Tom, estilo, vícios a evitar.

## Tom de voz

Fala direto, informal, pensamento solto e estratégico — estilo conversa de WhatsApp / áudio transcrito. Escreve como fala: usa "né", "acabou que", "belo serviço", "no sufoco".

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

- **NUNCA usar a logo em gradiente.** Os arquivos de gradiente não existem mais.
- Usar o wordmark sólido: `identidade/logo-apside.svg` (branco) em fundo escuro, `identidade/logo-apside-claro.svg` (preto) em fundo claro.
- Vale pra tudo: prévias, PDFs de cliente, propostas, posts.

### Geração de imagens para GMB

- **NÃO usar prompts de IA** (Midjourney, DALL-E) pra imagens do GMB. Resultado sempre ruim, genérico, "horrible" nas palavras do Guilherme.
- **SIM usar HTML + CSS → PNG** via puppeteer. Layout split: fundo claro à esquerda com badge + título + features, fundo escuro da paleta (`#000000` com fade de `#2F2399`) à direita com visual/mockup.
- Template base: `marketing/gmb-imagens/gerar-pngs.cjs` + HTMLs na mesma pasta.
- **Cores e fontes: só `identidade/design-guide.md`** (paleta índigo/obsidian). **NUNCA gradiente da marca**; roxo `#6E00FF` fora da paleta.
- **Palavra de destaque, botões e barras:** conforme a tabela de destaque do `design-guide.md` (escuro → `#6E5CFF`, claro → `#4130D8`). `#4331e9` só em barras/bordas, nunca como texto no escuro.
- Sempre gerar em **2x (deviceScaleFactor: 2)** pra qualidade boa em telas Retina.

### Estilo visual aceito

- Layout split 50/50 (claro esquerda + escuro direita) — funciona tanto pra posts (1200x900) quanto pra capa (1080x608).
- Badge no topo esquerdo com cor de destaque.
- Features com check verde (✓) em círculo.
- Barra `#4130D8` 4px no rodapé (nunca gradiente).
- Mockups realistas (celular com WhatsApp, navegador com site, card de avaliação).

### Prospecção / abordagem

- **NUNCA abrir com lista de perguntas nem pesquisa direta** ("quem chega perguntando tão direto assim faz o cliente fugir"). Abrir com conversa normal: nome, cidade, contexto curto, convite pra conversar. Perguntas de diagnóstico entram aos poucos, na conversa.
- Abertura aprovada pelo Guilherme: "Olá, me chamo Guilherme, sou daqui de Ponta Grossa. Estou ajudando empresas de contabilidade a se tornarem ativas em IA — pra dar resultado, que é venda, que é o que importa. Podemos conversar?"

### O que NÃO fazer

- Não criar prompts de IA com palavras-vazia ("photorealistic", "editorial style", "stunning").
- Não usar Edge headless pra screenshots (não funciona no Windows). Usar puppeteer.
- Não criar HTML de referência gigante quando o usuário pede imagens — ir direto pras imagens.
