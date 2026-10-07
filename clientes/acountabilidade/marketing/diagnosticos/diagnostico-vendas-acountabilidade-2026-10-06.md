# Diagnóstico de Vazamento de Vendas — Acountabilidade (Ponta Grossa/PR)

**Data:** 2026-10-06
**Cliente:** Acountabilidade — contabilidade para prestadores de serviços (Ponta Grossa, PR)
**Documento:** fonte de dados do deck `clientes/acountabilidade/vendas/apresentacao-proposta-acountabilidade.html`
**Gate:** envio ao cliente só após OK do operador (enviar = ação externa).

## Fontes

| Fonte | O que trouxe |
|---|---|
| Entrevista com o operador / time comercial (06/10/2026) | Funil por etapa, tempo de resposta, dor pós-proposta, ICP, capacidade |
| Verificação de campo no Google Meu Negócio | 1 foto de fachada, 57 avaliações, nota 5,0 |
| Auditoria de concorrentes (Apify `compass~crawler-google-places`, 06/10/2026) | Nota, nº de avaliações, fotos, site e bairro dos concorrentes |
| Relato do operador sobre mídia | Google Ads (CPC alto), Meta Ads (volume, baixa qualificação), site só com tabela de planos |

Nenhum número abaixo é estimativa genérica de mercado. Onde há cálculo projetado, a
premissa está declarada na seção "Quantificação".

## 1. O negócio

- **ICP:** prestadores de serviços (TI, médicos) — **não** MEI, **não** comércio/indústria.
- **Planos:** Básico R$ 349 · Padrão R$ 449 · Pro · Premium.
- **MRR médio:** R$ 460/cliente.
- **Novos contratos:** 8–10 empresas/mês (~R$ 4.000 de MRR novo/mês, fora serviços avulsos).
- **Capacidade da equipe técnica/fiscal:** absorver até **25 novos clientes/mês**.

## 2. Funil atual (dados da operação)

| Etapa | Volume | Taxa |
|---|---|---|
| Leads recebidos (WhatsApp / formulário) | 100 | 100% |
| Qualificação no WhatsApp (nicho, faturamento, sócios) | — | — |
| Reunião de diagnóstico tributário (20 min, Google Meet) | 35 | 35% |
| Propostas formais enviadas | 20 | 57% dos diagnósticos |
| Contratos fechados | 8 | 40% das propostas · **8% do total** |

**Perdas por etapa:** 65 leads sem reunião · 15 diagnósticos sem proposta · 12 propostas sem fechamento.

## 3. Concorrentes reais (Google, auditado 06/10/2026)

| Concorrente | Google | Fotos | Site / observação | Bairro |
|---|---|---|---|---|
| Bianco Contabilidade | 5,0 ★ · 313 avaliações | 18 | biancocontabilidade.com.br | Oficinas |
| Garcia Contabilidade | 5,0 ★ · 124 avaliações | 13 | garciacont.com.br | Centro |
| KSB Consultoria e Contabilidade | 5,0 ★ · 119 avaliações | 13 | ksbconsultoria.com.br | Órfãs |
| TCM Contabilidade | 5,0 ★ · 102 avaliações | 14 | tcmcontabilidade.com.br (blog + conteúdo) | Uvaranas |
| Partenari Contabilidade | 5,0 ★ · 84 avaliações | 10 | partenari.com | Nova Rússia |
| Castanho Contabilidade | 5,0 ★ · 76 avaliações | 26 | castanhocontabilidade.com.br | Centro |
| LCI Contabilidade | 4,9 ★ · 68 avaliações | 17 | lcicontabil.com.br (100% digital, foco em serviços) | Jardim Carvalho |
| Senger Contabilidade | 5,0 ★ · 33 avaliações | — | sengercontabilidade.com.br | Centro |
| **Acountabilidade (cliente)** | **5,0 ★ · 57 avaliações** (informado pelo operador) | **1** | site só com tabela de planos | Ponta Grossa |

**Leitura:** ninguém na lista tem nota fraca — a disputa não é por estrela, é por
presença (fotos, conteúdo, velocidade). O cliente tem prova social forte
(57 avaliações 5,0) e a usa quase nada (1 foto, sem posts).

## 4. Vazamentos (cada um com fonte)

