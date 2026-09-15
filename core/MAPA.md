# MAPA — Donos de verdade

Tabela de **propriedade**: cada tipo de informação tem exatamente um arquivo canônico.
Isso impede duplicação e confusão ("onde isso mora?").

| Tipo de informação | Arquivo dono | Observação |
|---|---|---|
| Quem é o negócio / marcas / perfil de cliente | `memoria/empresa.md` | fonte do perfil |
| Tom de voz / estilo / o que evitar | `memoria/preferencias.md` | fonte do tom |
| Foco / prioridades / prazos | `memoria/estrategia.md` | fonte do foco |
| Tarefas e pendências | `memoria/pendencias.md` | formato `- [ ] (dd/mm) @prioridade descrição #projeto` |
| Decisões | `memoria/decisoes/YYYY-MM.md` | uma por mês |
| Registro diário | `memoria/diarios/YYYY-MM-DD.md` | o que foi feito |
| NF-e / pedidos / clientes do sistema | `sistema/` (tabelas Supabase) | bot registra; não duplicar em `memoria` |
| Identidade visual (cores, fontes, logo) | `identidade/design-guide.md` (+ `marcas.md`) | rosto da marca |
| Conteúdo (posts, carrosséis, blogs) | `marketing/` | saída das skills de conteúdo |
| Análises (raiox, diagnósticos, SEO, YouTube) | `analise/` | raiox por cliente, diagnósticos GMB, SEO, YouTube |
| Análises / e-mails avulsos | `saidas/` | documentos pontuais |
| Dados a analisar (CSV, PDF, planilha) | `dados/` | entrada de `/analisar-dados` |
| Utilitários / scripts | `scripts/` | render, postar, gerar imagem |
| Conhecimento dos mentores | `memoria/mentores.md` | Mazzeo + Alfredo (base de conhecimento) |
| Perfil de cliente ideal | `memoria/clientes-ideais.md` | sinais de oportunidade, critérios de seleção |
| Scripts de venda / escada de preços | `vendas/` | script-rapido, prospeccao-digital, follow-up, escada-precos, script-venda-presencial, script-progressao, roteiro-abordagem |
| Status operacional do sistema NF | `HEARTBEAT.md` (seção "Status operacional do sistema NF") | distinto da saúde do agente |
| Saúde do agente (sync/audit/pendências) | `HEARTBEAT.md` | sinal de vida |
| Ferramentas conectadas | `TOOLS.md` | catálogo |
| Skills disponíveis | `.opencode/skills/` (índice em `SKILLS.md`) | procedimentos |
| Roteamento de captura | `PROPAGATION.md` | este mapa aponta, ele roteia |
| Regras do sistema | `RULES.md` | constituição |
| Rotinas de manutenção | `GOVERNANCE.md` | loop de vida |

**Fronteira de propriedade:** se você sentir vontade de anotar um fato em dois lugares,
pare. Anote no dono acima e linke a partir de onde quiser referenciá-lo.
