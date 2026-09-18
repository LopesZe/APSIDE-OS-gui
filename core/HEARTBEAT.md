# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  2026-09-18
ultima_auditoria:      2026-09-18
pendencias_vencidas:   ver memoria/pendencias.md
estado_telegram:       (preenchido pelo setup)
github:                (ver git log)
```

## Status operacional do sistema NF

> Dono do status operacional do `sistema/` (bot Telegram + Supabase + dashboard).

- **Bot:** (status preenchido pelo setup)
- **Telegram:** (grupo e tópicos preenchidos pelo setup)
- **Supabase / .env:** (configurados pelo setup)
- **Dashboard:** `sistema/dashboard/` (Hono + `server.js`), sobe em `npm run dev`/`start`.

## Alertas a resolver

- **Site institucional em desenvolvimento** — modelo final definido, faltam links, deploy, SEO, conteúdo real

## Auditoria — 2026-09-18

### ✅ OK
- `memoria/empresa.md` — preenchido, coerente, 1 cliente (ANG Festas)
- `memoria/preferencias.md` — tom definido, listas de evitar presentes
- `memoria/estrategia.md` — fase dominar entrega, prioridades claras
- `memoria/mentores.md` — base de conhecimento completa
- `identidade/design-guide.md` — identidade visual completa
- `MAPA.md` — sem donos conflitantes
- `RULES.md` — constituição íntegra
- `GOVERNANCE.md` — rotinas definidas
- 39 skills disponíveis
- Raio-X Conta Gestor concluído (7p cliente + 6p interno)
- **Raio-X AgroTerra Contabilidade concluído** (7p cliente + 6p interno, score 45/100)
- Reorganização estrutural concluída (analise/, vendas/)

### ⚠️ Alertas
- Site institucional incompleto — faltam links, deploy, SEO, conteúdo real
- `pendencias.md` vazio — sem fila de tarefas registradas

### ❌ Crítico
- Nenhum
