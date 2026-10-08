# Diagnóstico de vazamento — AgroTerra Contabilidade

> **ATENÇÃO — SIMULAÇÃO.** Teste de fluxo da skill `proposta-kelvin` com cliente
> fictício (`clientes/TESTE - EMPRESA X/`). Dados de funil, operação e meta são
> **fictícios, cedidos pelo operador em 08/10/2026** e marcados como simulados.
> Dados de GMB, Instagram e concorrentes são **reais** (verificados em 08/10/2026).
> Este documento não vira proposta real nem case.

- **Cliente simulado:** AgroTerra Contabilidade — Santa Paula, Ponta Grossa/PR
- **Data:** 08/10/2026
- **Roteiro da entrevista:** `vendas/validacao-contadores.md` (bloco de funil, capacidade, meta, cliente final e decisor — 10 perguntas complementares)
- **Decisor:** sócio financeiro (reunião de 20 min, material entregue com antecedência — confirmado)

---

## 1. Como a venda acontece hoje (funil da planilha — simulado)

| Etapa | WhatsApp | IG + Google | Indicação | Rede fornecedores | Total |
|---|---|---|---|---|---|
| Contatos/mês | 25 | 12 | 6 | 4 | **47** |
| Viram cliente/mês | 1,5 | 0,5 | 1,5 | 0,5 | **4** |
| Conversão do canal | **6,0%** | **4,2%** | **25,0%** | **12,5%** | **8,5%** |

- **43 contatos/mês não fecham** e não existem registro de follow-up.
- **Primeira resposta no WhatsApp: 5,5 h de média.** No expediente a sócia
  responde em até 2 h; noite e fim de semana só são vistos na manhã seguinte
  (puxa a média para cima).
- Origem declarada na 1ª entrevista (60/25/15) foi substituída pelos números da
  planilha (IG+Google = 26%, não 15%) — **vale a planilha**.

## 2. Operação, capacidade e meta (simulado)

| Item | Valor |
|---|---|
| Equipe | 4 pessoas na operação (sócia fora da conta) |
| Capacidade | 20 clientes/pessoa → **80 clientes** |
| Carteira atual | **70 clientes** (1ª entrevista dizia 85 — prevalece a planilha) |
| Espaço livre | **+10 clientes** |
| Churn | **2,5% a.m.** (~1,75 clientezinho/mês; ~21/ano) |
| Captação líquida | ~+2 clientes/mês → **espaço esgota no mês 5** |
| Meta | **90 clientes em 12 meses** (chega a 90 no mês 11) |
| Contratação | precisa de +1 pessoa **antes do mês 5** (já planejado pelo cliente) |

## 3. Cliente final e foco

- **Perfil desejado: PJ** (honorário recorrente, escopo claro, gestão organizada).
  Holdings interessam mas exigem estrutura específica.
- Faixa-alvo da base: 14 dos 70 clientes faturam R$ 1–10 mi com margem rastreável.
- Termos de busca (hipótese do cliente, a validar com Keyword Planner):
  "contador para produtor rural", "contabilidade agro", "contador para fazenda",
  "imposto produtor rural".
- Percepção de indicação (frase inventada para o caso, refazer com 5–10 clientes):
  *"Eles cuidam dos impostos e da parte chata, e a gente não precisa ficar
  correndo atrás."*

## 4. Dinheiro (base do ticket)

| Métrica | Valor | Fonte |
|---|---|---|
| Receita média por cliente | R$ 7.800/ano | entrevista |
| Margem de contribuição | 35% | declarada pelo cliente (setor contábil: 30–40%) |
| Contribuição por cliente | **R$ 2.730/ano** (R$ 227,50/mês) | cálculo |
| Churn 2,5% a.m. | ~21 clientes/ano → **R$ 57.330/ano de contribuição perdida** | cálculo |
| Ferramentas pagas hoje | R$ 690/mês | entrevista |

---

## 5. Vazamentos (cada um com fonte)

| # | Vazamento | Evidência | Fonte |
|---|---|---|---|
| 1 | **Digital que não converte** | IG+Google = 26% dos contatos mas só **4,2%** de conversão (pior canal); GMB **sem website cadastrado** | planilha do funil + verificação do GMB (08/10/2026) |
| 2 | **WhatsApp que dorme** | **5,5 h** de primeira resposta; noite/fim de semana só na manhã seguinte | entrevista com a operação (08/10/2026) |
| 3 | **43 contatos/mês sem trilha** | conversão geral 8,5%, sem registro do que acontece com quem não fecha | planilha do funil (08/10/2026) |

**O que está bom (não mexer):** nota 5,0 e conteúdo no Instagram (30 posts,
paleta consistente, 7 highlights); indicação converte 25% — o mercado já confia.

