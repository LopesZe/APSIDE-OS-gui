# Banco de ideias — APSIDE

Pasta pra soltar ideias de conteúdo (carrossel, post, reel, blog) antes de virar peça final.

## Como usar

1. **Ideia em texto:** cria um arquivo `<tema>-ideia.md` com o tema e os pontos que tu quer abordar.
2. **Imagem / print de referência:** joga o arquivo (jpg/png) direto nessa pasta. Pode nomear `<tema>-ref.jpg` ou soltar com qualquer nome.
3. **Áudio ou link:** cola o resumo ou a URL dentro de um `.md` aqui.

## Convenção de nome

- `carrossel-<tema>-ideia.md` — brainstorming de carrossel
- `post-<tema>-ideia.md` — ideia de post único
- `<tema>-ref.jpg` / `<tema>-ref.png` — referência visual (ex.: post de concorrente, estilo que tu curtiu)

## O que o OpenCode faz

Toda vez que rodar `/carrossel`, `/publicar-tema` ou `/post`, ele lê esta pasta primeiro e
usa as ideias/referências como base. Imagens coladas aqui servem pra calibrar estilo,
tom visual e formato — não são publicadas, ficam só como insumo.

## Exemplo de ideia.md

```
Tema: por que PME morre sem presença
Ângulo: empresário no sufoco, 50 dias sem vender
Pontos:
- 90% das compras começam no Google
- concorrente tá no celular do cliente
- presença = sobrevivência, não luxo
Ref: post-ref.jpg (estilo que eu curti)
```
