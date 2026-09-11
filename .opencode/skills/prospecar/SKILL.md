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

### Passo 2 — Buscar no Google Maps
1. WebSearch: `"[nicho]" "[cidade]" site:google.com/maps`
2. WebSearch: `"[nicho] perto de mim" [cidade]`
3. WebSearch: `"[nicho]" [bairro] avaliação google`

### Passo 3 — Analisar Cada Resultado
Para cada negócio encontrado:
1. Buscar o nome no Google
2. Verificar se tem GMB
3. Verificar se tem site
4. Classificar:
   - **VERMELHO** (0-30): sem GMB ou muito fraco → oportunidade quente
   - **AMARELO** (31-60): GMB incompleto → oportunidade
   - **VERDE** (61-80): já encaminhado → prospects futuros
   - **COMPLETO** (81-100): não prospecar

### Passo 4 — Gerar Lista
Criar arquivo `dados/prospeccao-[nicho]-[cidade]-[data].md` com:

```markdown
# Prospecção — [Nicho] em [Cidade]
Data: [AAAA-MM-DD]

## Resultados

| # | Nome | Endereço | Telefone | Score | Status | Observação |
|---|------|----------|----------|-------|--------|------------|
| 1 | Nome do Negócio | Rua X, 123 | (11) 99999-9999 | 25 | 🔴 QUENTE | Sem GMB, sem site |
| 2 | ... | ... | ... | ... | ... | ... |

## Resumo
- Total encontrado: X
- Oportunidades quentes (vermelho): X
- Oportunidades (amarelo): X
- Prontos (verde): X
```

### Passo 5 — Próximos Passos
1. Mostrar resumo ao usuário
2. Perguntar se quer gerar roteiro de abordagem (`/vender`)
3. Se sim, gerar lista com contatos e horários

## Regras

- **Nunca inventar dados** — só usar informações encontradas no Google
- **Respeitar horários** — não ligar fora do horário comercial
- **Focado no nicho** — não misturar tipos de negócio
- **Salvar tudo** — lista vai pra `dados/`

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
