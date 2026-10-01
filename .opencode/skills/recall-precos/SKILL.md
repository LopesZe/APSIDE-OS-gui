# Skill: recall-precos

# /recall-precos — Recall e repaginada de preços

## Gatilho
"recall de preços", "repaginar", "reajuste de preços", "subir preço", "os preços
estão baixos", "/recall-precos".

## Objetivo
Atualizar a escada de preços e propagar os novos valores por todo o repositório,
sem deixar preço velho espalhado (uma fonte por assunto — `RULES.md`).

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
6. **Propagar** (todos com preço):
   - `vendas/*.md` (script-rapido, roteiro-abordagem, script-venda-presencial,
     script-progressao, prospecacao-digital, follow-up-indicacao)
   - `.opencode/skills/` com preço: `proposta`, `diagnostico-gmb`, `apresentacao-gmb`
     (+ `template/apresentacao-gmb.html`)
   - `clientes/_template/` (vendas + skills + template HTML)
   - referências em `memoria/estrategia.md`
   - `memoria/mentores.md`: NÃO trocar preços dos mentores — só anotar que a escada
     da APSIDE é a fonte vigente
7. **Re-render** escopos alterados: `node render-apside.cjs` na pasta do cliente
   (playwright — PNGs + PDF; nunca Edge headless).
8. **Varredura final:** grep por `R$ 297-497|R$ 697-1.200|R$ 1.500-5.000` etc.
   em `*.md` e `*.html` **excluindo** `analise/`, `marketing/conteudo/` (documentos
   já entregues), `clientes/ang-festas` (cliente fechado) e `archive/`.
9. **Registrar decisão:** `memoria/decisoes/YYYY-MM.md`.
10. **`/salvar`** (commit + push).

## Como validar
- Grep final sem nenhuma ocorrência de preço antigo fora dos históricos.
- Escopo re-renderizado mostra os valores novos (conferir PNG da página de pricing).
- `memoria/decisoes/` com o registro do mês.

## Notas
- Recall 01/10/2026: 497-697 / 997-1.500 / 2.500-7.500 / chatbot 3.000-5.000.
- Próximo reajuste previsto: a cada 6 meses (regra da escada).
- Nunca cobrar pelo tempo de execução (`escada-precos.md` — princípio).
- Chatbot nunca embutido "de cortesia" em pacote — é produto de R$3k+.
