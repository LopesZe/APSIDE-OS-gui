# Skill: carrossel

# /carrossel — Criar carrossel para Instagram

Cria carrosséis e posts visuais pra Instagram, TikTok, LinkedIn com a identidade visual da marca. Gera HTML estilizado + renderiza em PNG 1080x1350 via Playwright.

## Dependências

- `identidade/design-guide.md` — cores, fontes, estilo
- `identidade/marcas.md` — paleta de marcas parceiras (se post de produto)
- Template em `templates/carrossel/modelo-post.html`

## Workflow

1. **Definir modo:**
   - Modo 1: Frase motivacional (sem marca específica)
   - Modo 2: Produto de uma marca (usa paleta da marca)

2. **Criar HTML** baseado no template:
   - Ajustar `--accent`, `--brand`, `--logo` conforme o modo
   - Escrever slides (títulos, textos, CTA)
   - Último slide = CTA com logo

3. **Renderizar** com Playwright:
   ```bash
   node templates/carrossel/render.js <caminho>/carrossel.html <caminho>/instagram
   ```

4. **Legenda** — gerar texto pra Instagram no final

## Regras

- Sempre 1080x1350 (feed) ou 1080x1920 (story)
- Fontes do design-guide.md
- Logo no primeiro e último slide
- Sem jargão de guru
