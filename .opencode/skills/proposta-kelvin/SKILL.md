---
name: proposta-kelvin
description: >
  Diagnóstico de vazamento de vendas + apresentação de proposta com slides HTML
  estilo Kelvin Cleto (16 slides: concorrentes reais, ordem certa de ataque,
  mocks de landing page, setup por nível + mensalidade, garantia, cronograma
  conservador). Use quando o
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
(2) apresentação HTML de 16 slides renderizada em PNG pro cliente.

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
slides 8–15, passar por esta análise e registrar a decisão no diagnóstico:

1. **Identificar o gargalo do funil:** o cliente sofre de **captação** (pouco
   lead chega) ou de **processamento** (lead chega e escorre)? A ANG era
   captação (0% do Google); Terminal era processamento (10 pedidos/dia,
   2 fechavam). O gargalo define o pacote.
2. **Montar as peças do zero pro gargalo:** para cada candidata, a pergunta é
   "essa peça fecha qual vazamento do slide 7?". Se não fecha nenhum, não entra.
   O grid do slide 9 é 01–N — o N é consequência do diagnóstico, não da ANG.
3. **Landing pages não são padrão 3:** múltiplas LPs só quando o cliente tem
   múltiplos públicos **e** porta de entrada de captação aberta. Se o gargalo é
   processamento, o núcleo é automação/qualificação — o slide 10 mostra mocks da
   peça que existe de verdade (ex.: conversa de WhatsApp automatizada, página de
   orçamento única), não 3 browsers copiados.
4. **Preço:** escolher o nível em `vendas/escada-precos.md` › "SETUP POR NÍVEL"
   conforme o escopo resultante — automação/integração de WhatsApp pede nível
   intermediário (R$ 10k) ou alto (R$ 15k), peças padrão sem CRM pede base
   (R$ 5k). **Declarar no diagnóstico por que aquele nível.** Ancorar: setup <
   2 meses do que o problema custa. NUNCA % sobre vendas.
5. **Nunca reaproveitar os valores do deck anterior sem passar por este filtro**
   (erro cometido na Terminal, 05/10/2026 — R$ 5k colado sem decidir o nível).

### 5. Apresentação HTML (16 slides)

- Base: copiar `saidas/apresentacao-terminal-materiais-motion.html` e adaptar
  (deck maduro, design padrão aprovado pelo operador em 08/10/2026) — copiar
  **layout, CSS e regras de slide**, aplicar escopo/preço definidos no passo 4.
- Estrutura e regras de slide (aprendidas com o operador — NÃO quebrar):

| # | Slide | Regra |
|---|-------|-------|
| 1 | Capa | **SEM valores de perda** — manter curiosidade |
| 2 | Metodologia | Só "o que analisamos" — **nunca** "o que não fazemos". **Cards grandes** (aprendido 08/10): padding ≥30px, título ≥24px, texto ≥16px — card miúdo passa sensação de amadorismo |
| 3 | Funil atual | % de conversão em cada etapa, apresentável |
| 4 | Evidência campo a campo | Tabela verificação → impacto. **Sem "brilho" decorativo**: box-shadow colorido/glow só em card com significado real (ex.: gargalo) — card comum nunca ganha destaque visual |
| 5 | Concorrentes | Obrigatório: nota + avaliações + o que fazem; cliente destacado |
| 6 | Quantificação | Cálculo **full-width no topo**, cards secundários (custo da inércia / premissa) **abaixo, lado a lado** — nunca coluna estreita ao lado do cálculo. **Conta certa:** contribuição mensal = anual ÷ 12 (R$ 2.730/ano = R$ 227,50/mês); ganho = +1,6 cliente/mês × R$ 227,50 = **+R$ 374/mês**, nunca rotular valor anual como "/mês" (erro da AgroTerra: R$ 4.482/mês) |
| 7 | Vazamentos | Cada um com **fonte citada** |
| 8 | A ordem certa | Framework `vendas/framework-crescimento-ia.md`: **front office e back office em cards separados** (vazamento vs operação sólida) + a ordem — Receita (Q1) agora → Eficiência depois → Escala por último, **sem ①②③ nos títulos**. "A contagem do problema" ganha **pizza sólida** (`conic-gradient`, sem furo) com legenda. Classificar cada vazamento do slide 7 por **camada/quadrante**. **Regra:** máximo 1 tela, sem virar aula de framework |
| 9 | Sistema | Grid numerado 01–N (nunca lista feia) — N e composição saem do gargalo do passo 4, não da ANG. Card extra/rodapé ocupa **`grid-column:1/-1` (largura total)** — nunca span parcial que deixa célula vazia (desproporção) |
| 10 | Peça-chave | **Mocks tangíveis** (URL, headline, bullets, CTA). Browser mock e linha de chips embaixo na **mesma largura, bordas alinhadas** (largura fixa no wrapper, `width:100%` em ambos, chips `flex:1 1 auto`); phone escalado (`transform:scale` + wrapper com tamanho reservado) pra caber sem cortar a barra de nota. **Nunca:** mock cortado ou desalinhado dos cards de baixo |
| 11 | Métricas | Métrica de venda por peça — zero métrica de vaidade |
| 12 | Preço | 2 valores: setup por nível (5/10/15k — nível decidido no passo 4) + mensalidade (R$500+). **NUNCA % sobre vendas**. Colunas irmãs equilibradas: **mesmo nº de itens (~5) e alturas iguais** — dividir bullets pra nenhum card ficar vazio |
| 13 | Garantia | "O risco é nosso, resultado medido junto" + payback por margem de lucro do setor. **Linha explícita "Margem de lucro declarada — X%"**; totais tem que fechar (churn + funil somados = total anual); payback **contando do zero (acumulado)**, não run-rate — e propagar qualquer correção de número pro `.md` do diagnóstico e aos demais slides |
| 14 | Cronograma | **Conservador**: se demora 7 dias, promete 7–14 — entregar adiantado |
| 15 | Fechamento | Conversão (hoje/30/90 dias), 2 valores condensados, próximo passo claro |
| 16 | Contato | Frase-âncora + WhatsApp + documentos |

