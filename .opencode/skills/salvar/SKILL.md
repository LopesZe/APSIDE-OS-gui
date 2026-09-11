# Skill: salvar

# /salvar — Salvar no GitHub

Skill de uma função só: garantir que o trabalho está no GitHub.

## Workflow

1. Rodar `git status`. Se não tiver mudanças, responder "Tá tudo sincronizado, sem mudança nova" e parar.

2. Mostrar o `git status` curto pro usuário e perguntar:
   > "Vou comitar tudo isso. Quer descrever a mudança em uma frase ou usa o resumo automático?"

3. Se o usuário fornecer mensagem, usar. Se não, gerar uma mensagem baseada nos arquivos alterados (1 linha, formato: "Atualiza X" ou "Adiciona Y").

4. `git add .` → `git commit -m "<mensagem>"` → `git push`.

5. Confirmar com link do repositório.

## Regras

- Nunca usar `--force` sem o usuário pedir explicitamente
- Nunca rodar `git reset --hard` sem confirmação clara
- Se o push falhar por divergência, avisar e oferecer `git pull --rebase`
