# HEARTBEAT — Sinal de vida do agente

Estado vivo do sistema. Lido no `/abrir` e atualizado por `/auditar`. Não é runtime
sensível — vive versionado no git (Regra 4 de `RULES.md`).

```
ultima_sincronizacao:  (preenchido pelo /salvar)
ultima_auditoria:      (preenchido pelo /auditar)
pendencias_vencidas:   ver memoria/pendencias.md
github:                (preenchido pelo /salvar)
```

## Alertas a resolver
- Nenhum no momento.

## Status operacional
- **Estado:** Saudável
- **Próximo passo:** Configurar identidade visual e memória
