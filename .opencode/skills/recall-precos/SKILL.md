# Skill: recall-precos

# /recall-precos — Recall e repaginada de preços

## Gatilho
"recall de preços", "repaginar", "reajuste de preços", "subir preço", "os preços
estão baixos", "/recall-precos".

## Objetivo
Atualizar a escada de preços e fazer o repositório inteiro refletir a realidade
comercial atual. O recall faz **3 coisas** (e o guia de preços sai junto):

1. **Substituir** os preços que o operador praticava pelos novos da escada.
2. **Corrigir erros** encontrados no caminho (contas que não fecham, exemplos
   fora da faixa, bundles inventados, ticket abaixo do piso).
3. **Retirar produtos descontinuados** de tudo que é ativo (caso Display NFC).

Uma fonte por assunto — `RULES.md`.

## Passos

1. **Ler a fonte:** `vendas/escada-precos.md` (único dono de preços — `MAPA.md`).
2. **Comparar com o que foi cobrado de verdade:** varrer `analise/raiox/*/escopo*.html`
   e `saidas/proposta*.md` procurando `R$` — identificar subfaturamento item a item.
3. **Montar tabela antes → depois** com justificativa por linha (valor agregado,
   faixa da escada, conflito com `memoria/estrategia.md`).
4. **Gate humano:** apresentar a tabela e aprovar os valores com o operador ANTES
   de escrever qualquer coisa (`RULES.md` regra 6).
5. **Repaginar a escada:** atualizar faixas, adicionar itens novos e registrar a
   data do recall no cabeçalho do arquivo.
6. **Propagar os novos preços** (todos com `R$` que derive da escada):
   - `vendas/*.md` (script-rapido, roteiro-abordagem, script-venda-presencial,
     script-progressao, prospecacao-digital, follow-up-indicacao) — inclusive
     **exemplos e contas**: math por abordagem, progressão de cliente, bundles,
     ticket médio, receita mínima.
   - `marketing/estudo-gmb-completo.md` + `marketing/estudo-gmb.html`
     (tabela "Preços de Referência" / cards TIER).
   - `.opencode/skills/` com preço: `proposta`, `diagnostico-gmb`, `apresentacao-gmb`
     (+ `template/apresentacao-gmb.html`)
   - `clientes/_template/` (vendas + skills + template HTML)
   - referências em `memoria/estrategia.md` (faixas, bundles, ticket médio)
   - `memoria/mentores.md`: NÃO trocar preços dos mentores — só anotar que a escada
     da APSIDE é a fonte vigente
7. **Corrigir erros aparentes:** conta que não fecha (ex.: "12 clientes → R$1.491"),
   preço de bundle fora das faixas, meta com ticket abaixo do piso novo, descrição
   de produto prometendo coisa que a escada não entrega. Corrigir na hora, sem
   esperar outro recall.
8. **Retirar descontinuados:** se algum item saiu do catálogo (ex.: Display NFC,
   01/10/2026), varrer e neutralizar toda menção de VENDA ativa:
   - escada: seção "DESCONTINUADO" + aviso no cabeçalho
   - `memoria/empresa.md`: status do item
   - scripts/skills/templates: tirar dos itens oferecidos, deixar nota "não vender"
   - guia de preços: fora da página
   - Docs já entregues e históricos (`analise/`, `marketing/conteudo/`,
     `clientes/ang-festas`) NÃO alterar.
9. **Re-render derivados:**
   - Guia de preços: `node vendas/render-guia.cjs` (PNGs + `guia-precos.pdf`)
   - Escopos de cliente: `node render-apside.cjs` na pasta do cliente
     (playwright — nunca Edge headless).
10. **Varredura final:** grep por `R$ 297-497|R$ 697-1.200|R$ 1.500-5.000|R$ 197|1.497`
    e pelo nome do produto descontinuado, em `*.md` e `*.html` **excluindo**
    `analise/`, `marketing/conteudo/` (documentos já entregues), `clientes/ang-festas`
    (cliente fechado) e `archive/`.
11. **Registrar decisão:** `memoria/decisoes/YYYY-MM.md`.
12. **`/salvar`** (commit + push).

## Como validar
- Grep final sem nenhum preço antigo ou nome de descontinuado fora dos históricos.
- Contas dos scripts fechando com a faixa nova.
- Guia de preços (`vendas/guia-precos.pdf`) re-renderizado com os valores novos.
- Escopo re-renderizado mostra os valores novos (conferir PNG da página de pricing).
- `memoria/decisoes/` com o registro do mês.

## Notas
- Recall 01/10/2026: 497-697 / 997-1.500 / 2.500-7.500 / chatbot 3.000-5.000 /
  social 397-597; Conta Gestor 697 / 4.997 / 6.997; Display NFC descontinuado.
- Próximo reajuste previsto: a cada 6 meses (regra da escada) — 01/04/2027.
- Nunca cobrar pelo tempo de execução (`escada-precos.md` — princípio).
- Chatbot nunca embutido "de cortesia" em pacote — é produto de R$3k+.
