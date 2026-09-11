# Skill: apify-lead-generation

# /apify — Geração de leads B2B

Gera leads B2B fazendo scraping de Google Maps, sites, Instagram, Facebook, LinkedIn e Google Search via Apify.

## Dependências

- `APIFY_API_TOKEN` no `.env`
- Script `scripts/apify/run_actor.js`

## Workflow

1. Definir critérios de busca (.segmento, cidade, porte)
2. Selecionar actor Apify adequado
3. Executar scraping
4. Filtrar e deduplicar resultados
5. Entregar planilha com leads

## Regras

- Respeitar limites de taxa do Apify
- Não fazer scraping agressivo
- Dados para uso comercial, não spam
