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

### O que o concorrente está ganhando
- Concorrente líder: [NOME]
- Tráfego estimado: [X] visitas/mês
- Posição no Google: [1ª-3ª posição]
- Clientes potenciais por mês: [Y]

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

## ROI — Quanto você pode ganhar

**Cálculo do potencial:**

| Métrica | Valor estimado |
|---------|----------------|
| Pessoas buscando [serviço] em [cidade] | [X]/mês |
| Posição potencial (1ª-3ª) | [Y]% dos cliques |
| Visitas potenciais | [Z]/mês |
| Taxa de conversão (ligação/WhatsApp) | 3-5% |
| Leads potenciais | [W]/mês |
| Ticket médio | R$[valor] |
| **Faturamento potencial** | **R$[total]/mês** |

**Retorno sobre investimento:**
- Investimento: R$[valor]
- Retorno mensal potencial: R$[total]
- Payback: [X] meses

> "Seu concorrente tá captando [X] clientes por mês com orgânico. Com essa solução, você pode estar captando o mesmo tanto."

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
