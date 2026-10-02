# PROPAGATION — Roteamento de captura

Toda entrada tem um **destino imediato** (Regra 2 de `RULES.md`). Esta tabela é o
roteador: "texto → cérebro". Nada fica em inbox genérico.

| Entrada | Destino canônico | Quem age |
|---|---|---|
| Mensagem de texto em `geral` (conversa/duvida) | atendimento no próprio tópico | agente de GERAL (aqui mesmo) |
| Pedido de conteúdo / ideia de post | `marketing/` + skill de conteúdo (`/carrossel`, `/post-instagram`, `/publicar-tema`) | agente de conteúdo |
| Lead / parceiro / lojista novo | `memoria/empresa.md` | atualiza memória |
| Mudança de foco / prioridade | `memoria/estrategia.md` | atualiza memória |
| Ajuste de tom / estilo | `memoria/preferencias.md` | atualiza memória |
| Ajuste visual (cores, fontes, logo) | `identidade/design-guide.md` | atualiza identidade |
| Análise de dados (CSV/XLSX/PDF) | `dados/` → `/analisar-dados` | agente de análise |
| E-mail profissional | `saidas/` | `/email-profissional` |
| Dúvida de operação do próprio SO | `opencode.md` / este conjunto de arquivos | reflexão de governança |
