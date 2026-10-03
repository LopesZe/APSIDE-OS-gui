# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  2026-10-03
ultima_auditoria:      2026-10-03
pendencias_vencidas:   nenhuma (1 item condicional em memoria/pendencias.md)
github:                03/10 — sync (auditoria semanal; últimos commits 02/10 — decisão B, gradiente abolido, sistema/ arquivado)
```

## Alertas a resolver

- **30/39 skills sem frontmatter YAML** — não descobertas pelo opencode (só 9
  registradas); `core/SKILLS.md` indexa 33/39; `templates/skills/skill-template.md`
  também sem frontmatter. Detalhe em `reports/audits/2026-10-03.md` §4
- **Deploy do site institucional** — `site/index.html` fechado (links, SEO, CTAs);
  falta deploy (gate: escolha do operador) + og:image/og:url pós-deploy
- **Validação do nicho contábil** — 5 conversas a fazer (`vendas/validacao-contadores.md`);
  nenhuma proposta do palco 3 antes disso
- **`diarios/` vazio** — registro diário parado desde o início (`decisoes/` iniciado em 01/10)
- **MAPA incompleto** — `site/`, `reports/`, `templates/` e `clientes/` sem dono na tabela
- **`clientes/ang-festas`** — `core/MAPA.md` modificado, não commitado (último resto de 01/10)

## Histórico

- **03/10/2026** — Auditoria semanal: sistema saudável, 0 críticos; novo alerta de
  frontmatter nas skills (`reports/audits/2026-10-03.md`)
- **02/10/2026** — Decisão **B** do modelo de negócio (migração em 2 etapas) aprovada;
  escada reorganizada em 3 palcos (valores iguais); `sistema/` (herança de outro
  projeto) movido para `archive/sistema-representante/`; `site/index.html` fechado;
  gradiente da marca abolido (verde `#34544C`, sem roxo)

## Auditoria — 2026-10-03 (relatório: `reports/audits/2026-10-03.md`)

### ✅ OK
- `memoria/*` — 6 arquivos preenchidos e coerentes; nenhuma pendência vencida
- `memoria/decisoes/` — iniciado 01/10 (alerta antigo resolvido)
- `identidade/design-guide.md` — completo, 0 placeholders, atualizado 02/10
- Cores consistentes — `site/index.html` na paleta nova; sem `#00E65B`/`#6E00FF` em arquivos ativos
- `MAPA.md` — sem conflitos de dono
- `RULES.md` / `GOVERNANCE.md` — íntegros
- 39 skills, nenhuma nova criada (regra de ouro respeitada)
- GitHub — `master` = `origin/master`, push 02/10 (ontem), 4 commits desde 01/10

### ⚠️ Alertas
- 30/39 skills sem frontmatter — invisíveis pro opencode; índice e template desatualizados
- Deploy do site institucional pendente (gate do operador)
- Validação contábil — 5 conversas a fazer
- `diarios/` vazio
- `clientes/ang-festas` com `core/MAPA.md` não commitado
- `site/`, `reports/`, `templates/`, `clientes/` sem dono no MAPA

### ❌ Crítico
- Nenhum
