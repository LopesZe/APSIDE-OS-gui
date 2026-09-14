# Skill: abrir

# /abrir — Abertura de sessão

Curto e direto. O objetivo é carregar contexto e devolver uma síntese de uma frase pro usuário começar a trabalhar.

## Workflow

1. Ler, em ordem:
   - `memoria/empresa.md`
   - `memoria/preferencias.md`
   - `memoria/estrategia.md`
   - `identidade/design-guide.md` (só pra saber se está preenchido ou em branco)
   - `core/IDENTITY.md`
   - `core/HEARTBEAT.md`
   - `core/USER.md`
   - `core/PROPAGATION.md`
   - `core/AGENTS.md`
   - `core/RULES.md`
   - `core/GOVERNANCE.md`
   - `core/MAPA.md`

2. Se algum dos três primeiros (`memoria/*`) estiver em branco (placeholder), responder:
   > "Vi que `memoria/<arquivo>.md` ainda não foi preenchido. Quer rodar `/instalar` agora?"
   E parar.

3. Se `HEARTBEAT.md` indicar alerta, acrescente UMA linha de aviso antes do "Pronto."

4. Se tudo estiver preenchido, devolver UMA mensagem curta no formato:

```
[Nome do negócio] — [o que faz em 5-8 palavras]
Foco atual: [prioridade da estratégia, em uma frase]
Tom: [resumo de 3-4 palavras do tom de voz]

Pronto. O que vamos fazer?
```

5. Não listar quais arquivos foram lidos. Não confirmar leitura. Só usar o contexto.

## Regras

- Resposta tem que caber em 5 linhas no terminal
- Não fazer perguntas além de "o que vamos fazer?"
- Se o `design-guide.md` estiver em branco, não mencionar
