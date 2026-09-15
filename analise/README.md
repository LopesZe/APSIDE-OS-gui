# Análises

Pasta para todas as análises e diagnósticos.

## Estrutura

- **`raiox/`** — Raio-X Digital por cliente (PDFs, HTMLs, renders)
- **`gmb/`** — Diagnósticos do Google Meu Negócio
- **`seo/`** — Análises de SEO (relatórios, diagnósticos)
- **`youtube/`** — Análises de canais YouTube (transcrições, estudos)

## Convenção de Pastas

### Raio-X
```
analise/raiox/[nome-do-cliente]/
├── raiox-[nome]-cliente.html     ← HTML do documento pro cliente
├── raiox-[nome]-cliente.pdf      ← PDF pro cliente
├── escopo-[nome]-apside.html     ← HTML do documento interno
├── escopo-[nome]-apside.pdf      ← PDF interno
├── render-cliente.cjs            ← Script de render
└── render-apside.cjs             ← Script de render interno
```

### SEO
```
analise/seo/[cliente]-[data]/
├── diagnostico-seo.md
├── relatorio-seo.html
├── relatorio-seo.png
└── render-seo.cjs
```

### YouTube
```
analise/youtube/[canal]/
├── analise-conteudo.md
├── videos.json
└── transcricoes/
```

## Skills relacionadas

- `/raiox-cliente` — gera raiox em `analise/raiox/`
- `/seo-gmb` — gera análise SEO em `analise/seo/`
- `/diagnostico-gmb` — gera diagnóstico GMB em `analise/gmb/`
