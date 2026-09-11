# PROPAGATION — Roteamento de captura

Toda entrada tem um **destino imediato** (Regra 2 de `RULES.md`). Esta tabela é o
roteador: "texto → cérebro". Nada fica em inbox genérico.

| Entrada | Destino canônico | Quem age |
|---|---|---|
| Pedido de conteúdo / ideia de post | `marketing/` + skill de conteúdo (`/carrossel`, `/post-instagram`, `/publicar-tema`) | agente de conteúdo |
| Análise de dados (CSV/XLSX/PDF) | `dados/` → `/analisar-dados` | agente de análise |
| E-mail profissional | `saidas/` → `/email-profissional` | agente de comunicação |
| Dúvida de operação do próprio SO | `opencode.md` / este conjunto de arquivos | reflexão de governança |

## Princípio
> O agente que responde conteúdo e o que responde dados são o mesmo.
> O roteamento é escrito, não intuição.
