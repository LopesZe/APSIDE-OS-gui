# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  2026-10-06
ultima_auditoria:      2026-10-05
pendencias_vencidas:   nenhum (1 item condicional em memoria/pendencias.md)
github:                05/10 — sync (auditoria; push `40a497b..e4fcf57` — identidade v3.1, deck ANG, ang-festas absorvido no repo)
```

## Alertas a resolver

- **`site/modelos/*.html` ainda na paleta morta** (baixa) — 4 modelos de teste
  antigos; `site/index.html` **migrado e CONCLUÍDO em 06/10** (tipografia v3.1,
  copy AI-First, stats com fonte, modal, exemplos fictícios). Não usar os
  modelos como base pra peça nova
- **Templates de conteúdo na paleta morta** (novo, alta) — `marketing/templates/*`
  (25 ocorrências) e `clientes/_template/marketing/templates/*`: toda peça nova
  nasce fora da identidade. `marketing/conteudo/` (52) é histórico — não mexer
- **30/40 skills sem frontmatter YAML** — não descobertas pelo opencode (só 10
  registradas); `core/SKILLS.md` indexa 33/40 (faltam `apresentacao-gmb`,
  `comparar-gmb`, `criar-cliente`, `gmb-imagens`, `gmb-master`, `proposta-kelvin`,
  `raiox-cliente`); `templates/skills/skill-template.md` também sem frontmatter
- **Deploy do site institucional** — site **CONCLUÍDO em 06/10/2026**
  (`site/SITE.md`); deploy **adiado por decisão do operador (06/10: não fazer
  agora)**. `og:image`/`og:url` entram só quando o deploy acontecer
- **Validação do nicho contábil** — 5 conversas a fazer (`vendas/validacao-contadores.md`,
  intocado desde 02/10); nenhuma proposta do palco 3 antes disso
- **`diarios/` vazio** — registro diário parado desde o início (`decisoes/` iniciado em 01/10)
- **MAPA incompleto** — `site/`, `reports/`, `templates/` e `clientes/` sem dono na tabela
- **`vendas/guia-precos.html`** — 25 ocorrências da paleta morta (mesmo recorte dos templates)
- **Imagens quebradas** — `analise/youtube/kelvin-cleto/apresentacao.html` aponta
  16× pra `icone-apside*` apagado em 05/10
- **Mídia não restaurada** — `clientes/ang-festas/identidade/Videos/` (fonte
  provável: `Downloads/IMG_6834.MOV` + `IMG_6835.MOV`, 3,8 GB) aguarda confirmação
  do operador; fotos e `node_modules` já restaurados (incidente §7 do relatório)

## Histórico

- **06/10/2026** — Site institucional **concluído**: tipografia v3.1 (DM Sans/
  Jakarta/JetBrains Mono), copy do reposicionamento AI-First, stats com fonte
  verificada, modal vertical (exemplo em cima, X fora da caixa, sem hover, CTA
  fixo centralizado), exemplos fictícios "Vitália Odontologia", CTAs brancos com
  brilho no hover; **deploy adiado** pelo operador (não fazer agora)
- **05/10/2026** — Auditoria semanal: 0 críticos; ang-festas **absorvido no repo
  principal** (alerta de 01/10 resolvido); identidade **v3.1** (accent `#4331e9`,
  texto `#6E5CFF`, fundo `#000000` + fade); novo alerta de **paleta morta no site
  e nos templates**; incidente com mídia gitignore contido
  (`reports/audits/2026-10-05.md`)
- **03/10/2026** — Auditoria semanal: sistema saudável, 0 críticos; novo alerta de
  frontmatter nas skills (`reports/audits/2026-10-03.md`)
- **02/10/2026** — Decisão **B** do modelo de negócio (migração em 2 etapas) aprovada;
  escada reorganizada em 3 palcos (valores iguais); `sistema/` (herança de outro
  projeto) movido para `archive/sistema-representante/`; `site/index.html` fechado;
  gradiente da marca abolido (verde `#34544C`, sem roxo)

## Auditoria — 2026-10-05 (relatório: `reports/audits/2026-10-05.md`)

### ✅ OK
- `memoria/*` — 7 arquivos preenchidos (`empresa`/`estrategia`/`preferencias`
  atualizados 05/10); nenhuma pendência vencida
- Identidade v3.1 — `design-guide.md` + `MANUAL-DAMARCA.md` + `brandkit.svg/png`
  (re-renderizado, bbox verificado) sem `#948CD8`/`#181721`
- `MAPA.md` — sem conflitos de dono; `RULES.md`/`GOVERNANCE.md` íntegros
- 40 skills, 1 nova desde 03/10 (`proposta-kelvin`, já registrada)
- Git — árvore limpa, **zero gitlinks**; `ang-festas` no repo principal (subtree,
  histórico preservado); `master` = `origin/master` com push 05/10
- `memoria/pendencias.md` — 1 item condicional, nenhum vencido

### ⚠️ Alertas
- Paleta morta no site institucional + `site/modelos/*` (35) e nos templates de
  conteúdo (25 + `clientes/_template`) — **não usar como base pra peça/deploy novos**
- 30/40 skills sem frontmatter; `core/SKILLS.md` 33/40
- Deploy do site institucional pendente (gate do operador)
- Validação contábil — 5 conversas, arquivo intocado desde 02/10
- `diarios/` vazio; MAPA sem dono p/ `site/`, `reports/`, `templates/`, `clientes/`
- `guia-precos.html` e 4 skills com cores mortas; 16 imgs quebradas em kelvin-cleto
- Mídia `Videos/` do ANG não restaurada (incidente §7)

### ❌ Crítico
- Nenhum
