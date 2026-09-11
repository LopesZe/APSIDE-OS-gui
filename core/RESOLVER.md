# RESOLVER — Roteamento de gatilho → skill

Complementa o auto-discovery do opencode. Quando o operador pedir algo, use esta tabela
para decidir a skill (ou o procedimento) adequado. Em caso de dúvida, use a skill mais
próxima ou pergunte.

| Gatilho (frase/comando) | Skill |
|---|---|
| "abrir", "começar o dia", "/abrir" | `abrir` |
| "instalar", "primeiro setup", "/instalar" | `instalar` |
| "atualiza", "varre o projeto", "/atualizar" | `atualizar` |
| "salva", "salvar github", "/salvar" | `salvar` |
| "mapear rotinas", "automatizar tarefas" | `mapear-rotinas` |
| "carrossel", "post", "conteúdo pro instagram" | `carrossel` |
| "post instagram", "post de [marca]" | `post-instagram` |
| "publicar tema", "gera conteúdo do tema X" | `publicar-tema` |
| "aprovar post X", "publicar o post" | `aprovar-post` |
| "seo", "google meu negócio", "aparecer no chatgpt" | `seo` |
| "seo do site", "seo local", "concorrente no google", "o que o concorrente faz", "/seo-gmb" | `seo-gmb` |
| "anúncio google", "csv pro google ads" | `anuncio-google` |
| "relatório de ads", "performance da semana" | `relatorio-ads` |
| "responder avaliação", "review do google" | `responder-avaliacoes` |
| "novo projeto", "novo cliente" | `novo-projeto` |
| "escreve um email pra", "email profissional" | `email-profissional` |
| "analisa esse arquivo", "resume esses dados" | `analisar-dados` |
| "auditar", "check-up do sistema" | `auditar` |
| "vender", "script de venda", "como vender" | `vender` |
| "prospecar", "achar clientes", "encontrar negócios" | `prospecar` |
| "proposta", "orçamento", "proposta comercial" | `proposta` |
| "diagnóstico GMB", "analisar Google", "ver GMB" | `diagnostico-gmb` |
| PDF de NF-e no tópico `nf` (Telegram) | `sistema/` (bot, automático) |

> Se nenhuma skill bater, execute a tarefa normalmente e, se for repetível, proponha
> criar uma nova via `mapear-rotinas` (ver `templates/skills/skill-template.md`).
