# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  2026-09-15
ultima_auditoria:      2026-09-15
pendencias_vencidas:   ver memoria/pendencias.md
estado_telegram:       (preenchido pelo setup)
github:                181faef
```

## Status operacional do sistema NF

> Dono do status operacional do `sistema/` (bot Telegram + Supabase + dashboard).

- **Bot:** (status preenchido pelo setup)
- **Telegram:** (grupo e tópicos preenchidos pelo setup)
- **Supabase / .env:** (configurados pelo setup)
- **Dashboard:** `sistema/dashboard/` (Hono + `server.js`), sobe em `npm run dev`/`start`.

## Alertas a resolver

- **Site institucional em desenvolvimento** — modelo final definido, faltam links, deploy, SEO, conteúdo real

## Auditoria — 2026-09-15

### ✅ OK
- `memoria/empresa.md` — preenchido, coerente, 1 cliente (ANG Festas)
- `memoria/preferencias.md` — tom definido, listas de evitar presentes
- `memoria/estrategia.md` — fase dominar entrega, prioridades claras
- `memoria/mentores.md` — base de conhecimento completa
- `memoria/clientes-ideais.md` — mapeado no MAPA.md
- `identidade/design-guide.md` — identidade visual completa (cores, tipografia, logo, ícone, regras)
- `MAPA.md` — sem donos conflitantes, referências corrigidas
- `RULES.md` — constituição íntegra
- `GOVERNANCE.md` — rotinas definidas
- 39 skills disponíveis
- Git limpo, último commit `181faef`
- Raio-X Conta Gestor concluído (7 páginas cliente + 6 páginas interno)
- **Reorganização estrutural concluída** — analise/, vendas consolidado, referências corrigidas
- Prospects limpos (reiniciar prospecção)

### ⚠️ Alertas
- Site institucional incompleto — faltam links, deploy, SEO, conteúdo real
- `pendencias.md` vazio — sem fila de tarefas registradas

### ❌ Crítico
- Nenhum