| # | Vazamento | O que acontece | Fonte |
|---|---|---|---|
| V1 | Primeiro contato lento | Resposta no WhatsApp acima de 15 min no primeiro contato; o lead fecha com quem responde primeiro | Entrevista com o time comercial |
| V2 | Proposta órfã | Depois do envio da proposta o lead "some" no WhatsApp — falta follow-up rápido e estruturado | Entrevista (12 propostas/mês sem toque) |
| V3 | Leads fora do ICP | MEI e comércio/indústria entram na fila e consomem tempo de qualificação | Entrevista — fila de atendimento |
| V4 | Comparação com R$ 89 | Cliente compara o preço da consultoria com contabilidade automatizada de R$ 89/mês, sem perceber o valor | Entrevista — objeção recorrente |
| V5 | Mídia cara e morna | Google Ads com CPC alto; Meta Ads gera volume com baixa qualificação | Dado de mídia do operador |
| V6 | Prova social dormindo | Perfil do Google com 1 foto e sem posts apesar de 57 avaliações 5,0 | Verificação de campo no GMB |

## 5. Quantificação

**Premissa honesta:** a conta usa **apenas a capacidade ociosa que o operador declarou**
(25 clientes/mês de capacidade, 8–10 usados). Não projeta expansão de equipe, aumento
de preço nem ganho de qualidade de mídia.

| Linha | Valor |
|---|---|
| Contratos fechados hoje | 8/mês (8% dos 100 leads) |
| Capacidade da equipe | 25/mês |
| Vagas ociosas | 15/mês |
| MRR por contrato | R$ 460 |
| **Receita que cabe mas não nasce** | **R$ 6.900/mês · R$ 82.800/ano** |
| Cenário conservador (só 40% das vagas recuperáveis) | R$ 2.760/mês · R$ 33.120/ano |

Cada ponto percentual de conversão final ganho vale **1 contrato/mês = R$ 460 de MRR
novo (R$ 5.520/ano)**.

## 6. Gargalo e decisão de escopo (passo 4 da skill)

1. **Gargalo: processamento, não captação.** 100 leads/mês entram (Ads + indicação) —
   volume existe. O funil escorre no meio: resposta lenta (V1), filtro manual de ICP
   (V3), proposta sem continuidade (V2). O gargalo define o pacote: **automação e
   qualificação de atendimento**, não mais peças de captação.
2. **Peças montadas do zero, cada uma fecha um vazamento do slide 7:**
   01 resposta instantânea (V1) · 02 qualificação por ICP (V3) · 03 agendamento do
   diagnóstico (V1) · 04 follow-up de proposta (V2) · 05 CRM com funil (V2 + controle)
   · 06 página de qualificação sem tabela de preços (V4/V5) · 07 Google Meu Negócio
   ativo (V6). Se a peça não fecha vazamento, não entra.
3. **Landing pages não são padrão 3:** o gargalo é processamento, não captação por
   público — entra **uma** página de qualificação, não três sites por segmento.
4. **Preço: nível intermediário — R$ 10.000 de setup + R$ 1.000/mês.**
   - Por quê: o escopo pede **integração de WhatsApp (API/Evolution) + CRM com funil +
     automações de follow-up** — é exatamente o nível intermediário de
     `vendas/escada-precos.md` › "SETUP POR NÍVEL". Não há CRM sob medida (nível alto,
     R$ 15.000) nem só peças padrão (nível base, R$ 5.000).
   - Mensalidade R$ 1.000/mês = 10% do setup, acima do piso de R$ 500/mês da escada,
     proporcional ao porte (100 leads/mês, time comercial dedicado).
   - **Ancoragem:** setup R$ 10.000 < 2 meses do que o problema custa
     (R$ 6.900/mês → R$ 13.800 em 2 meses).
   - **Nunca % sobre vendas** (regra vigente da escada).
5. **Valor reaproveitado de deck anterior?** Não. Nível decidido acima pelo escopo
   deste cliente (correção do erro registrado em 05/10 na Terminal).

## 7. Conclusão (sem virar nome de serviço)

A Acountabilidade não sofre de falta de procura nem de credibilidade: tem nota 5,0 com
57 avaliações, 100 leads/mês e 25 clientes/mês de capacidade. O que falta é **sistema
de atendimento** — responder na hora, filtrar o lead certo e não deixar proposta
parada. Resolvido isso, o ganho é receita imediata usando capacidade que já existe.
