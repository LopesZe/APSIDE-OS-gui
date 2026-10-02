# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  2026-10-02
ultima_auditoria:      2026-10-01
pendencias_vencidas:   nenhuma (1 item condicional em memoria/pendencias.md)
github:                02/10 — sync (arquivamento sistema/, decisão B do modelo, site/index.html)
```

## Alertas a resolver

- **Deploy do site institucional** — `site/index.html` fechado (links, SEO, CTAs);
  falta deploy (gate: escolha do operador) + og:image/og:url pós-deploy
- **Validação do nicho contábil** — 5 conversas a fazer (`vendas/validacao-contadores.md`);
  nenhuma proposta do palco 3 antes disso
- **`diarios/` vazio** — registro diário parado desde o início (`decisoes/` iniciado em 01/10 com o recall de preços)
- **MAPA incompleto** — `site/` e `reports/` sem dono na tabela

## Histórico

- **02/10/2026** — Decisão **B** do modelo de negócio (migração em 2 etapas) aprovada;
  escada reorganizada em 3 palcos (valores iguais); `sistema/` (herança de outro
  projeto) movido para `archive/sistema-representante/`; `site/index.html` fechado.

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
