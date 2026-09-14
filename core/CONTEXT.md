# CONTEXT — Verdades fixas (índice)

Este arquivo é um **índice**, não uma cópia. O conteúdo real, estático e canônico
do negócio vive em `memoria/`. Nunca duplique essas informações em outro lugar —
se precisar referenciá-las, linke, não copie (regra de "uma fonte por assunto").

## Donos do contexto
| Conteúdo | Arquivo canônico |
|---|---|
| Quem é o negócio, o que faz, marcas, perfil de cliente | `memoria/empresa.md` |
| Tom de voz, estilo, o que evitar | `memoria/preferencias.md` |
| Foco atual, prioridades, prazos | `memoria/estrategia.md` |
| Tarefas e pendências | `memoria/pendencias.md` |
| Decisões | `memoria/decisoes/` |
| Registro diário | `memoria/diarios/` |

## Como atualizar
Ao mudar algo relevante do negócio, use `/atualizar` (varredura) ou peça para
atualizar o arquivo correspondente em `memoria/`. Nunca edite o contexto "de cabeça"
sem refletir no arquivo dono — senão duas versões da verdade passam a existir.

## Fora do contexto (mas versionado)
- Identidade visual → `identidade/` (não é "contexto de negócio", é "rosto").
- Estado operacional do sistema NF → `HEARTBEAT.md` (seção "Status operacional do sistema NF").
- Saúde do agente → `HEARTBEAT.md`.
