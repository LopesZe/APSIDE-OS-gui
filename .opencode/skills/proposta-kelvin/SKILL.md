---
name: proposta-kelvin
description: >
  Diagnóstico de vazamento de vendas + apresentação de proposta com slides HTML
  estilo Kelvin Cleto (15 slides: concorrentes reais, mocks de landing page,
  setup por nível + mensalidade, garantia, cronograma conservador). Use quando o
  usuário pedir "diagnóstico de vazamento", "apresentação pro cliente",
  "apresentação estilo Kelvin", "montar proposta com slides", "proposta com
  apresentação", ou /proposta-kelvin.
---

# /proposta-kelvin — Diagnóstico de Vazamento + Apresentação com Slides

## Gatilho

"diagnóstico de vazamento", "apresentação pro cliente", "apresentação estilo
Kelvin", "montar proposta com slides", "proposta de sistema", /proposta-kelvin.

## Objetivo

Dois entregáveis: (1) diagnóstico investigativo `.md` com fontes citadas,
(2) apresentação HTML de 15 slides renderizada em PNG pro cliente.

## Passos

### 1. Investigação real — nunca template

- Entrevista/dados do cliente: como a venda acontece (etapas + taxas), quem é o
  cliente final, ticket médio, limitações do negócio (ex.: ocupação de um salão =
  limitação física — a conta de perda só vale com capacidade ociosa).
- Se faltar dado, **declarar a premissa no diagnóstico e no slide** — nunca
  inventar número. Número simulado é marcado como estimativa.

### 2. Concorrentes reais — obrigatório (o que faltou na primeira versão)

- `websearch`: "[tipo do negócio] em [cidade] avaliações Google".
- Coletar: nome, nota, nº de avaliações, se tem site/redes, bairro.
- Destacar o cliente no fim da tabela com o déficit dele.

### 3. Diagnóstico `.md`

- Caminho: `clientes/<slug>/marketing/diagnosticos/diagnostico-vendas-<slug>-<data>.md`.
- Cada vazamento com **fonte citada** (verificação de campo, auditoria de site,
  entrevista) — nunca "tirado do nada".
- Conclusão sem servir como nome de serviço ("previsibilidade de receita" só
  como resultado, nunca como produto).

### 4. Escopo e preço — decisão por cliente, nunca herdada da ANG

O deck da ANG é **estrutura visual**, não pacote de produto. Antes de montar os
slides 8–14, passar por esta análise e registrar a decisão no diagnóstico:

1. **Identificar o gargalo do funil:** o cliente sofre de **captação** (pouco
   lead chega) ou de **processamento** (lead chega e escorre)? A ANG era
   captação (0% do Google); Terminal era processamento (10 pedidos/dia,
   2 fechavam). O gargalo define o pacote.
2. **Montar as peças do zero pro gargalo:** para cada candidata, a pergunta é
   "essa peça fecha qual vazamento do slide 7?". Se não fecha nenhum, não entra.
   O grid do slide 8 é 01–N — o N é consequência do diagnóstico, não da ANG.
3. **Landing pages não são padrão 3:** múltiplas LPs só quando o cliente tem
   múltiplos públicos **e** porta de entrada de captação aberta. Se o gargalo é
   processamento, o núcleo é automação/qualificação — o slide 9 mostra mocks da
   peça que existe de verdade (ex.: conversa de WhatsApp automatizada, página de
   orçamento única), não 3 browsers copiados.
4. **Preço:** escolher o nível em `vendas/escada-precos.md` › "SETUP POR NÍVEL"
   conforme o escopo resultante — automação/integração de WhatsApp pede nível
   intermediário (R$ 10k) ou alto (R$ 15k), peças padrão sem CRM pede base
   (R$ 5k). **Declarar no diagnóstico por que aquele nível.** Ancorar: setup <
   2 meses do que o problema custa. NUNCA % sobre vendas.
