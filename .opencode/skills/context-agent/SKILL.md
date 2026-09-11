# Skill: context-agent

# /context-agent — Continuidade entre sessões

Continuidade entre sessões do {{OS_NAME}}. Salva resumos, decisões, tarefas pendentes e carrega briefing automático. Integra com `memoria/` como fonte de verdade.

## Workflow

1. Ao final da sessão, salvar:
   - Resumo do que foi feito
   - Decisões tomadas
   - Tarefas pendentes
2. Ao iniciar próxima sessão, carregar:
   - Último resumo
   - Pendências abertas
   - Contexto relevante

## Regras

- Salvar em `memoria/diarios/` (formato YYYY-MM-DD.md)
- Pendências em `memoria/pendencias.md`
- Não duplicar informação que já existe em `memoria/`
