# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  (preenchido pelo /salvar)
ultima_auditoria:      2026-09-11
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

- **`memoria/clientes-ideais.md` é arquivo órfão** — não consta em MAPA.md. Adicionar ao MAPA
- **Site institucional em desenvolvimento** — modelo final definido, faltam links, deploy, SEO, conteúdo real

## Auditoria — 2026-09-11

### ✅ OK
- `memoria/empresa.md` — preenchido, coerente com operação
- `memoria/preferencias.md` — tom definido, listas de evitar presentes
- `memoria/estrategia.md` — fase de validação, prioridades claras
- `memoria/mentores.md` — base de conhecimento completa
- `identidade/design-guide.md` — identidade visual completa (cores, tipografia, logo, ícone, regras)
- `MAPA.md` — sem donos conflitantes
- `RULES.md` — constituição íntegra
- `GOVERNANCE.md` — rotinas definidas
- 7 skills disponíveis (GMB pipeline, proposta, prospecar, vender)
- Git limpo, último commit `862d428`

### ⚠️ Alertas
- `clientes-ideais.md` não mapeado no MAPA (órfão)
- Site incompleto — faltam links, deploy, SEO, conteúdo real nos cards
- `pendencias.md` vazio — sem fila de tarefas registradas

### ❌ Crítico
- Nenhum
