# HEARTBEAT — Sinal de vida do agente

Estado vivo do APSIDE-OS. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  2026-10-15
ultima_auditoria:      2026-10-14
pendencias_vencidas:   nenhum (1 item condicional em memoria/pendencias.md)
github:                main e master sincronizados (3e1e66b), árvore limpa
```

## Alertas a resolver

- **`vendas/guia-precos.html`** — 5 ocorrências da paleta antiga (documento comercial; re-renderizar com `node vendas/render-guia.cjs` após migrar)
- **Espelho de templates** — `clientes/_template/marketing/templates/*` (3 ocorrências) ficou pra trás da migração de `marketing/templates/*` (limpo em 14/10)
- **Skills com cores mortas** — 22 ocorrências em 4 arquivos: `apresentacao-gmb/template/apresentacao-gmb.html` (10), `seo-gmb/templates/relatorio-seo-template.html` (8), `raiox-cliente/SKILL.md` (3), `gmb-imagens/SKILL.md` (1)
- **`site/modelos/*.html`** — 33 ocorrências da paleta antiga (4 modelos de teste; não usar como base pra peça nova; `site/index.html` está limpo)
- **30/40 skills sem frontmatter YAML** — não descobertas pelo opencode (só 10 registradas); `core/SKILLS.md` indexa 33/40 (faltam `apresentacao-gmb`, `comparar-gmb`, `criar-cliente`, `gmb-imagens`, `gmb-master`, `proposta-kelvin`, `raiox-cliente`); `templates/skills/skill-template.md` também sem frontmatter
- **Deploy do site institucional** — pendente de decisão do operador (`site/SITE.md`); `og:image`/`og:url` entram só no deploy
- **GMB da APSIDE** — 9 imagens prontas em `marketing/gmb-imagens/png/` nunca publicadas; ativar também os posts
- **`diarios/` vazio** — registro diário parado desde o início (`decisoes/` iniciado em 01/10)
- **MAPA incompleto** — `site/`, `reports/`, `templates/` e `clientes/` sem dono
- **Imagens quebradas** — `analise/youtube/kelvin-cleto/apresentacao.html` aponta 17× pra `icone-apside*` (arquivos não existem)
- **Mídia não restaurada** — `clientes/ang-festas/identidade/Videos/` aguarda confirmação do operador (fotos e `node_modules` já restaurados)

## Última auditoria — 2026-10-14 (`reports/audits/2026-10-14.md`)

- **0 críticos.** `memoria/*` preenchido, identidade íntegra, `site/index.html` limpo, git sincronizado, 40 skills (nenhuma nova — regra de ouro respeitada)
- **108 ocorrências da paleta antiga em 13 arquivos** (templates migrados em 14/10; restam os itens de alerta acima)

Histórico completo de auditorias: `reports/audits/`. Histórico de mudanças: `git log`.
