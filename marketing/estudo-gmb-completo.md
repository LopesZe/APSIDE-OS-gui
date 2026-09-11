# Estudo: Como Colocar um Negócio no Topo do Google

> Referência completa para entender o que faz um negócio ranquear #1 no Google,
> e como cada skill do APSIDE-OS se encaixa nesse processo.

---

## PARTE 1: O Que o Google Avalia

Google ranqueia negócios locais em 3 fatores principais:

### 1. Relevância (32% do peso)
**O quão bem o seu perfil combina com o que a pessoa busca.**

| Sinal | Impacto | O que fazer |
|-------|---------|-------------|
| Categoria primária do GMB | #1 mais importante | Escolher a mais específica possível ("Barbearia" > "Serviços") |
| Categorias secundárias | #7 | Adicionar categorias reais extras |
| Nome do negócio | #2 | Nome real, sem keyword stuffing |
| Descrição do negócio | Moderado | 750 caracteres descrevendo serviços, não vendedor |
| Serviços e produtos listados | #81 | Listar tudo com descrições |
| Atributos | Moderado | Acessibilidade, Wi-Fi, etc. |

### 2. Proximidade (não controlável)
**Quão perto o negócio está de quem busca.**

- Não dá pra mudar a localização
- Mas: negócios com mais "proeminência" ranqueiam mais longe
- Negócios sem endereço público perdem competitividade em buscas "near me"

### 3. Proeminência (45%+ do peso)
**O quão conhecido e confiável o negócio é.**

| Sinal | Impacto | O que fazer |
|-------|---------|-------------|
| Avaliações no Google (quantidade) | #6 | Pedir review pra todo mundo |
| Avaliações recentes (velocidade) | #13, #20 | Ritmo constante, não rajadas |
| Nota média alta (4-5 estrelas) | #6 | Resolver problemas, não comprar review |
| Respostas do dono nas reviews | Importante | Responder TODAS, boas e ruins |
| Links de outros sites | #19, #25 | Ter links de sites locais relevantes |
| Citações NAP consistentes | #22, #23 | Nome, Endereço, Phone iguais em todo lugar |
| Autoridade do site | #72 | Site bem feito, rápido, com conteúdo |
| Volume de buscas pelo nome | #30 | Brand awareness (marketing) |

---

## PARTE 2: Os 10 Critérios do Diagnóstico GMB

Nossa skill `diagnostico-gmb` avalia exatamente o que o Google usa:

| # | Critério | Pontos | O que o Google vê | Como melhorar |
|---|----------|--------|-------------------|---------------|
| 1 | Foto de capa | 15 | Primeira impressão, destaque no Maps | Foto profissional, nítida, bem iluminada |
| 2 | Fotos do perfil | 15 | Engajamento, confiança | 10+ fotos: fachada, interior, equipe, produtos |
| 3 | Avaliações | 15 | Volume + qualidade + recência | Pedir review pra cada cliente satisfeito |
| 4 | Respostas do dono | 10 | Negócio ativo, se importa | Responder TODAS as reviews em até 24h |
| 5 | Telefone | 10 | Acessibilidade, confiança | Número local, clicável |
| 6 | Endereço | 10 | Legitimidade, NAP | Endereço real, consistente |
| 7 | Horário | 10 | Funcionamento real | Horário correto + horários especiais |
| 8 | Categoria | 5 | Relevância | Categoria primária correta + secundárias |
| 9 | Site | 5 | Autoridade, conversão | Site rápido, mobile, com NAP consistente |
| 10 | Redes sociais | 5 | Presença multi-canal | Links funcionais, perfil ativo |

**Classificação:**
- 0-30: VERMELHO → Oportunidade quente, venda fácil
- 31-60: AMARELO → Oportunidade clara, vale o esforço
- 61-80: OK → Melhorias pontuais
- 81-100: COMPLETO → Não prospectar

---

## PARTE 3: O Fluxo Completo de Entrega

### Etapa 1: Diagnóstico (o que falta)
```
O cliente pede → /diagnostico-gmb
  ↓
Analisa os 10 critérios
  ↓
Gera score 0-100
  ↓
Identifica o que falta
  ↓
Mostra resultado no chat
```

**O que entrega:** Score + lista do que falta + classificação
**Arquivo:** `marketing/diagnosticos/gmb-[nome]-[data].md`

### Etapa 2: Comparativo Visual (mostrar pro cliente)
```
/diagnostico-gmb → dados coletados
  ↓
/comparar-gmb → gera PNG 1080x1350
  ↓
Mostra "Antes vs Depois" com fotos reais
```

**O que entrega:** Imagem PNG pra mostrar em reunião ou WhatsApp
**Arquivo:** `marketing/conteudo/gmb-comparativo-[NOME]/instagram/gmb-comparativo.png`

### Etapa 3: Apresentação Profissional (fechar a venda)
```
/comparar-gmb → imagens prontas
  ↓
/apresentacao-gmb → gera PDF A4 6 páginas
  ↓
Mostra em reunião presencial
```

**O que entrega:** PDF completo com capa, diagnóstico, antes/depois, planos, CTA
**Arquivo:** `marketing/conteudo/[NOME]/instagram/apresentacao-gmb.pdf`

