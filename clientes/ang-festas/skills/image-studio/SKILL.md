# Skill: image-studio

# /image-studio — Studio de geração de imagens

Studio de geração de imagens com roteamento automático entre ai-studio-image (fotos humanizadas) e stability-ai (arte/ilustração/edição). Detecta o tipo de imagem e escolhe o modelo ideal.

## Workflow

1. Receber pedido de imagem
2. Classificar: foto realista → Gemini, arte/ilustração → Stability AI
3. Gerar com o modelo apropriado
4. Entregar imagem

## Regras

- Não misturar estilos na mesma peça
- Resolução mínima: 1024x1024
- Sem marcas d'água
