# Varredura de vertical — 4 nichos candidatos

**Data:** 19/10/2026 · **Base:** Google Maps via Apify · **Região:** Ponta Grossa + Castro (PR)
**Dados:** 210 lugares coletados, 210 ativos, 0 fechados (58 obras / 49 imobiliárias / 44 esquadrias / 59 oficinas)
**Fonte dos filtros:** `memoria/estrategia.md` (aprendidos na validação contábil encerrada 15/10)

## Ranking final

| # | Vertical | Nota | F1 busca | F2 bolso | F3 dor | F4 braga |
|---|----------|------|----------|----------|--------|----------|
| **1º** | **Reformas/obras** (engenharia, marcenaria, construtora) | **8,5** | 10 | 10 | 7 | 7 |
| 2º | Esquadrias / portas de aço / alumínio | 7,8 | 10 | 10 | 7 | 4 |
| 2º | Oficinas especializadas (mecânica, funilaria, suspensão) | 7,8 | 10 | 7 | 7 | 7 |
| 4º | Imobiliárias / administradoras | 6,3 | 10 | 10 | 4 | 1 |

**Escala:** cada filtro 1-10 · 6,5+ = passa · 8+ = forte

## Leitura filtro a filtro

### F1 — Depende de ser encontrado (todos passaram)
Todos os 4 nichos têm busca ativa no Google (mediana de avaliações por negócio entre 11 e 59). Oficinas e imobiliárias são as mais "buscadas" (81% e 92% com 10+ reviews). Diferente da contabilidade, que morreu aqui.

### F2 — Tem bolso
- **Obras / esquadrias / imobiliárias (10):** ticket de obra ou comissão cobre o setup R$ 5.000
- **Oficinas (7):** ticket por serviço menor (funilaria/suspensão), mas somam — e o valor do carro faz o dono aceitar preço de serviço bem feito

### F3 — Dor de aquisição visível (presença fraca = sem site ou <10 fotos)
- **Obras 69%** e **oficinas 63%** e **esquadrias 59%** → maioria com presença ruim, problema é venda
- **Imobiliárias 37%** → a maior parte já tem site e estrutura

### F4 — Braga justa (proxy: % sem site)
- **Oficinas 58% sem site** → melhor cenário pra entrada
- **Obras 53% sem site** → segundo melhor, com nota 100 no topo da lista
- **Esquadrias 36%** → intermediário
- **Imobiliárias 4% sem site** → quase todas já têm site (portal/anúncio paga). **Pior nicho pra entrada — saturado em prova social (mediana 59 reviews) e com agência já instalada.**

## Conclusão

**1º lugar — Reformas/obras:** único que passa bem nos 4 filtros simultaneamente. Ticket alto (obra de marcenaria/engenharia), busca ativa, 53% sem site, 9% de perfis não reivindicados. Diferencial prático: o dono da marcenaria/construtora é dono, decide rápido, e quem procura "marcenaria em Ponta Grossa" já quer comprar.

**Empate 2º:**
- **Esquadrias** tem o mesmo comprador da obra (encaixa como sub-vertical da 1ª, mesma abordagem) — mas 4 no braga (mais site instalado)
- **Oficinas** tem o melhor terreno de entrada (58% sem site, 81% com 10+ reviews = gente buscando) e o maior volume de prospects (59), só perde no ticket

**4º — Imobiliárias:** descartar como porta de entrada. Não é "braga justa", é mercado já estruturado.

## Top prospects — nota ≥ 70 (validação manual antes de qualquer zap)

> Atenção: nota 100 = perfil possivelmente não reivindicado + sem site + 1 foto. Confirmar no Google se o negócio está ativo antes de abordar (perfil abandonado falso não aparece como fechado).

