---
name: diagnostico-gmb
description: >
  Diagnóstico do Google Meu Negócio de um cliente.
  Analisa fotos, avaliações, informações, categorias e gera score (0-100).
  Use quando o usuário pedir "diagnóstico GMB", "analisar Google", "ver GMB",
  "quanto falta no Google", ou /diagnostico-gmb.
  Para workflow completo (diagnóstico + comparativo + apresentação PDF), use /gmb.
---

# /diagnostico-gmb — Diagnóstico Completo do GMB

Skill de diagnóstico do Google Meu Negócio. Analisa o perfil e gera score + relatório.

## Dependências

- WebSearch ou WebFetch (pra buscar o GMB)
- `memoria/empresa.md` (se disponível)

## Workflow

### Passo 1 — Encontrar o GMB
1. Buscar o nome do negócio no Google
2. Localizar o painel do GMB (lado direito da busca)
3. Anotar todas as informações visíveis

### Passo 2 — Analisar 10 Critérios

| Critério | Pontos | O que verificar |
|----------|--------|-----------------|
| **Foto de capa** | 15 | Tem foto de capa ou fica o mapa genérico? |
| **Fotos do perfil** | 15 | Quantas fotos? (0, 1-2, 3-5, 6+) |
| **Avaliações** | 15 | Tem estrelas? Quantas? Nota média? |
| **Respostas do dono** | 10 | O dono responde às avaliações? |
| **Telefone** | 10 | Tem telefone cadastrado? |
| **Endereço** | 10 | Tem endereço completo? |
| **Horário** | 10 | Tem horário de funcionamento? |
| **Categoria** | 5 | Tem categoria principal + secundárias? |
| **Website** | 5 | Tem link pro site? |
| **Redes sociais** | 5 | Tem Facebook, Instagram, etc.? |

### Passo 3 — Calcular Score

**Soma total = Score (0-100)**

**Classificação:**
- **0-30 = 🔴 VERMELHO** — Precisa URGENTE. Oportunidade quente de venda.
- **31-60 = 🟡 AMARELO** — Oportunidade clara. Cliente consciente que falta algo.
- **61-80 = 🟢 OK** — Já encaminhado. Melhorias pontuais.
- **81-100 = ✅ COMPLETO** — Não prospecar. Já tá bem servido.

### Passo 4 — Gerar Relatório

Criar arquivo `marketing/diagnosticos/gmb-[nome]-[data].md` com:

```markdown
# Diagnóstico GMB — [Nome do Negócio]

**Data:** [AAAA-MM-DD]
**Score:** XX/100
**Classificação:** [VERMELHO/AMARELO/OK/COMPLETO]

---

## Presença

| Critério | Status | Notas |
|----------|--------|-------|
| Foto de capa | ✅/❌ | [detalhe] |
| Fotos do perfil | ✅/❌ | [detalhe] |
| Avaliações | ✅/❌ | [detalhe] |
| Respostas do dono | ✅/❌ | [detalhe] |
| Telefone | ✅/❌ | [detalhe] |
| Endereço | ✅/❌ | [detalhe] |
| Horário | ✅/❌ | [detalhe] |
| Categoria | ✅/❌ | [detalhe] |
| Website | ✅/❌ | [detalhe] |
| Redes sociais | ✅/❌ | [detalhe] |

---

## O que está faltando

1. [Item 1 — evidência do problema]
2. [Item 2 — evidência do problema]
3. [Item 3 — evidência do problema]

### Impacto
Quando alguém busca "[nicho] perto de mim" no Google, o concorrente
tem um perfil mais completo, mais avaliações e mais informações.
Isso pode influenciar qual empresa a pessoa escolhe.

---

## O que eu entrego pra completar

### Opção 1: Presença no Google
- [Serviço 1]
- [Serviço 2]
- Faixa: R$ 297–497
- Prazo: 2-5 dias

### Opção 2: Google + Landing Page
- Tudo da Opção 1 +
- [Serviço 3]
- [Serviço 4]
- Faixa: R$ 697–1.200
- Prazo: 5-7 dias

### Opção 3: Projeto de Estruturação
- Tudo da Opção 2 +
- [Serviço 5]
- [Serviço 6]
- Faixa: R$ 1.500–5.000
- Prazo: 1-3 semanas

> A solução é definida pelo problema identificado, não por uma tabela de preços.

---

*Diagnóstico gerado pela APSIDE*
```

### Passo 5 — Entregar
1. Mostrar score no chat
2. Listar o que falta
3. Oferecer diagnóstico completo (Raio-X) ou proposta de solução

## Regras

- **Nunca inventar dados** — só anotar o que foi encontrado
- **Ser honesto** — se tá bom, falar que tá bom
- **Focar no que falta** — oportunidade de solução
- **Nunca inventar números** — usar linguagem defensável
- **Salvar diagnóstico** — pode ser útil pra prova social depois
