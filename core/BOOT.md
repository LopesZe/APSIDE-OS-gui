# BOOT — Sequência de inicialização

Toda sessão (ou `/abrir`) deve seguir esta ordem. O objetivo é carregar contexto com
orçamento de tokens enxuto e não deixar nada de fora.

## Ordem de leitura
0. **`git pull origin master`** — puxar últimas atualizações do GitHub antes de tudo.
   - Se houver merge conflitos ou mudanças locais não commitadas, orientar a rodar `/salvar` antes.
1. `core/IDENTITY.md` — quem é o agente, missão, limites.
2. `core/CONTEXT.md` — índice das verdades fixas.
3. `memoria/empresa.md` — quem é o negócio, marcas, perfil de cliente.
4. `memoria/preferencias.md` — tom de voz, o que evitar.
5. `memoria/estrategia.md` — foco, prioridades, prazos.
6. `core/GOVERNANCE.md` — rotinas de manutenção.
7. `core/RULES.md` — constituição (não violar).
8. `core/MAPA.md` — donos de verdade (onde cada info mora).
9. `core/PROPAGATION.md` — roteamento de captura.
10. `core/HEARTBEAT.md` — sinal de vida; alertar se houver pendência/auditoria antiga.
11. `core/USER.md` — perfil do operador e preferências de interação.
12. `core/TOOLS.md` — ferramentas conectadas.
13. `core/AGENTS.md` — cartão do agente e separação de concerns.

## Depois do boot
- Carregar skills sob demanda (ver `SKILLS.md` / `RESOLVER.md`).
- Se `HEARTBEAT.md` indicar alerta (ex.: `design-guide.md` sem cores), avise antes de
  produzir peça visual.
- Não listar o que foi lido nem confirmar leitura — usar o contexto naturalmente.

## Fechamento de sessão
- Ao concluir tarefa relevante: `/salvar` (sincroniza) e, se mudou contexto, atualize
  `memoria/` conforme `MAPA.md`.
