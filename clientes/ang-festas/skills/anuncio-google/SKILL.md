# Skill: anuncio-google

# /anuncio-google — Campanha Google Ads

Cria estrutura completa de campanha do Google Ads a partir de um briefing ou da pesquisa SEO. Gera CSV pronto pra importar no Google Ads Editor.

## Dependências

- `memoria/empresa.md`
- Resultado da skill `/seo` (se disponível)

## Workflow

1. Definir objetivos da campanha
2. Pesquisar palavras-chave (volume, concorrência, custo estimado)
3. Estruturar campanha: grupos de anúncios, palavras-chave, extensões
4. Gerar CSV com:
   - Campanhas
   - Grupos de anúncios
   - RSAs (Responsive Search Ads)
   - Extensões (sitelinks, chamadas, local)
   - Palavras-chave negativas
5. Entregar CSV + instruções de importação

## Regras

- CSV compatível com Google Ads Editor
- Segmentação geográfica configurada
- Orçamento diário sugerido
- Estimativa de resultados
