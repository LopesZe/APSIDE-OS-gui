# PROPAGATION — Roteamento de captura

Toda entrada tem um **destino imediato** (Regra 2 de `RULES.md`). Esta tabela é o
roteador: "texto → cérebro". Nada fica em inbox genérico.

| Entrada | Destino canônico | Quem age |
|---|---|---|
| PDF de NF-e no Telegram, **tópico `nf`** | `sistema/` (bot registra + dashboard) | agente de NF (produção) |
| PDF de NF-e em **outro tópico ou em `geral`** | **IGNORADO** — fora do escopo do agente de NF | ninguém |
| Mensagem de texto em `geral` (conversa/duvida) | atendimento no próprio tópico | agente de GERAL (aqui mesmo) |
| Pedido de conteúdo / ideia de post | `marketing/` + skill de conteúdo (`/carrossel`, `/post-instagram`, `/publicar-tema`) | agente de conteúdo |
| Lead / parceiro / lojista novo | `memoria/empresa.md` | atualiza memória |
| Mudança de foco / prioridade | `memoria/estrategia.md` | atualiza memória |
| Ajuste de tom / estilo | `memoria/preferencias.md` | atualiza memória |
| Ajuste visual (cores, fontes, logo) | `identidade/design-guide.md` | atualiza identidade |
| Análise de dados (CSV/XLSX/PDF) | `dados/` → `/analisar-dados` | agente de análise |
| E-mail profissional | `saidas/` | `/email-profissional` |
| Dúvida de operação do próprio SO | `opencode.md` / este conjunto de arquivos | reflexão de governança |

## Princípio GERAL ≠ NF (escrito)
> O agente que responde NF-e e joga para o dashboard **não é o mesmo** que responde
> em `geral`. A separação é **apenas de roteamento**: o bot do Telegram só processa
> PDFs dentro do tópico `nf`; tudo que chega em `geral` ou em outros tópicos é
> conversa/atendimento e nunca dispara registro nem dashboard.

Isso evita o erro de "o bot responde onde não deve" e mantém o
`MAPA.md` coerente (NF → `sistema/`, conversa → `geral`).