- Preço: fonte única `vendas/escada-precos.md` › "SETUP POR NÍVEL + OPERAÇÃO
  MENSAL", nível escolhido pelo escopo (passo 4) e justificado no diagnóstico;
  ancorar no impacto (setup < 2 meses do que o problema custa).
- Design: `identidade/design-guide.md` — paleta índigo sobre fundo claro
  (`#E7E6EF`), sem gradiente, DM Sans + Plus Jakarta Sans + JetBrains Mono,
  raio 12px. Componentes padrão do motion (chips mono, cards com ícones SVG
  stroke, mockups de phone/browser, funil, toasts, timeline) — ver template base
  em `saidas/apresentacao-terminal-materiais-motion.html`.
- Payback: calcular pela **margem de lucro do setor do cliente** (média de
  mercado), nunca por receita bruta. Fórmula: lucro/dia = ticket médio × margem
  do setor; payback = setup ÷ lucro/dia. Declarar a margem usada e a fonte.
  Quando o ganho é recorrente e se acumula mês a mês (novos clientes/percentual
  de conversão), apresentar **também** o payback acumulado contando do zero —
  e nunca misturar os dois (run-rate rotulado como verba imediata = erro da
  AgroTerra).

### 6. Render dos previews

```powershell
node ".opencode/skills/proposta-kelvin/render.cjs" "camin/para/o/deck.html"
```

(puppeteer de `clientes/ang-festas/site/node_modules` — nunca Edge headless.)

## Como validar

- 16 PNGs gerados em `previews/` sem erro.
- Slide 1 sem nenhum valor monetário; slide 2 sem "o que não fazemos".
- Concorrentes com dados reais; preço = setup + mensalidade, sem %.
- **Nível do preço justificado pelo escopo deste cliente** (passo 4 registrado
  no diagnóstico) — nenhum valor reaproveitado do deck ANG sem essa decisão.
- **Slide 8** mostra a ordem certa (① Receita/Q1 primeiro) e os vazamentos do
  slide 7 classificados por camada/quadrante — sem virar aula de framework.
- **Cada peça do slide 9 aponta pra um vazamento do slide 7**; se as LPs do
  slide 10 não refletem o gargalo do cliente, refazer o slide 10.
- Slide 14 com prazos folgados; leitura visual dos slides 1, 5, 8, 10, 12, 14, 15.
- **Payback calculado por margem de lucro do setor** (não receita bruta) —
  margem declarada no slide e no diagnóstico.
- **QA numérico (antes de entregar):** conferir cada conta do deck —
  contribuição mensal = anual ÷ 12; totais = soma das linhas; payback = setup ÷
  (perda mensal) bate com a nota. Achar número misturando ano/mês (ex.:
  "+R$ 4.482/mês" vindo de 1,6 × R$ 2.730/**ano**) = corrigir em **todos** os
  slides + no `.md` do diagnóstico de uma vez (fonte única propaga).

### QA programático (obrigatório quando a leitura de imagem falhar)

O harness às vezes entrega **mídia errada/stale** na leitura de PNG (imagem de
outro slide, cache repetido) — nunca concluir validação visual só pelo que
"pareceu" vir. Após o render, rodar checagem de geometria no DOM (puppeteer,
script temporário semelhante ao `render.cjs`) e só então tentar a leitura
visual:

1. **Overflow:** todo filho direto de cada `.slide` com `bottom ≤ 767` e
   `right ≤ 1441` (view 1440×810, nav 44px) — pega nota de rodapé cortada.
2. **Texto clipado:** em `.card/.rcard/.p/.col/.peca/.calc/.stat/.pnl`,
   `scrollHeight ≤ clientHeight + 2` (e idem para width).
3. **Regras do pedido:** comparar larguras/posições declaradas (ex.: browser
   vs linha de chips com delta 0px; cálculo acima dos cards; alturas iguais em
   colunas irmãs) e asserts de texto (números novos presentes, antigos ausentes).
4. Se a leitura visual devolver mídia trocada: repetir com arquivo de nome
   novo — se persistir, **validar por geometria** e avisar o operador pra
   conferir os PNGs com o olho humano.

## Notas

- Exemplo completo: ANG Festas (teste, 05/10/2026) em
  `clientes/ang-festas/vendas/`.
- Template base do design padrão (tema claro, componentes do motion):
  `saidas/apresentacao-terminal-materiais-motion.html`.
- Cliente de teste não vira case nem cliente — regra do `memoria/empresa.md`.
- Depois de entregar, oferecer salvar aprendizados novos (memory/skill).
