# Prospects qualificados — Estética Ponta Grossa (validado pelo operador)

**Data:** 19/10/2026 · **Validação manual do operador** (10 selecionados → 9 após remoção)
**Fonte:** `scripts/apify/output-v-estetica.json` + check manual
**Status:** validado · próximo passo = abordagem WhatsApp (gate do operador)

## Fila validada

| # | Negócio | Tel | Bairro | Rev | Fotos | Site | Ads | Ângulo de abordagem |
|---|---|---|---|---|---|---|---|---|
| 7 | Centro Estético Sculpt | 42 98418-3750 | Centro | 110 | 19 | não | sem ad | Reputação jogada fora: 110 reviews invisíveis no Google |
| 13 | Dra Fernanda Milan | 42 99914-9149 | Neves | 61 | 14 | tem | sem ad | Google não é canal — mostrar busca que existe e ela não capta |
| 18 | Estética Flor da Pele | 42 98434-6370 | Órfãs | 41 | 65 | biosite (info completa) | **10 Meta ads** | Paga Meta forte, mas nada no Google — já tem bolso e consciência de mídia |
| 20 | La Bella Estética | 42 99909-3400 | Uvaranas | 37 | 54 | não | **3 Meta ads** | Paga Meta sem site — tráfego cai em buraco |
| 21 | Clínica Monnyer Slusars | 42 99872-5420 | Oficinas | 26 | 52 | site melhora (blog/beleza) | 1 Meta ad | GMB bom — dor menor, prioridade baixa |
| 25 | Estética Sabres | 42 98442-3165 | Órfãs | 21 | 15 | site fraco | sem ad | IA do Google fala "serviços gerais" — enriquecer o que a IA diz sobre ela |
| 27 | Dermo 360º | 42 99823-4294 | Centro | 21 | 4 | não | sem ad | Centro + 4 fotos — dados fracos = IA fala pouco |
| 30 | Diomara Vieira | 42 98856-9051 | Estrela | 17 | 53 | não | sem ad | Sem site, fotos ok |
| 32 | Claudia Almeida | 42 99805-9924 | Uvaranas | 10 | 5 | tem | sem ad | Poucos dados = representação pobre na IA |

**Removido:** 29 Dra Priscila Lachman (operação do operador).

## Padrões da validação

- **IA do Google (AI Overview) responde antes de tudo** quando buscam o nome da
  clínica — resumo montado com GMB + site + avaliações. Dados fracos = IA fala
  genérico/errado. **Ângulo de serviço novo: enriquecer o que a IA diz sobre a
  clínica** (GMB completo, descrição, serviços, fotos, posts, avaliações) —
  vendedor 24h que fala bem, de graça.
- **2 pagando Meta sem site/Google** (Flor da Pele 10 ads, La Bella 3 ads): já gastam
  pra trazer gente — mas quem busca no Google (compra quente) não acha. Melhor perfil
  de cliente: bolso + dor + consciência de mídia.
- **1 com GMB bom** (Monnyer): menor dor — manter como fallback, não atacar primeiro.

## Fila de ataque (recomendada)

1. **Sculpt** — case de conversa (110 reviews)
2. **Flor da Pele** — 10 ads Meta = bolso comprovado, conversa mais sofisticada
3. **La Bella** — 3 ads Meta + sem site = dor direta ("tu paga pra trazer gente e não tem onde receber")
4. **Sabres / Dermo 360 / Claudia** — IA do Google fala pouco/genérico: "quando buscam teu nome, o Gemini responde antes de tudo — e o que ele fala sobre ti não mostra o que tu faz de melhor"
5. **Fernanda Milan / Diomara** — sem ads, convencer do valor do Google
6. **Monnyer** — último (GMB bom, dor menor)

## Mensagens prontas (a enviar — gate do operador)

**Sculpt:**
> "Oi, achei o Centro Estético Sculpt no Google. Tu tem 110 avaliação — é clínica de confiança. Só que quem procura "estética em Ponta Grossa" no Google não tá vendo isso. Posso te mostrar rapidinho?"

**Flor da Pele:**
> "Oi, vi que vocês investem bastante no Instagram — dá pra ver. Mas reparei uma coisa: quem digita "estética em Ponta Grossa" no Google não encontra vocês direito. Esse público é mais quente ainda — já quer agendar. Posso te mostrar como capturar eles?"

**La Bella:**
> "Oi, vi a La Bella no Google. Tu tem fotos e avaliação boa, e até anuncia no Instagram. Mas quem quer agendar pelo celular no Google não tem onde cair — não tem site. O que tu paga no Meta tá trazendo gente pra um beco sem saída. Posso te mostrar como fechar esse ciclo? Bem rápido."

**Sabres / Dermo 360 / Claudia (IA do Google):**
> "Oi, achei vocês no Google e reparei uma coisa: quando alguém busca teu nome, o Gemini responde antes de tudo, resumindo a clínica. O problema é que o que ele fala aí é genérico — não mostra teus melhores tratamentos nem teu diferencial. Dá pra fazer a IA falar bem de vocês do jeito certo. Posso te mostrar como? Leva 2 minutos."

**Fernanda Milan / Diomara:**
> "Oi, te achei no Google procurando estética em Ponta Grossa. Tu tem estrutura, mas o Google não tá te mostrando pra quem busca. Tem uma busca específica aí que tu nem capta hoje — posso te mostrar? 2 minutos."

**Monnyer (se sobrar tempo):**
> "Oi, vi a clínica no Google — o perfil tá bom. Mas notei que não capta agendamento direto. Posso te mostrar como transformar essas buscas em agenda?"
