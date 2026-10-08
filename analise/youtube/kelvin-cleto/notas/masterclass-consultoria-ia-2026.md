# Masterclass: Consultoria de IA Para Empresas (2026)

- **Vídeo:** https://www.youtube.com/watch?v=IrXbKEOqhtw — Kelvin Cleto, publicado 08/10/2026, 54:36 (live)
- **Transcrição:** `transcricoes/IrXbKEOqhtw.txt` (yt-dlp + faster-whisper `small`; vídeo novo, sem legendas oficiais)
- **Atenção:** termos técnicos com erro de transcrição ("com amigo"≈ERP, "Homem"≈Omie, "Gotu"≈GoTo, "Alvin"≈Kelvin, "FDR/FDE"≈Forward Deployed Engineer)

## O que é o vídeo

Live de apresentação do método dele de consultoria de IA em empresas de médio/grande porte
(exemplo base: rede de clínicas, 22 anos, R$ 11–13 mi/ano, 114 funcionários). Muito
auto-promoção de workshop de R$ 69 no meio — ruído, ignorar.

## Principais pontos

### 1. O que faz o consultor de IA (00–13 min)
- Entra na **operação**, entende os gargalos, resolve. IA tem que estar no centro do
  processo, acoplada a processo, olhando **resultado** — nunca IA solta.
- Perguntas que ele precisa responder: como o processo funciona de verdade, quais
  sistemas, onde estão os dados, o que integrar, o que é código vs automação, o que
  **realmente** precisa de LLM, o que entra em produção primeiro.
- **Nem tudo precisa de IA.** Ex.: 8 planilhas de Excel pra consolidar — resolve
  reestruturando processo tradicional. ROI imediato porque o desperdício já existe.
- Empresas de 30–50 mi/ano: planilha que ninguém sabe por que preenche, decisão no chute.
- Quanto maior a empresa, maior o ROI de qualquer ajuste fino (ex.: +0,5% em R$ 5 mi/mês
  = R$ 250 mil).
- **Barreira nº 1 = pessoas.** Achar os **key-users** (querem a mudança, evangelizam o resto).
- FDE (Forward Deployed Engineer) = consultor de IA com mais técnica.

### 2. Nichar (14 min)
- Sem nicho não **produtiza**: cada cliente de setor diferente = continua vendendo a sua hora.
- Falar direto na dor do setor facilita a venda. Exemplos dele: clínicas, hospitais,
  seguros, corretoras médio-grande.

### 3. Jornada de entrega (15–42 min)
1. **Diagnóstico** — entender o negócio *antes* da tecnologia: 3 metas do negócio em 12
   meses, onde tempo e dinheiro escappam, entrevista com dono/sócios + pessoas-chave
   (financeiro, RH, operação) + inventário de ferramentas (maturidade digital/dados).
   **É vendível sozinho.**
2. **Não precifica sem entender.** Papel de "conselheiro confiável": "eu sei que posso
   gerar resultado, mas onde? Não conheço tua operação." Não existe cobrar % de
   faturamento sem saber o que vai entregar.
3. **Cobrança faseada** (exemplos do vídeo): diagnóstico **R$ 10–22 mil** → mapeamento de
   processos → priorização → piloto → implementação → escala.
4. **Entregável do diagnóstico:** fluxograma do processo, planilha de custo por processo,
   lista de oportunidades, priorização junto com o cliente (jogo aberto/transparente).
5. **Mapeamento** — inventário de sistemas (ERP, faturamento, CRM, VoIP, planilhas) e dores:
   retrabalho, tecnologia defasada, call center sem capacidade. Pergunta-chave: *"por que
   você preenche essa planilha?"* — muitas vezes nem precisa.
6. **Conta de ROI** — transformar custo operacional em dinheiro:
   atendente R$ 2.500 + 70% imposto = R$ 4.250 ÷ 168 h = **R$ 25/h**; eficiência de
   20–30% → R$ 840/atendente → R$ 2.348/semana → **R$ 9.392/mês → R$ 112 mil/ano**, contra
   R$ 36.690 de desenvolvimento.
7. **Prova de conceito em <1 semana** — redirecionar **5% das ligações** do VoIP pra IA
   (ElevenLabs + Twilio/Telnyx), medir eficiência e pedir feedback. Provar rápido, escala
   pequena, antes de implementar de verdade.
8. **Priorização** por menor custo × maior retorno (resultado mais rápido).

### 4. Os dois riscos de escala (44–52 min)
- **Virar software house:** cliente A pede uma coisa, B outra → 10 clientes = 10 códigos =
  não escala. Caminho: achar padrões → método → produto → plataforma.
- **Escada do consultor:** vender conhecimento → consultor → consultor especializado
  (nicho) → serviço produtizado → infraestrutura/plataforma → dono de mercado
  (aquisição + entrega + **recorrência — obrigatória**).

### 5. Escada de contrato (52–54 min)
- Exemplo dele: contrato de **R$ 320 mil** só de desenvolvimento, projeto de **R$ 6 mi**.
- Mas: *"não dá pra sair da série 6 e jogar série A"*. Faixa realista de entrada:
  **R$ 70–100 mil + recorrência de R$ 2–5 mil**, construindo autoridade e nichando em
  mercado **que tem dinheiro** ("não adianta vender pra pobre").
- Consultorias grandes (Accenture, BRQ, Stefanini, FDEs da Anthropic) só olham contas de
  R$ 400 mi–bilhões → **a faixa de R$ 6–15 mi/ano é delas, não dessas consultorias.**

## Análise para a APSIDE

**Confirma a direção:**
- Nicho (validação de contadores em andamento) — Kelvin diz que sem nicho não produtiza.
- Diagnóstico como porta de entrada — já é nosso fluxo (raio-x → proposta).
- Receita primeiro / ROI calculado — já é o `framework-crescimento-ia.md`.
- "Não vender ferramenta, vender resultado" — já é o posicionamento de consultoria
  AI-First de 05/10.

**Gaps reais (o que falta hoje):**
1. **Diagnóstico não é cobrado** — ele cobra R$ 10–22 mil só pra entender. A APSIDE
   entrega de graça como abertura. Pra negócio local o valor é menor, mas **algum valor
   tem que ter** (ou o diagnóstico entra dentro do setup, nunca avulso grátis).
2. **Não existe conta de economia com número.** Nenhuma proposta atual mostra
   `custo/hora × eficiência × semanas = R$/ano`. É o que faz o preço virar óbvio.
3. **Não existe piloto medido de 1 semana.** Hoje o caminho é diagnóstico → proposta →
   setup R$ 5 mil. Falta o meio: **prova de valor rápida, barata, com métrica antes/depois.**
4. **Escada de contrato inexistente** — hoje: R$ 5 mil + R$ 500/mês. Existe espaço pra
   subir patamar conforme a entrega domine, mas **não pular série**: começar onde o
   cliente tem dinheiro e processo instalado (não quem não tem vendas).

**O que NÃO pegar agora:** projetos de R$ 320 mil, FDE, plataforma de 84 nichos,
implementação de Voice AI/ERP — exige time técnico e capital que não existem.

**Norte em 3 passos:** (1) fechar o nicho, (2) formatar o diagnóstico com conta de ROI e
entregável (fluxograma + custo + oportunidades), (3) criar o piloto de 1 semana como etapa
obrigatória entre proposta e setup.
