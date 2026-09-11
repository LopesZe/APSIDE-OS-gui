# GOVERNANCE — Rotinas do cérebro vivo

O APSIDE-OS não é um arquivo estático: é um sistema que se mantém saudável por rotina.
O loop é: **captura → propaga → trabalha → sincroniza → poda**.

## Rotinas

| Rotina | Gatilho | O que faz | Saída |
|---|---|---|---|
| **Sincronizar** | fim de tarefa relevante | `git commit` + `push` (`/salvar`) | repo atualizado |
| **Auditar** | semanal | `/auditar` checa drift de memória/identidade/status | `reports/audits/YYYY-MM-DD.md` + `HEARTBEAT.md` |
| **Snapshot** | dia 1 do mês | diff do mês + consolidado | (manual, revisado pelo operador) |
| **Poda** | dia 1 do mês | mover concluídos para `archive/`; fechar diário do mês | `archive/` atualizado |

## Critérios de "vida" do cérebro
- `memoria/*` preenchido e coerente com `HEARTBEAT.md`.
- `identidade/design-guide.md` com cores e fontes definidas (sem placeholder).
- `MAPA.md` sem donos conflitantes (cada tipo de info em um só arquivo).
- `PROPAGATION.md` refletindo a realidade atual dos canais.
- Sem arquivos órfãos (todo `.md` aponta para um dono em `MAPA.md`).

## Automação futura (opcional)
As rotinas de auditoria e poda podem ser agendadas (Task Scheduler / n8n) no futuro;
por enquanto são disparadas manualmente via `/auditar` e `/salvar`.
