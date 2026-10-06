# Diagnóstico de Vazamento de Vendas — Terminal Materiais de Construção

**Cliente (teste em negociação):** Terminal Materiais de Construção
**Local:** R. Pref. Campos Mello, 101 — Nova Rússia, Ponta Grossa - PR
**Data:** 2026-10-05
**Elaborado por:** APSIDE (Guilherme)

---

## 1. Fontes do diagnóstico

| Fonte | O que foi verificado |
|---|---|
| **Entrevista com o operador** (05/10/2026) | Como a venda acontece: canal, etapas, volume diário, ticket médio |
| **Auditoria de site** | `terminalconstrucao.com.br` visitado em 05/10/2026 — estrutura, template, CTAs, rastreio |
| **Verificação do Google Meu Negócio** | Perfil público do Terminal: nota, avaliações, fotos, resposta a avaliações |
| **Auditoria de concorrentes (Google/websearch)** | Nota, nº de avaliações, site, presença de WhatsApp de orçamento dos concorrentes em Ponta Grossa |
| **Avaliação pública do cliente** | Avaliação de 1★ no GMB do próprio Terminal relatando WhatsApp sem resposta |

Nenhum número deste diagnóstico é estimativa genérica de mercado. Onde houve premissa, ela está declarada.

---

## 2. Como a venda acontece hoje (funil real)

Levantado na entrevista (05/10/2026):

```
Descoberta (Google ou promoção — origem NÃO medida)
   ↓  10 contatos/dia via WhatsApp
Orçamento respondido no WhatsApp (não medido — etapa invisível)
   ↓
Fechamento no WhatsApp: 2/dia (20%)
   ↓
Ticket médio: R$ 600
```

- **10 atendimentos/dia**, **~2 fechamentos/dia**, ticket médio **R$ 600**.
- Conversão geral: **20%** — 8 de cada 10 contatos não fecham.
- Faturamento atual estimado pelo canal: 2 × R$ 600 × 26 dias ≈ **R$ 31.200/mês**.
- Canal pago: Mercado Livre cobra **5%** de taxa (dado do operador) — venda fechada direto no WhatsApp não paga essa taxa.
- **O operador não sabe a origem do lead**: "às vezes por conta de promoção, às vezes por conta do Google, não tem certeza" (entrevista).

---

## 3. Evidência campo a campo

| Verificação | Achado | Impacto na venda |
|---|---|---|
| **Origem do lead** (entrevista) | Operador não consegue distinguir promoção × Google | Decisão de investimento no escuro; nenhum canal é medido ou cortado |
| **Etapa "orçamento → fechamento"** (entrevista) | Não há registro do que acontece com os 8 que não fecham | Vazamento invisível: ninguém sabe se morreu por preço, demora ou concorrência |
| **Atendimento no WhatsApp** (entrevista + avaliação pública GMB) | Avaliação de cliente: *"chamei no watts, e não respondem, dois dias aguardando"*. Resposta do próprio proprietário reconhece: *"devido ao grande número de mensagens recebidas podemos ter passado batido"* | Lead esfria sozinho; o volume de mensagens num único canal de atendimento é gargalo reconhecido pela própria loja |
| **Site** (auditoria 05/10) | Template Joomla © 2017 ("JD Atlanta Joomla Templates"), catálogo sem preços, sem CTA de orçamento por produto, e-mail Yahoo, sem rastreio (sem GA4/UTM), sem páginas por público | Quem pesquisa, cai e não tem caminho guiado de orçamento; site não converte nem mede |
| **Google Meu Negócio** (verificação) | 4,5★ · 222 avaliações, fotos recentes, resposta a avaliações — **ponto forte** | Base sólida; falta transformar isso em origem medida de lead |
| **Concorrência** (Google) | Antunes — mesmo bairro (Nova Rússia) — 314 avaliações e orçamento ativo via WhatsApp/Instagram | Disputa lateral no próprio bairro, com mecânica de orçamento mais ativa |

---

## 4. Concorrentes reais (Google, 05/10/2026)

| Concorrente (Ponta Grossa) | Google | O que já faz |
|---|---|---|
| **Antunes Materiais de Construção** — Nova Rússia (seu bairro) | 4,5★ · 314 avaliações | Site com catálogo, "mande mensagem no WhatsApp e peça seu orçamento", promoções ativas no Instagram/Facebook (6.200 seguidores) |
| **Prado Materiais de Construção** | 4,9★ · 67 avaliações (dado do site) | Site moderno, "Faça seu orçamento" com WhatsApp direto, 15+ anos, 75k clientes |
| **LGO Materiais de Construção** — Oficinas | s/ nota verificada | Site moderno, dois WhatsApps de orçamento, posicionamento consultivo |
| **Contorno Materiais de Construção** | 4,2★ · 5 avaliações | Aparece nos "lugares também pesquisados" do próprio perfil do Terminal |
| **Terminal Materiais de Construção** (destaque) | **4,5★ · 222 avaliações** | **Site de 2017, sem orçamento guiado, origem do lead não medida, sem follow-up de orçamento** |

**Leitura:** o Terminal tem a 2ª maior base de avaliações da comparação e nota igual ao líder. O déficit não é reputação — é **processo**: os concorrentes capturam e respondem orçamento com trilha ativa; o Terminal recebe 10 contatos/dia num volume que o próprio dono reconhece não dar conta de acompanhar.

