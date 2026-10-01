# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  2026-10-01
ultima_auditoria:      2026-10-01
pendencias_vencidas:   nenhuma (1 item condicional em memoria/pendencias.md)
estado_telegram:       não configurado (.env inexistente)
github:                4681017 (01/10) — sync desta sessão
```

## Status operacional do sistema NF

> Dono do status operacional do `sistema/` (bot Telegram + Supabase + dashboard).

- **Bot:** (status preenchido pelo setup)
- **Telegram:** (grupo e tópicos preenchidos pelo setup)
- **Supabase / .env:** (configurados pelo setup)
- **Dashboard:** `sistema/dashboard/` (Hono + `server.js`), sobe em `npm run dev`/`start`.

## Alertas a resolver

- **Site institucional em desenvolvimento** — modelo final definido, faltam links, deploy, SEO, conteúdo real
- **Bot Telegram nunca configurado** — `sistema/.env` e `bot.lock` ausentes; setup pendente
- **`diarios/` e `decisoes/` vazios** — registro diário parado desde o início
- **MAPA incompleto** — `site/` e `reports/` sem dono na tabela

## Auditoria — 2026-10-01 (relatório: `reports/audits/2026-10-01.md`)

### ✅ OK
- `memoria/empresa.md` — preenchido, coerente, 1 cliente (ANG Festas)
- `memoria/preferencias.md` — tom definido + regras de logo e imagem GMB
- `memoria/estrategia.md` — fase dominar entrega, prioridades claras
- `memoria/pendencias.md` — 1 item, nenhum vencido
- `memoria/mentores.md` — base de conhecimento completa
- `identidade/design-guide.md` — completo, 0 placeholders
- `MAPA.md` — sem conflitos de dono
- `RULES.md` / `GOVERNANCE.md` — íntegros
- 39 skills, índice `core/SKILLS.md` coerente
- GitHub — último push 28/09 (3 dias)

### ⚠️ Alertas
- Site institucional incompleto — faltam links, deploy, SEO, conteúdo real
- Bot Telegram sem setup (`.env` / `bot.lock` ausentes)
- `clientes/ang-festas` não commitado
- `diarios/` e `decisoes/` vazios
- Auditoria de 18/09 registrada sem relatório em `reports/audits/`
- `site/` e `reports/` sem dono no MAPA

### ❌ Crítico
- Nenhum
