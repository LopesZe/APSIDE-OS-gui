# Skill: aprovar-post

# /aprovar-post — Aprovar e publicar post

Aprova e publica um post da fila — flipa o blog de draft pra published, copia os PNGs pro public folder do site, faz commit e push, aguarda o deploy, e posta o carrossel no Instagram + Facebook via Meta Graph API.

## Dependências

- Script `scripts/postar-instagram.js`
- Script `scripts/postar-facebook.js`
- Token Meta em `.env`

## Workflow

1. Listar posts pendentes em `marketing/conteudo/`
2. Mostrar resumo pro operador aprovar
3. Publicar (Instagram + Facebook)
4. Confirmar com links

## Regras

- **GATE HUMANO:** só publicar após OK explícito do operador
- Nunca publicar sem aprovação
- Se falhar, reportar erro e não tentar novamente automaticamente