5. **Nunca reaproveitar os valores do deck anterior sem passar por este filtro**
   (erro cometido na Terminal, 05/10/2026 — R$ 5k colado sem decidir o nível).

### 5. Apresentação HTML (15 slides)

- Base: copiar `clientes/ang-festas/vendas/apresentacao-proposta-ang-festas.html`
  e adaptar (deck maduro, já aprovado pelo operador em 05/10/2026) — copiar
  **layout e regras de slide**, aplicar escopo/preço definidos no passo 4.
- Estrutura e regras de slide (aprendidas com o operador — NÃO quebrar):

| # | Slide | Regra |
|---|-------|-------|
| 1 | Capa | **SEM valores de perda** — manter curiosidade |
| 2 | Metodologia | Só "o que analisamos" — **nunca** "o que não fazemos" |
| 3 | Funil atual | % de conversão em cada etapa, apresentável |
| 4 | Evidência campo a campo | Tabela verificação → impacto |
| 5 | Concorrentes | Obrigatório: nota + avaliações + o que fazem; cliente destacado |
| 6 | Quantificação | Cálculo + **premissa honesta** (limitação física/ocupação) |
| 7 | Vazamentos | Cada um com **fonte citada** |
| 8 | Sistema | Grid numerado 01–N (nunca lista feia) — N e composição saem do gargalo do passo 4, não da ANG |
| 9 | Peça-chave | **Mocks tangíveis** (URL, headline, bullets, CTA) — LPs múltiplas só se captação por público; senão mock da peça que existe (conversa automatizada, página de orçamento) |
| 10 | Métricas | Métrica de venda por peça — zero métrica de vaidade |
| 11 | Preço | 2 valores: setup por nível (5/10/15k — nível decidido no passo 4) + mensalidade (R$500+). **NUNCA % sobre vendas** |
| 12 | Garantia | "O risco é nosso, resultado medido junto" + payback |
| 13 | Cronograma | **Conservador**: se demora 7 dias, promete 7–14 — entregar adiantado |
| 14 | Fechamento | Conversão (hoje/30/90 dias), 2 valores condensados, próximo passo claro |
| 15 | Contato | Frase-âncora + WhatsApp + documentos |

- Preço: fonte única `vendas/escada-precos.md` › "SETUP POR NÍVEL + OPERAÇÃO
  MENSAL", nível escolhido pelo escopo (passo 4) e justificado no diagnóstico;
  ancorar no impacto (setup < 2 meses do que o problema custa).
- Design: `identidade/design-guide.md` — paleta índigo/obsidian vigente
  (`#4130D8`/`#4331e9`/`#6E5CFF` sobre `#000000`), sem gradiente (só fade de
  `#2F2399`), DM Sans + Plus Jakarta Sans + JetBrains Mono, raio 12px.

### 6. Render dos previews

```powershell
node ".opencode/skills/proposta-kelvin/render.cjs" "camin/para/o/deck.html"
```

(puppeteer de `clientes/ang-festas/site/node_modules` — nunca Edge headless.)

## Como validar

- 15 PNGs gerados em `previews/` sem erro.
- Slide 1 sem nenhum valor monetário; slide 2 sem "o que não fazemos".
- Concorrentes com dados reais; preço = setup + mensalidade, sem %.
- **Nível do preço justificado pelo escopo deste cliente** (passo 4 registrado
  no diagnóstico) — nenhum valor reaproveitado do deck ANG sem essa decisão.
- **Cada peça do slide 8 aponta pra um vazamento do slide 7**; se as LPs do
  slide 9 não refletem o gargalo do cliente, refazer o slide 9.
- Slide 13 com prazos folgados; leitura visual dos slides 1, 5, 9, 11, 13, 14.

## Notas

- Exemplo completo: ANG Festas (teste, 05/10/2026) em
  `clientes/ang-festas/vendas/`.
- Cliente de teste não vira case nem cliente — regra do `memoria/empresa.md`.
- Depois de entregar, oferecer salvar aprendizados novos (memory/skill).
