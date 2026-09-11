---
name: prospecar
description: >
  Prospecção de clientes locais via Google Maps. Encontra negócios com GMB fraco
  (poucas fotos, sem avaliações, sem site) e gera lista com contatos.
  Use quando o usuário pedir "prospecar", "achar clientes", "encontrar negócios",
  "scanner google maps", ou /prospecar.
---

# /prospecar — Prospecção de Clientes Locais

Skill de prospecção ativa. Escaneia Google Maps e encontra negócios com oportunidade.

**Regra de ouro:** Só prospectar se o serviço tem demanda real (>200 buscas/mês na cidade). Não vender sonho.

## Dependências

- WebSearch ou WebFetch (pra buscar no Google Maps)
- `memoria/empresa.md` (pra calibrar nicho e região)

## Workflow

### Passo 1 — Definir Parâmetros
1. Perguntar ao usuário:
   - Nicho (pet shop, restaurante, salão, clínica, etc.)
   - Cidade/região
   - Máximo de resultados (padrão: 20)
2. Se não perguntar, usar dados de `memoria/empresa.md`

### Passo 2 — Validar Volume de Busca (NOVO ⭐)

**ANTES de prospecar, verificar se o serviço tem demanda.**

1. WebSearch: `"[nicho] [cidade]"` — ver quantos resultados aparecem
2. WebSearch: `"[nicho] perto de mim [cidade]"` — indicador de demanda local
3. Estimar volume:
   - **MUITO BAIXO** (<50 buscas/mês) → NÃO prospecar (não vale a pena)
   - **BAIXO** (50-200 buscas/mês) → Prospectar com cautela
   - **MÉDIO** (200-1.000 buscas/mês) → Prospectar normalmente
   - **ALTO** (>1.000 buscas/mês) → Prospectar agressivamente

**Como estimar sem ferramenta paga:**
- Contar quantos anúncios aparecem (mais anúncios = mais demanda)
- Ver quantos resultados orgânicos locais aparecem
- Ver se tem Google Maps com empresas (indica demanda)

### Passo 3 — Buscar no Google Maps
1. WebSearch: `"[nicho]" "[cidade]" site:google.com/maps`
2. WebSearch: `"[nicho] perto de mim" [cidade]`
3. WebSearch: `"[nicho]" [bairro] avaliação google`

### Passo 4 — Analisar Cada Resultado

Para cada negócio encontrado:
1. Buscar o nome no Google
2. Verificar se tem GMB
3. Verificar se tem site
4. **Verificar se paga Google Ads** (anúncio patrocinado = precisa de ajuda)
5. **Verificar posição no orgânico** (2ª-3ª página = oportunidade)
6. Classificar:
   - **VERMELHO** (0-30): sem GMB ou muito fraco → oportunidade quente
   - **AMARELO** (31-60): GMB incompleto → oportunidade
   - **VERDE** (61-80): já encaminhado → prospects futuros
   - **COMPLETO** (81-100): não prospecar

### Passo 5 — Gerar Lista
Criar arquivo `dados/prospeccao-[nicho]-[cidade]-[data].md` com:

```markdown
# Prospecção — [Nicho] em [Cidade]
Data: [AAAA-MM-DD]
Volume de busca estimado: [MUITO BAIXO/BAIXO/MÉDIO/ALTO]

## Resultados

| # | Nome | Telefone | Score | Paga Ads? | Posição Orgânica | Status | Mensagem Sugerida |
|---|------|----------|-------|-----------|------------------|--------|-------------------|
| 1 | Nome | (11) 99999 | 25 | Sim | 2ª página | 🔴 QUENTE | "Vi que você tá pagando Ads..." |
| 2 | Nome | (11) 88888 | 40 | Não | 3ª página | 🟡 AMARELO | "Seu concorrente tá no topo..." |

## Resumo
- Volume de busca do serviço: [estimativa]
- Total encontrado: X
- Oportunidades quentes (vermelho): X
- Oportunidades (amarelo): X
- Prontos (verde): X
```

### Passo 6 — Mensagens Personalizadas (NOVO ⭐)

Para cada negócio, gerar uma mensagem personalizada com dados reais:

**Se paga Google Ads:**
> "Oi [NOME]! Vi que você tá investindo em Google Ads. Mas sabia que poderia estar aparecendo no orgânico, sem pagar por clique? Seu concorrente [CONCORRENTE] tá captando clientes que deveriam ser seus. Posso te mostrar como?"

**Se tá na 2ª-3ª página:**
> "Oi [NOME]! Pesquisei [serviço] em [cidade] e vi que seu site tá na [X]ª página. Seu concorrente [CONCORRENTE] tá no topo e tá captando [Y] clientes por mês. Quer saber como chegar lá?"

**Se não tem GMB:**
> "Oi [NOME]! Vi que vocês têm um Instagram incrível. Mas quando alguém busca [serviço] no Google, vocês não aparecem. Seu concorrente [CONCORRENTE] tá aparecendo. Posso te mostrar como mudar isso?"

### Passo 7 — Próximos Passos
1. Mostrar resumo ao usuário
2. Perguntar se quer gerar roteiro de abordagem (`/vender`)
3. Se sim, gerar lista com contatos e horários

## Regras

- **Nunca inventar dados** — só usar informações encontradas no Google
- **Respeitar horários** — não ligar fora do horário comercial
- **Focado no nicho** — não misturar tipos de negócio
- **Salvar tudo** — lista vai pra `dados/`
- **Validar demanda primeiro** — não prospectar serviços sem demanda
- **Mensagem com dados reais** — sempre mencionar o concorrente e os números

## Critérios de Score

| Critério | Pontos |
|----------|--------|
| Tem foto de capa | 15 |
| Tem fotos no perfil | 15 |
| Tem avaliações | 15 |
| Tem telefone | 10 |
| Tem endereço | 10 |
| Tem horário | 10 |
| Tem site | 5 |
| Tem redes sociais | 5 |
| Tem categoria definida | 5 |
| Responde avaliações | 5 |

**Classificação:**
- 0-30 = 🔴 VERMELHO (prospecar URGENTE)
- 31-60 = 🟡 AMARELO (oportunidade clara)
- 61-80 = 🟢 OK (já encaminhado)
- 81-100 = ✅ COMPLETO (não prospecar)
