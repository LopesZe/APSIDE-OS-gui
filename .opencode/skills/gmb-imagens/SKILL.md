# Skill: Geração de Imagens para GMB

Gera imagens PNG prontas pra upload no Google Meu Negócio.
HTML+CSS → Puppeteer → PNG em 2x.

## Quando usar

- Usuário pedir "imagens pro GMB", "fotos do Google", "posts pro Google"
- Usuário pedir "capa", "logo", "post" pra GMB
- Qualquer tarefa de geração de imagem visual pra negócio local

## Fluxo

1. Ler `identidade/design-guide.md` pra cores e fontes
2. Perguntar o estilo visual se não estiver claro (split, fullscreen, etc.)
3. Criar/editar HTMLs em `marketing/gmb-imagens/` com dimensões exatas
4. Rodar `node marketing/gmb-imagens/gerar-pngs.cjs` pra gerar PNGs
5. Entregar na pasta `marketing/gmb-imagens/png/`

## Dimensões padrão

| Tipo | Largura | Altura | Arquivo |
|---|---|---|---|
| Capa GMB | 1080px | 608px | cover.html |
| Logo GMB | 250px | 250px | logo.html |
| Perfil GMB | 250px | 250px | perfil.html |
| Post Google | 1200px | 900px | post-*.html |

## Layout split (padrão aceito pelo Guilherme)

```
┌─────────────────────┬─────────────────────┐
│                     │                     │
│   FUNDO CLARO       │   FUNDO ESCURO      │
│   #f8f9fa           │   #1F2133 → #0d3b66 │
│                     │                     │
│   Badge (cor)       │   Visual/Mockup     │
│   Título h1         │                     │
│   Descrição p       │   (celular, card,   │
│   Features ✓        │    lista, etc)      │
│                     │                     │
├─────────────────────┴─────────────────────┤
│ ░░░░░░░░░░░░░░░░ verde 4px ░░░░░░░░░░░░░░░░░ │
└───────────────────────────────────────────┘
```

## CSS base pra reusar

```css
.post {
  width: [W]px; height: [H]px;
  background: #f8f9fa; display: flex; position: relative; overflow: hidden;
}
.left {
  flex: 1; display: flex; flex-direction: column; justify-content: center;
  padding: 60px 50px 60px 70px;
}
.right {
  width: 550px; background: linear-gradient(135deg, #1F2133 0%, #0d3b66 100%);
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.right::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(circle at 40% 40%, rgba(52,84,76,0.12) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(0,102,255,0.1) 0%, transparent 50%);
}
.bar {
  position: absolute; bottom: 0; left: 0; right: 0; height: 4px;
  background: #34544C;
}
```

## Ferramentas

- **Puppeteer** (já instalado via npm) — `gerar-pngs.cjs`
- **NÃO usar** Edge headless (não funciona no Windows)
- **NÃO usar** Midjourney/DALL-E (resultado genérico/ruim)

## Arquivos da skill

- `marketing/gmb-imagens/gerar-pngs.cjs` — script de geração
- `marketing/gmb-imagens/*.html` — templates HTML
- `marketing/gmb-imagens/png/` — PNGs gerados
