# Skill: cred-omega

# /cred-omega — Auditoria de credenciais

Auditoria e governança de credenciais do {{OS_NAME}}. Descobre, classifica e protege todas as API keys, tokens e segredos.

## Workflow

1. Buscar por arquivos `.env` e configurações
2. Listar todas as credenciais encontradas
3. Classificar: exposta, parcialmente protegida, segura
4. Verificar se estão no `.gitignore`
5. Gerar relatório com recomendações

## Regras

- Nunca expor valores reais das chaves
- Só mostrar os últimos 4 caracteres
- Recomendações práticas de proteção