### Etapa 4: Proposta Comercial
```
Reunião aconteceu → /proposta
  ↓
Define solução baseada no problema
  ↓
Gera proposta com escopo, preço, prazo
```

**O que entrega:** Proposta em Markdown (ou PDF se pedir)
**Arquivo:** `saidas/proposta-[cliente]-[data].md`

### Etapa 5: Implementação
```
Cliente aprovou → Implementar
  ↓
Otimizar GMB (categorias, fotos, horários, etc.)
  ↓
Criar site se necessário
  ↓
Configurar avaliações e respostas
```

### Etapa 6: Acompanhamento
```
30 dias depois → /responder-avaliacoes
  ↓
Gerenciar reviews
  ↓
Manter perfil ativo
  ↓
Medir resultados
```

---

## PARTE 4: O Que Faz um Negócio Ficar #1

### Fundamentos (faça primeiro)
1. **Categoria primária correta** — O fator #1. "Barbearia" não é "Salão de Beleza"
2. **NAP consistente** — Nome, Endereço, Telefone iguais em TODOS os lugares
3. **Perfil completo** — Horário, descrição, serviços, atributos, tudo preenchido
4. **Verificação** — Conta verificada é pré-requisito

### Aceleradores (faça depois)
5. **Fotos profissionais** — 10+ fotos, adicionar novas toda semana
6. **Sistema de reviews** — Pedir review pra TODO cliente, ritmo constante
7. **Respostas** — Responder TODAS as reviews em até 24h
8. **Site local** — Página dedicada com NAP, mapa, serviços, palavras-chave locais

### Diferenciais (o que separa do konkurrência)
9. **Conteúdo local** — Blog/páginas com palavras-chave da cidade
10. **Links locais** — Links de jornais, associações, fornecedores locais
11. **Schema markup** — Dados estruturados LocalBusiness no site
12. **Google Posts** — Publicações semanais no perfil
13. **Q&A** — Responder perguntas, criar FAQ própria

### O que NÃO ajuda (mitos)
- ❌ Keyword stuffing no nome do negócio (pode causar suspensão)
- ❌ Geo-tagging de fotos (não afeta ranking)
- ❌ Keywords nas respostas de reviews (não afeta ranking)
- ❌ Quantidade de posts no GMB (não afeta ranking diretamente)
- ❌ Comprar reviews (risco de suspensão)

---

## PARTE 5: Conexão Skill → Entrega

| Skill | Momento | O que faz | O que entrega |
|-------|---------|-----------|---------------|
| `/diagnostico-gmb` | Início | Analisa 10 critérios, gera score | Markdown com diagnóstico |
| `/comparar-gmb` | Antes de reunião | Gera visual "Antes vs Depois" | PNG 1080x1350 |
| `/apresentacao-gmb` | Na reunião | Apresentação profissional | PDF A4 6 páginas |
| `/gmb-master` | Master | Roda as 3 etapas juntas | Tudo acima |
| `/proposta` | Pós-reunião | Proposta comercial | Markdown com escopo+preço |
| `/vender` | Vendas | Roteiro de abordagem | Script + Kit completo |
| `/responder-avaliacoes` | Pós-venda | Responde reviews do cliente | Texto pronto pra copiar |
| `/seo` | Pós-venda | Otimização completa SEO+GEO | Plano de ação |

---

## PARTE 6: Sequência Recomendada de Estudo

### Fase 1: Dominar GMB (1-2 semanas)
1. Entender os 10 critérios do diagnóstico
2. Saber explicar POR QUE cada critério importa
3. Rodar `/diagnostico-gmb` em 5+ negócios reais
4. Conseguir argumentar "por que seu Google não ranqueia"

### Fase 2: Dominar a Entrega (2-3 semanas)
1. Criar comparativo visual perfeito (`/comparar-gmb`)
2. Montar apresentação completa (`/apresentacao-gmb`)
3. Testar fluxo completo: diagnóstico → comparativo → apresentação → proposta
4. Conseguir entregar tudo em < 30 minutos por cliente

### Fase 3: Dominar a Venda (2-4 semanas)
1. Usar `/vender` em reunião real
2. Fechar primeiro cliente
3. Entregar resultado e cobrar
4. Pedir indicação

### Fase 4: Dominar Sites (2-4 semanas)
1. Criar landing page profissional pra negócios locais
2. Entender o que o Google espera de um site local (NAP, schema, velocidade)
3. Conseguir entregar site básico em 1-2 dias

---

## PARTE 7: Preços de Referência

| Produto | Preço | O que inclui |
|---------|-------|--------------|
| Presença no Google | R$297-497 | Otimização GMB completa + 30 dias de gestão |
| Landing Page | R$697-1.200 | Site 1 página, mobile, rápido, com NAP |
| Google + Site | R$697-890 | Bundle: GMB + Landing Page |
| Projeto completo | R$1.500-5.000 | GMB + Site + SEO + Gestão mensal |
| Social mensal | R$197/mês | **NÃO priorizar** — relação esforço/receita ruim |

---

*Documento gerado em 11/09/2026. Atualizar conforme novas descobertas.*