---

## 5. Vazamentos (cada um com fonte)

### Vazamento 1 — Origem do lead não medida
- **Fonte:** entrevista com o operador (05/10).
- Sem saber se o lead vem do Google, de promoção ou de indicação, a loja não consegue decidir onde pôr dinheiro nem onde cortar. Toda decisão de marketing hoje é chute.

### Vazamento 2 — WhatsApp sem trilha de orçamento
- **Fonte:** entrevista (10 contatos → 2 vendas = 8 perdidos/dia) + avaliação pública no GMB ("dois dias aguardando") + resposta do proprietário ("grande número de mensagens").
- 8 contatos/dia não fecham e **nenhum tem follow-up registrado**. Não existe toque de 24h/72h, não existe registro do motivo da perda, não existe reativação.

### Vazamento 3 — Site folheto
- **Fonte:** auditoria de `terminalconstrucao.com.br` (05/10).
- Template © 2017, catálogo sem preço nem orçamento por produto, sem segmentação por público, sem rastreio. O site existe mas não participa do funil — e não é possível provar que ele traz (ou não traz) um real.

---

## 6. Quantificação (com premissa honesta)

**Premissa 1 — capacidade ociosa:** a loja tem equipe, estoque e entrega; o gargalo declarado é o atendimento no WhatsApp, não a capacidade física de vender. Se a operação estiver no limite de entrega, o número abaixo cai — a medição dos primeiros 30 dias serve justamente para validar isso.

**Premissa 2 — recuperação conservadora:** dos 8 contatos que não fecham, parte é pesquisa de preço e não é recuperável. A conta assume a recuperação de **1 venda adicional por dia** (1/8 dos perdidos), não a recuperação total.

| Linha | Valor |
|---|---|
| Contatos/dia | 10 |
| Fecham hoje | 2 (20%) |
| Não fecham | 8 |
| Recuperação conservadora | +1 venda/dia |
| Ticket médio | R$ 600 |
| **Ganho por dia** | **+R$ 600** |
| **Ganho por mês (26 dias)** | **+R$ 15.600** |
| Teto plausível (+3/dia, 3/8 dos perdidos) | +R$ 46.800/mês |

**Estimativa, marcada como tal:** o potencial cheio (8/dia × R$ 600 × 26 = R$ 124.800/mês de intenção) é o teto teórico e **não** é a promessa — a conta acima é a base do plano.

---

## 7. Conclusão (sem virar nome de serviço)

O Terminal já tem reputação e volume de contato. O que falta é **processo**: saber de onde vem cada lead, não deixar orçamento morrer no volume de mensagens, e dar ao site um papel no funil. O resultado esperado é mais fechamentos por dia com o mesmo tráfego — dito na proposta como **"recuperar 1 venda por dia"**, nunca como nome de serviço.

---

## 8. Escopo e preço (decisão por cliente — skill `proposta-kelvin`, passo 4)

**Gargalo identificado:** processamento (10 pedidos/dia chegam; 8 escorrem), não
captação. Diferente da ANG (que tinha 0% de leads do Google e pediu captação com
3 LPs), aqui a porta já está aberta — o núcleo da solução é **automação de
WhatsApp**, não múltiplas landing pages.

**Peças escolhidas por fechar cada vazamento do passo 7:**
1. Pré-qualificação automática (vazamento 2)
2. Follow-up automático de orçamento (vazamento 2)
3. Reativação automática de base (vazamento 2)
4. Rastreio de origem por link (vazamento 1)
5. Página única de orçamento (vazamento 3 — substitui as 3 LPs da ANG; LPs
   por público viram fase 2, condicionadas a busca local por público)
6. GMB ativo (base de 222 avaliações)
7. Medição por venda (transversal)

**Nível de preço:** **intermediário (R$ 10.000)** — a escada define nível pelo
escopo; escopo com automação e integração de WhatsApp é o nível intermediário
("integrações / CRM"). Base (R$ 5 mil) seria sem automação — e é a automação
que fecha o vazamento. Alto (R$ 15 mil) é CRM sob medida, sem necessidade.

**Valores (decisão do operador, 05/10/2026):**
- **Setup: R$ 10.000** (nível intermediário)
- **Operação: R$ 1.000/mês** — acima do piso de R$ 500 da escada, por ter
  3 automações vivas em operação
- **0% sobre vendas** (regra da escada, enquanto o operador for novo no mercado)
- Âncora: setup < 2/3 do que o problema custa por mês (R$ 15.600/mês) — payback
  conservador ~17 dias.

**Por que não as 3 LPs da ANG:** no Terminal a porta de entrada já existe
(10 pedidos/dia via Google/promoção); criar 3 páginas novas não recupera nenhum
dos 8 que escorrem por dia. A peça de conversão aqui é a automação; a página de
orçamento única basta como destino do tráfego atual.

---

## 9. Encaminhamento

Apresentação de 15 slides gerada em `clientes/terminal-ponta-grossa/vendas/apresentacao-proposta-terminal-ponta-grossa.html`.
Preços conforme `vendas/escada-precos.md` › SETUP POR NÍVEL + OPERAÇÃO MENSAL
(nível intermediário R$ 10.000 + R$ 1.000/mês, **sem % sobre vendas** — decisão
do operador em 05/10/2026).
