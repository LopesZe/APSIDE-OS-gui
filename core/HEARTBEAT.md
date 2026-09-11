# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  (preenchido pelo /salvar)
ultima_auditoria:      2026-09-08
pendencias_vencidas:   ver memoria/pendencias.md
estado_telegram:       (preenchido pelo setup)
github:                (preenchido pelo /salvar)
```

## Status operacional do sistema NF

> Dono do status operacional do `sistema/` (bot Telegram + Supabase + dashboard).

- **Bot:** (status preenchido pelo setup)
- **Telegram:** (grupo e tópicos preenchidos pelo setup)
- **Supabase / .env:** (configurados pelo setup)
- **Dashboard:** `sistema/dashboard/` (Hono + `server.js`), sobe em `npm run dev`/`start`.

## Alertas a resolver

- **design-guide.md com fontes pendentes** — tipografia ainda não definida (cores OK)
- **`memoria/clientes-ideais.md` é arquivo órfão** — não consta em MAPA.md. Adicionar ao MAPA ou mover para pasta correta
- **Site institucional em desenvolvimento** — `site/index.html` em progresso, seção notebook simplificada, seção de abertura removida

## Auditoria — 2026-09-08

### ✅ OK
- `memoria/empresa.md` — preenchido, coerente com operação
- `memoria/preferencias.md` — tom definido, listas de evitar presentes
- `memoria/estrategia.md` — fase de validação, prioridades claras, abordagem Instagram atualizada
- `memoria/pendencias.md` — vazio (sem tarefas pendentes registradas)
- `memoria/mentores.md` — base de conhecimento completa
- `identidade/design-guide.md` — cores e estilo definidos
- `MAPA.md` — sem donos conflitantes
- `RULES.md` — constituição íntegra
- `GOVERNANCE.md` — rotinas definidas
- **Skill `/prospecar-instagram`** — criada em 11/09, teste OK (Apify + extração de perfil)

### ⚠️ Alertas
- Fontes no design-guide ainda "a definir"
- `clientes-ideais.md` não mapeado no MAPA
- Site incompleto (seções 4/6 com copy genérico, FAQ com copy genérico)

### ❌ Crítico
- Nenhum
