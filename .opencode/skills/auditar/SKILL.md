# Skill: auditar

# /auditar — Auditoria do sistema

Checa a saúde do {{OS_NAME}}: memória, identidade, status operacional e dependências.

## Workflow

1. **Verificar `memoria/*`** — todos preenchidos e coerentes?
2. **Verificar `identidade/design-guide.md`** — cores e fontes definidas?
3. **Verificar `HEARTBEAT.md`** — última auditoria não muito antiga?
4. **Verificar `MAPA.md`** — sem donos conflitantes?
5. **Verificar arquivos órfãos** — todo `.md` aponta para um dono em `MAPA.md`?
6. **Verificar status do bot** — `sistema/bot.lock` com PID vivo?
7. **Verificar GitHub** — último push recente?

## Saída

1. Criar `reports/audits/YYYY-MM-DD.md` com os resultados
2. Atualizar `HEARTBEAT.md` com:
   - `ultima_auditoria` = data de hoje
   - Status de cada item verificado
   - Alertas pendentes (se houver)

3. Retornar resumo curto pro operador

## Regras

- Nunca alterar arquivos de negócio durante a auditoria
- Só atualizar `HEARTBEAT.md` e criar o relatório
- Se houver problema crítico, avisar antes de continuar