## 6. Concorrentes reais (Google Maps, Ponta Grossa — coleta Apify 08/10/2026)

| Escritório | Nota | Avaliações | Site no GMB | Bairro |
|---|---|---|---|---|
| BIANCO Contabilidade | 5,0 | **313** | sim | Oficinas |
| Gerencie Fácil Contabilidade | 5,0 | 137 | **não** | Nova Rússia |
| Garcia Contabilidade | 5,0 | 124 | sim | Cará-Cará |
| KSB Contabilidade e Consultoria | 5,0 | 119 | sim | Órfãs |
| Partenari Contabilidade | 5,0 | 84 | sim | Nova Rússia |
| Castanho Contabilidade | 5,0 | 76 | sim | Centro |
| LCI Contabilidade | 4,9 | 68 | sim | Jardim Carvalho |
| **AgroTerra (cliente)** | **5,0** | **13** | **não** | **Santa Paula** |

- Mesma nota do topo, mas **13 avaliações contra 313 do líder** (24×).
- **6 dos 7 maiores têm website** — AgroTerra não tem nenhum no perfil.
- Dados brutos: `dados/concorrentes-ponta-grossa-2026-10-08.json`.

## 7. Quantificação (premissa declarada)

**Ganho do funil (quando calibrado):**
- Conversão 8,5% → 12% (conservador — ainda 13 pp abaixo dos 25% da própria indicação): 47 × 3,5 p.p. = **+1,645 cliente/mês**.
- Contribuição por cliente: R$ 7.800/ano × 35% = R$ 2.730/ano (**R$ 227,50/mês**).
- Ganho do funil: +1,645 cliente/mês × R$ 227,50 = **+R$ 374/mês** (≈ R$ 4,5 mil/ano).

**Premissas honestas (declaradas no slide):**
1. Ritmo pleno só após calibração (~90 dias); contando do zero, a contribuição
   acumulada cobre o setup por volta do **7º mês**.
2. **Capacidade:** +10 vagas. Sem a contratação de +1 pessoa (planejada para
   antes do mês 5), o ganho trava no mês 5.
3. Margem 35% declarada pelo próprio cliente.
4. Dados de funil e operação são **simulados**; validar com 30 dias de medição real.

**Payback (contando do zero):** a contribuição acumulada (+1,6 cliente/mês ×
R$ 227,50/mês por cliente, margem 35%) cobre o setup de R$ 10.000 por volta do
**7º mês**.

## 8. Decisão de gargalo e preço (passo 4 da skill)

1. **Gargalo: CAPTAÇÃO** — 47 contatos chegam (volume existe), mas o digital
   converte 4,2% e não há follow-up dos 43 que caem. O processamento secundário
   (resposta de 5,5 h) entra como camada de eficiência, não como núcleo.
2. **Peças do zero pro gargalo** (cada uma fecha um vazamento da §5):
   - **01 GMB completo** (site anexado, fotos, posts) → fecha #1
   - **02 Landing page "contador para produtor rural PJ"** → fecha #1 (4,2%)
   - **03 WhatsApp com 1ª resposta < 1 min** (auto-resposta + triagem) → fecha #2
   - **04 Follow-up em 7 dias nos 43 contatos/mês** → fecha #3
3. **Landing pages:** **uma só** — público único (produtor rural PJ), porta de
   captação por Google/Instagram. Não são 3 LPs.
4. **Preço: nível intermediário — R$ 10.000 de setup + R$ 500/mês.**
   - Por quê: o escopo inclui **automação/integração de WhatsApp** (nível
     intermediário em `vendas/escada-precos.md`); peças padrão sem automação
     seria nível base (R$ 5.000), e CRM sob medida (R$ 15.000) não é necessário.
   - Ancoragem: setup R$ 10.000 ≈ **2 meses do que o problema custa**
     (churn R$ 4.777/mês + funil não calibrado R$ 374/mês ≈ R$ 5,2 mil/mês).
   - **NUNCA % sobre vendas.** O fixo de R$ 800–1.200/mês falado pelo contador
     é da tese Contab OS (palco 3) e **não se aplica** a esta proposta.

## 9. Conclusão (sem nome de serviço)

O escritório não sofre de reputação — sofre de **encontrabilidade e velocidade**.
A nota 5,0 com 13 avaliações prova qualidade; os 313 do líder provam que
qualidade sozinha não é encontrada. Enquanto o digital converter 4,2%, o
WhatsApp levar 5,5 h e os 43 contatos caírem sem registro, a meta de 90 clientes
esbarra na capacidade no mês 5 — não na procura.

**Próximo passo:** apresentação de 16 slides (`vendas/apresentacao-proposta-agroterra.html`)
para o sócio financeiro, com material entregue 24 h antes.
