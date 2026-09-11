# Identidade visual

> Como a marca APSIDE aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.

---

## Cores

- **Fundo principal:** Marinho / Azul Escuro `#1F2133` — rgb(31, 33, 51)
- **Fundo claro / cards:** Branco `#FFFFFF` — rgb(255, 255, 255)
- **Texto principal:** Preto Puro `#000000` — rgb(0, 0, 0)
- **Cor de destaque / gradiente (início):** Verde Neon `#00E65B` — rgb(0, 230, 91)
- **Cor de destaque / gradiente (meio):** Azul Elétrico `#0066FF` — rgb(0, 102, 255)
- **Cor de destaque / gradiente (fim):** Roxo / Violeta `#6E00FF` — rgb(110, 0, 255)
- **Cor proibida:** (não definida)

---

## Tipografia

- **Títulos e destaques:** (a definir — sugerir fonte geométrica/moderna que combine com o gradiente)
- **Corpo, subtítulos e botões:** (a definir)
- **Peso do título:** (a definir)

> Observação: as fontes ainda não foram informadas. Preencher quando definir.

---

## Estilo geral

Visual moderno, com gradiente verde → azul → roxo como elemento de marca. Fundo escuro marinho ou branco. Estética tech/IA limpa.

---

## Elementos-chave

- Bordas: (a definir)
- Border-radius dos cards: (a definir)
- Botões: usar o gradiente como CTA
- Sombras: (a definir)

---

## O que NUNCA fazer

- Usar as buzzwords proibidas do tom de voz em peças visuais
- Quebrar o padrão do gradiente da marca
- Introduzir cor do brand kit "do nada" no meio de um carrossel (ex.: pular de verde/azul pro roxo sem padrão)

## Templates de conteúdo (base reutilizável)

Os templates prontos ficam em `marketing/templates/` (criados e validados em 2026-08):
- `carrossel-base.html` (1080×1080, 7 slides), `post-unico-base.html` (1080×1080), `story-base.html` (1080×1920, 9:16), `legenda-modelo.md`, `render.js`.
- Para criar uma peça nova: copie os arquivos pra `marketing/conteudo/carrossel-<tema>-<AAAA-MM-DD>/` e troque o texto. Cores paramêtricas no topo do CSS (`:root`) — mudar a paleta é mexer em 4 variáveis.
- Logos: `identidade/LOGO FUNDO ESCURO.png` / `LOGO FUNDO CLARO.png` e `ICONE FUNDO ESCURO.png` / `ICONE FUNDO CLARO.png`. Escuro→`FUNDO ESCURO`, claro→`FUNDO CLARO`.
- **Site institucional** (`site/`, HTML/CSS/JS puro, deploy-ready) segue o mesmo padrão: marinho+verde / branco+azul, logos por fundo, sem gradiente atrás de texto. CSS base em `site/assets/css/style.css`. Referência Assistly AI em `site/referencias/`. Em construção (dono vai refinar).

## Padrão de carrossel / posts (regra do dono)

Seguir um padrão claro e repetível entre os slides — não surpreender o espectador com cores novas aleatórias:

- Fundo escuro (marinho `#1F2133`) → destaque sempre **verde neon `#00E65B`**
- Fundo claro (branco `#FFFFFF`) → destaque sempre **azul elétrico `#0066FF`**
- O roxo `#6E00FF` só entra se fizer parte do padrão definido desde o slide 1
- Alternar fundo escuro ↔ claro slide a slide (nunca dois iguais seguidos)
- LOGO/ÍCONE trocados conforme o fundo: fundo escuro → `LOGO/ICONE FUNDO ESCURO`, fundo claro → `LOGO/ICONE FUNDO CLARO`
- RÉGUA/divisória e palavra-chave usam a cor de destaque do slide (nunca gradiente atrás de texto)
- LOGO no topo; ícone pequeno no canto inferior (invertido com o `@handle` conforme aprovado no teste)

---

## Logo

- **Arquivos:** `identidade/1.jpg`, `identidade/2.jpg`, `identidade/3.jpg`, `identidade/4.jpg` (4 opções de logo, atualmente em JPG — converter para SVG/PDF vetorial quando possível)
- **Versão pra fundo escuro:** a confirmar (uma das 4 opções deve servir sobre `#1F2133`)
- **Onde usar:** slide final do carrossel (CTA), header de propostas, slides de apresentação
- **Tamanho sugerido:** largura entre 120–200px nos HTMLs

> Pendente: escolher 1 das 4 opções como logo principal da APSIDE.

---

## Observações adicionais

Cores e logo definidos em 2026-08 durante o `/instalar`. Fontes pendentes.
