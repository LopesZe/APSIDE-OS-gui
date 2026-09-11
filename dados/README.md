# Dados

Drop zone pra arquivos de dados que precisam ser analisados (CSV, Excel, PDF, JSON).

## Convenção de Pastas

Cada pedido de prospecção gera uma pasta própria:

```
dados/
  [nicho]-[cidade]-[data]/
    dados.md              (dados brutos da prospecção)
    apresentacao.html     (HTML unificado: apresentação + roteiro)
    render.cjs            (gera PNGs + PDF)
    instagram/
      pagina-01.png       (capa)
      pagina-02.png       (tabela)
      pagina-03.png       (detalhes top 4)
      pagina-04.png       (CTA)
      pagina-05.png       (roteiro prospect 1)
      pagina-06.png       (roteiro prospect 2)
      pagina-07.png       (roteiro prospect 3+4)
      pagina-08.png       (checklist + math)
      prospeccao-completa.png
      prospeccao-[nicho].pdf
```

### Exemplo:
- `clinicas-ponta-grossa-2026-09-08/`
- `pet-shops-cascavel-2026-09-15/`
- `restaurantes-londrina-2026-09-20/`

## Como usar

1. Para nova prospecção, criar pasta seguindo o padrão `[nicho]-[cidade]-[data]/`
2. Usar a skill `/prospecar` pra gerar os dados → salvar em `dados.md`
3. Usar a skill `/vender` pra gerar o roteiro → incluir no `apresentacao.html`
4. Renderizar com `node render.cjs` pra gerar PNGs + PDF
