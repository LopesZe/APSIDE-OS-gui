---
name: vender
description: >
  Fluxo de venda presencial: Diagnóstico → Solução.
  Raio-X Digital como porta de entrada, solução baseada no problema identificado.
  Use quando o usuário pedir "como vender", "script de venda", "roteiro de vendas",
  "vender pra cliente local", ou /vender.
---

# /vender — Fluxo de Venda

Venda presencial para negócios locais. O cliente não compra um produto. Ele compra a resolução de um problema.

## REgra de ouro: NÃO PERGUNTAR. APENAS FAZER.

O usuário não quer ser perguntado. Ele quer resultado. Se ele pediu "vender", executar o fluxo completo: diagnóstico → kit de vendas → script → render. Tudo de uma vez. Sem perguntas no meio. Se não tem dados suficientes, usar os que tem e entregar o que der.

## Dependências

- `vendas/script-rapido.md` — script de 1 página (imprimir e levar no bolso)
- `vendas/prospecacao-digital.md` — templates de LinkedIn, Instagram DM e WhatsApp
- `vendas/follow-up-indicacao.md` — cronograma pós-venda + sistema de indicação
- `vendas/escada-precos.md` — faixas de preço por tipo de problema
- `vendas/script-venda-presencial.md` — roteiro completo de abordagem (referência)
- `vendas/script-progressao.md` — como evoluir de cliente pequeno pra projeto maior
- `dados/crm.md` — planilha de acompanhamento
- `memoria/clientes-ideais.md` — matriz de seleção de clientes
- `memoria/mentores.md` — base de conhecimento Mazzeo + Alfredo

## Workflow

Existem 2 caminhos de entrada. Escolher o que fizer mais sentido pro lead.

---

### CAMINHO A — Google Maps (tradicional)

Negócios que já têm Google fraco, sem fotos, sem avaliações.

#### Passo A1 — Raio-X Digital

1. Buscar o negócio no Google
2. Analisar: Google, site, redes, captação
3. Identificar 2-3 problemas reais
4. Formato: 1 página com Problema → Evidência → Impacto → Prioridade

#### Passo A2 — Prospecção digital

1. Usar templates de `vendas/prospecacao-digital.md`
2. Mandar LinkedIn ou Instagram DM
3. Esperar 24-48h
4. Se responder → agenda visita
5. Se não → visita presencial com Raio-X pronto

---

### CAMINHO B — Instagram-first (novo ⭐)

Negócios com Instagram ativo mas SEM Google Meu Negócio e SEM site.

**O gancho é diferente:** "você tem seguidores mas é invisível no Google."

#### Passo B1 — Descobrir o lead

1. Rodar `/prospecar-instagram` no nicho desejado
2. Ou buscar manualmente: nicho + cidade + " instagram "
3. Verificar: tem GMB? tem site? tem link na bio?
4. Se SIM pra qualquer um → descarta (não é oportunidade)
5. Se NÃO pra todos → candidato ideal

#### Passo B2 — Extrair dados do Instagram

```bash
node scripts/instaloader/extrair-perfil.js <username>
```

Isso puxa: seguidores, engajamento, bio, posts recentes.

#### Passo B3 — Montar o kit completo

Rodar os comandos na ordem:

```
1. Dados → extrair via Apify
2. Apresentação → copiar template de dados/penha-rosa-2026-09-11/ e adaptar
3. Script → copiar script-abordagem.html e adaptar
4. Render → node render.cjs
5. Index → criar index.html com links pra tudo
```

**Formato de entrega:** pasta com HTMLs + PNGs + PDF, tudo interligado.

#### Passo B4 — DM no Instagram (primeiro contato)

1. Mensagem 1 — Gancho: "Oi! Vi o Instagram de vocês, fotos incríveis. Trabalho com presença digital aqui de [cidade]. Tenho uma observação que pode ajudar. Posso mandar?"
2. Mensagem 2 — Problema + prova: "Vocês têm X seguidores. Mas pesquisei [nicho] no Google e vocês não apareceram. Isso significa que..."
3. Mensagem 3 — Agendar: "Fiz um raio-x rápido. Quer que eu mande? Posso passar aí pra bater um papo rápido."

**NÃO vender na DM.** O objetivo é gerar curiosidade e agendar visita.

#### Passo B5 — Presencial (10 min)

1. Chegada (30s)
2. Contexto — ouve antes de falar (2 min)
3. Mostra o problema — pesquisa no celular na frente dele (2 min)
4. Entrega raio-x — mostra os 4 pontos (2 min)
5. Fecha — proposta + prazo (2 min)
6. Indicação — sempre (1 min)

#### Passo B6 — Follow-up (se não fechar)

- Dia 3: check-in WhatsApp
- Dia 7: "olhou o raio-x?"
- Dia 14: última mensagem

---

### CAMINHO COMUM — Depois de fechar

### Passo 3 — Implementação + Follow-up

Entregar com qualidade. Depois de entregar:

1. Dia 0: confirma + registra em `dados/crm.md`
2. Dia 3: check-in ("tá tudo certo?")
3. Dia 7: PEDIR INDICAÇÃO ("tem algum colega?")
4. Dia 30: medir resultado

### Passo 4 — Evolução

Se o cliente estiver satisfeito, identificar o próximo problema:

1. "Como tá as coisas? Tá vindo mais cliente pelo Google?"
2. Se sim → "Bom. E como tá a parte de converter quem te encontra?"
3. Se não → "Deixa eu ver o que pode estar acontecendo..."

## Regras

- **O diagnóstico é a porta.** Não o Display NFC.
- **Cada cliente segue o caminho do problema.** Não existe funil obrigatório.
- **Não inventar números.** Usar linguagem defensável: "seu concorrente tem mais avaliações" não "você aparece 40% menos".
- **Sempre peça indicação.** "Tem algum colega que precise?"
- **Entregue mais do que cobrou.** Regra do Mazzeo.
- **Registre tudo.** Cliente novo vai pra memória.
- **Instagram-first: não vender na DM.** O objetivo é gerar curiosidade e agendar visita presencial.
- **Instagram-first: sempre usar dados reais.** Seguidores, posts, engajamento — tudo extraído do Apify.
- **Instagram-first: o gancho é "você é invisível no Google".** Não "seu Instagram tá ruim". O Instagram deles é bom. É o Google que não existe.

## Referências

- Script rápido (1 página): `vendas/script-rapido.md`
- Prospecção digital: `vendas/prospecacao-digital.md`
- Follow-up e indicação: `vendas/follow-up-indicacao.md`
- CRM: `dados/crm.md`
- Faixas de preço: `vendas/escada-precos.md`
- Script presencial completo: `vendas/script-venda-presencial.md`
- Progressão: `vendas/script-progressao.md`
- Seleção de clientes: `memoria/clientes-ideais.md`
- Conhecimento mentor: `memoria/mentores.md`
- **Instagram-first:** Extração de perfis: `scripts/instaloader/extrair-perfil.js`
- **Instagram-first:** Skill de prospecção: `.opencode/skills/prospecar-instagram/SKILL.md`
- **Instagram-first:** Template de referência: `dados/penha-rosa-2026-09-11/`