### Reformas/obras
| Nota | Negócio | Tel | Rev | Fotos | Site | Reivindicado |
|---|---|---|---|---|---|---|
| 100 | Nogueira Engenharia | 42 3223-4283 | 1 | 1 | não | não |
| 100 | MA marcenaria e móveis rústicos | 42 98421-3850 | 1 | 1 | não | não |
| 90 | Marcenaria Lenharte | 42 99996-3583 | 4 | 14 | não | não |
| 90 | Marcenaria Vila Velha | 42 99961-2533 | 5 | 3 | não | não |
| 80 | DWG Construção e Reformas | 42 99957-6237 | 3 | 5 | não | sim |
| 80 | Construções e Reformas-Ponta Grossa | 42 99950-5339 | 1 | 1 | não | sim |
| 80 | Construtora Sobre a Rocha | 42 99816-4400 | 2 | 3 | não | sim |
| 80 | GJJ Engenharia e Construções | 42 99828-2829 | 0 | 7 | não | sim |
| 80 | Ponta Grossa Engenharia LTDA | 42 3235-1818 | 4 | 1 | não | sim |
| 80 | LLA Serviços de Engenharia | 42 99859-0198 | 2 | 4 | não | sim |
| 80 | Ávila Marceneiro (Luiz de Ávila) | 42 99937-4574 | 2 | 1 | não | sim |
| 70 | Prado Construções e Reformas | 42 98412-8847 | 1 | 10 | não | sim |

### Oficinas especializadas
| Nota | Negócio | Tel | Rev | Fotos | Site | Reivindicado |
|---|---|---|---|---|---|---|
| 100 | Marquinhos Lataria e Pintura | 42 99957-9385 | 1 | 1 | não | não |
| 100 | Suspense Pneus | 42 3225-6758 | 1 | 1 | não | não |
| 83 | Oficina Mecânica Paulo Gorski | 42 3243-4219 | 59 | 5 | não | não |
| 80 | Estacionamento Campos Lataria e Pintura | 42 99119-8027 | 4 | 7 | não | sim |
| 80 | LR Lataria e Pintura | 42 99966-8266 | 3 | 2 | não | sim |
| 80 | Oficina de Funilaria e Pintura Barbosa | 42 99945-9208 | 3 | 9 | não | sim |
| 70 | Oficina Mecânica M-Pró | 42 99819-1083 | 5 | 9 | não | sim |
| 70 | Bart Suspensões | 42 99910-1220 | 19 | 27 | não | não |
| 70 | Nvk Suspensões | 42 98423-8498 | 3 | 18 | não | sim |

### Esquadrias / portas de aço
| Nota | Negócio | Tel | Rev | Fotos | Site | Reivindicado |
|---|---|---|---|---|---|---|
| 100 | Alumínio e Ferro Metalbox | 42 3223-3633 | 1 | 1 | não | não |
| 100 | Serralheria e Esquadrias Silferro | 42 3226-7561 | 4 | 1 | não | não |
| 100 | Fábrica de Esquadrias Urbano | 42 99981-4341 | 1 | 1 | não | não |
| 90 | Mazur Vidros e Esquadrias | 42 99815-1703 | 4 | 17 | não | não |
| 80 | PGPORTAS | 42 99801-3965 | 4 | 0 | não | sim |
| 80 | ClasseA Esquadrias & Vidraçaria | 42 99993-6995 | 1 | 1 | não | sim |
| 80 | Aluponta Esquadrias de Alumínio | 42 3224-4066 | 3 | 8 | não | sim |
| 60 | Tecnoportas Ponta Grossa | 42 99904-0457 | 11 | 13 | não | sim |
| 60 | Esquadrias Abba | 42 3236-4003 | 7 | 10 | não | sim |
| 60 | MB Esquadrias | 42 99917-8535 | 11 | 12 | não | sim |

### Imobiliárias (só pra registro — não recomendado)
| Nota | Negócio | Tel | Rev | Fotos | Site |
|---|---|---|---|---|---|
| 100 | BG Imóveis (Castro) | 42 3232-0915 | 3 | 1 | não |
| 70 | Appeldorn Negócios Imobiliários (Castro) | 42 99861-0038 | 12 | 6 | não |

## Como os números foram calculados

- **Score de oportunidade por negócio (0-100):** sem site +35 · fotos <10 +25 / <20 +15 / <50 +5 · avaliações <5 +20 / <20 +10 / <100 +3 · não reivindicado +20 · temp. fechado −20
- **F1 busca:** % de negócios do nicho com 10+ avaliações (cortes 35%/15%/5%)
- **F2 bolso:** ticket médio do nicho (qualitativo, avaliado: obra milhares~dezenas de mil, oficina centenas~milhares)
- **F3 dor:** % sem site OU <10 fotos (cortes 70%/50%/30%)
- **F4 braga:** % sem site (cortes 70%/45%/25%)
- **Nota da vertical:** média simples dos 4 filtros
- **Reprodutível:** `node scripts/apify/analisar-vertical.cjs` · dados brutos: `scripts/apify/output-v-*.json` · resultado: `scripts/apify/vertical-resultado.json`
