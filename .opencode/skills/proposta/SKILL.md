---
name: proposta
description: >
  Gera proposta comercial baseada no problema identificado.
  Inclui diagnóstico, solução, escopo, preço e próximos passos.
  Use quando o usuário pedir "proposta", "orçamento", "proposta comercial",
  "quanto custa", ou /proposta.
---

# /proposta — Proposta Comercial

Proposta baseada no problema, não no produto. O cliente compra a resolução de um problema.

## Dependências

- `vendas/escada-precos.md` — faixas de preço
- `memoria/empresa.md` — dados do negócio (se disponível)
- `memoria/preferencias.md` — tom de voz

## Workflow

### Passo 1 — Entender o problema

1. Qual problema foi identificado no diagnóstico?
2. Qual o impacto desse problema no negócio?
3. O que o cliente precisa resolver?
4. Qual o orçamento do cliente (se informado)?

### Passo 2 — Definir a solução

Não oferecer 3 opções obrigatórias. Oferecer a solução que faz sentido pro problema:

- **Problema simples** (Google fraco) → Presença no Google (R$297-497)
- **Problema médio** (Google + conversão) → Google + Landing Page (R$697-1.200)
- **Problema grande** (múltiplos gargalos) → Projeto de Estruturação (R$1.500-5.000)
- **Problema complexo** (processos) → Automação/CRM (R$3.000-10.000+)

### Passo 3 — Montar a proposta

Criar arquivo `saidas/proposta-[cliente]-[data].md` com:

```markdown
# Proposta Comercial — [Nome do Negócio]

**Data:** [AAAA-MM-DD]
**Validade:** 7 dias

---

## Diagnóstico

[Resumo do que foi encontrado]

### Problema Identificado
[Descrição clara do problema principal]

### Impacto
[O que acontece se não resolver — sem inventar números]

---

## Solução Proposta

### O que será entregue
- [Item 1]
- [Item 2]
- [Item 3]

### Prazo
[X dias/semanas]

### Investimento
R$ [valor]

---

## Próximos Passos

1. Confirme via WhatsApp: [seu número]
2. Início imediato após confirmação

---

*Proposta válida por 7 dias.*
*APSIDE — Estruturação digital para negócios locais*
```

### Passo 4 — Entregar

1. Mostrar resumo no chat
2. Oferecer enviar por WhatsApp/email
3. Perguntar se quer ajustes

## Regras

- **Uma solução, não 3 opções** — a menos que o cliente peça alternativas
- **Mostrar o problema antes da solução** — cliente precisa entender o porquê
- **Preço baseado no impacto** — não no tempo de execução
- **Incluir prazo** — gerar expectativa real
- **Validade de 7 dias** — urgência saudável
- **Tom profissional mas acessível** — sem jargão
- **Nunca inventar números** — usar linguagem defensável

## Referência

- Faixas de preço: `vendas/escada-precos.md`
- Tom de voz: `memoria/preferencias.md`
