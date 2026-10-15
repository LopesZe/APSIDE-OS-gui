# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  2026-10-14
ultima_auditoria:      2026-10-14
pendencias_vencidas:   nenhum (1 item condicional em memoria/pendencias.md)
github:                14/10 — pull (deck Agroterra 08/10 + validacao-contadores 14/10 vindos do remoto; local == origin/main, árvore limpa)
```

## Alertas a resolver (auditoria 14/10 — `reports/audits/2026-10-14.md`)

- **`site/modelos/*.html` ainda na paleta morta** (baixa) — 33 ocorrências em 4
  modelos de teste antigos; `site/index.html` **migrado e CONCLUÍDO em 06/10**
  (verificado 14/10: 0 cores mortas). Não usar os modelos como base pra peça nova
- **Templates de conteúdo na paleta morta** (alta) — `marketing/templates/*`
  (25 ocorrências) e espelho `clientes/_template/marketing/templates/*` (25):
  toda peça nova nasce fora da identidade. `marketing/conteudo/` (52) é
  histórico — não mexer
- **Skills com cores mortas** (alta, nova medição 14/10) — 22 ocorrências em 4
  arquivos: `apresentacao-gmb/template/apresentacao-gmb.html` (10, fluxo Kelvin),
  `seo-gmb/templates/relatorio-seo-template.html` (8), `raiox-cliente/SKILL.md`
  (3), `gmb-imagens/SKILL.md` (1)
- **`vendas/guia-precos.html`** — 25 ocorrências da paleta morta (documento
  comercial; mesmo recorte dos templates)
- **30/40 skills sem frontmatter YAML** — não descobertas pelo opencode (só 10
  registradas); `core/SKILLS.md` indexa 33/40 (faltam `apresentacao-gmb`,
  `comparar-gmb`, `criar-cliente`, `gmb-imagens`, `gmb-master`, `proposta-kelvin`,
  `raiox-cliente`); `templates/skills/skill-template.md` também sem frontmatter
- **Deploy do site institucional** — site **CONCLUÍDO em 06/10/2026**
  (`site/SITE.md`); deploy **adiado por decisão do operador (06/10: não fazer
  agora)**. `og:image`/`og:url` entram só quando o deploy acontecer
- **Validação do nicho contábil** — **ENCERRADA 15/10: 5 conversas, 0 reações
  positivas → nicho descartado** (ver `memoria/estrategia.md`). Roteiro e
  aprendizados preservados em `vendas/validacao-contadores.md`. Próximo:
  definir nova vertical
- **Deck Agroterra** — `clientes/TESTE - EMPRESA X/vendas/apresentacao-proposta-agroterra.html`
  com 2 cores mortas (baixa; revisar no próximo uso)
- **`diarios/` vazio** — registro diário parado desde o início (`decisoes/` iniciado em 01/10)
- **MAPA incompleto** — `site/`, `reports/`, `templates/` e `clientes/` sem dono
  (pastas novas em `clientes/`: `TESTE - EMPRESA X`, `acountabilidade`)
- **Imagens quebradas** — `analise/youtube/kelvin-cleto/apresentacao.html` aponta
  17× pra `icone-apside*` apagado em 05/10
- **Mídia não restaurada** — `clientes/ang-festas/identidade/Videos/` (fonte
  provável: `Downloads/IMG_6834.MOV` + `IMG_6835.MOV`, 3,8 GB) aguarda confirmação
  do operador; fotos e `node_modules` já restaurados (incidente §7 do relatório)

## Histórico

- **14/10/2026** — Auditoria (atraso de 9 dias, última 05/10): **0 críticos**;
  medição exata da paleta morta (**108 ocorrências em 13 arquivos** + 22 em 4
  skills — `apresentacao-gmb` é a pior); `site/index.html` confirmado **limpo**;
  validação contábil **reescrita** (guia de conversa WhatsApp); repo sincronizado
  (`30f526b`); cliente teste novo `TESTE - EMPRESA X` (Agroterra) e
  `acountabilidade` sem dono no MAPA; relatório `reports/audits/2026-10-14.md`
- **07/10/2026** — Vídeo institucional **concluído, v4** (`saidas/video-solucao-apside/`):
  motion graphic 101,2s, 1920×1080/30fps, estilo OpenAI "dots" (12 atos, sem áudio,
  sem preços, cliente fictício Vitália); v2 com 9 ajustes do operador (coluna no A2,
  clique→GMB, primeiro→melhor, GARGALO central, tags V1-V3, chips A6, funil A7,
  pulso atrás do card A8, PROCESSANDO→FEITO A9); v4 com 3 correções finais +
  títulos -70px (celular sem corte no zoom, clique→abertura da aba do cliente que
  dá origem ao A3, swap primeiro→melhor centralizado); pipeline Puppeteer+FFmpeg
  no `TOOLS.md`; QA 98/98 + PSNR MP4==render; learnings em `AGENTS.md`
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

## Auditoria — 2026-10-14 (relatório: `reports/audits/2026-10-14.md`)

### ✅ OK
- `memoria/*` — 7 arquivos preenchidos (`preferencias` atualizado 14/10,
  demais 08/10); nenhuma pendência vencida
- Identidade — `design-guide.md` íntegro (145 linhas, 76 hex, fontes definidas,
  sem placeholder); `site/index.html` **verificado limpo** (0 cores mortas)
- `MAPA.md` — sem conflitos de dono; `RULES.md`/`GOVERNANCE.md` íntegros
- 40 skills, **nenhuma nova** desde 05/10 (regra de ouro respeitada)
- Git — `main` == `origin/main` (0/0), árvore limpa, **zero gitlinks**;
  `temp/` (next.js, skills) 100% ignorado; último commit `30f526b` (14/10)
- `memoria/pendencias.md` — 1 item condicional, nenhum vencido

### ⚠️ Alertas (detalhe e prioridade na seção "Alertas a resolver")
- **Paleta morta: 108 ocorrências em 13 arquivos** (templates 25 + espelho 25,
  `site/modelos` 33, `guia-precos.html` 25) + **22 em 4 skills** — não usar como
  base pra peça nova
- 30/40 skills sem frontmatter; `core/SKILLS.md` 33/40
- Deploy do site institucional pendente (gate do operador)
- Validação contábil — reescrita 14/10, **5 conversas ainda a fazer**
- `diarios/` vazio; MAPA sem dono p/ `site/`, `reports/`, `templates/`, `clientes/`
- 17 imgs quebradas em kelvin-cleto (piorou: era 16); deck Agroterra 2 cores mortas
- Mídia `Videos/` do ANG não restaurada (incidente §7 do relatório 05/10)

### ❌ Crítico
- Nenhum
