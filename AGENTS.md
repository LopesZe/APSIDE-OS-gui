# APSIDE-OS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do APSIDE-OS — como o opencode lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, seguir a sequência definida em `core/BOOT.md`
(que lê, nesta ordem: `core/IDENTITY.md` → `core/CONTEXT.md` → `memoria/*` →
`core/GOVERNANCE.md` → `core/RULES.md` → `core/MAPA.md` → `core/PROPAGATION.md` →
`core/HEARTBEAT.md` → `core/USER.md` → `core/TOOLS.md` → `core/AGENTS.md`).

Usar esse contexto como base para qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `memoria/estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.opencode/skills/`. Se encontrar, seguir as instruções da skill. Se não
encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `AGENTS.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `memoria/empresa.md`
- **Mudança de prioridade ou foco** → `memoria/estrategia.md`
- **Tom ou estilo** → `memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `AGENTS.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.opencode/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.config/opencode/skills/nome-da-skill/SKILL.md` (global)
3. Ler `memoria/empresa.md` e `memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do opencode

---

## Aprendizado com erros

### Geração de imagens (ref: sessão 2026-09-16)

| Erro | Correção | Regra |
|---|---|---|
| Usei prompts de IA genéricos ("photorealistic", "editorial style") | Usar HTML+CSS→PNG com puppeteer | Nunca gerar imagens via Midjourney/DALL-E pro GMB |
| Não consultei o design-guide.md antes de criar prompts | Sempre ler `identidade/design-guide.md` antes de qualquer tarefa visual | Consultar paleta e tipografia antes de criar conteúdo visual |
| Criei HTML de referência gigante em vez de imagens direto | Ir direto no que o usuário pediu | Entregar o que foi pedido, não uma referência do que foi pedido |
| Tentei Edge headless que não funciona no Windows | Usar puppeteer (já instalado no projeto) | Nunca usar Edge headless pra screenshots |
| Não entendi o layout que o usuário queria até ele falar | Perguntar estilo visual antes de criar | Quando o usuário pedir "imagens", perguntar o estilo preferido |
| Mandei 11 prompts de IA complexos que foram rejeitados | Escalar devagar, mostrar 1 amostra primeiro | Testar com 1 antes de gerar tudo |

### Regra de ouro: HTML+CSS→PNG

Quando o usuário pedir imagens (posts, capas, thumbnails, cards):
1. Ler `identidade/design-guide.md` pra cores e fontes
2. Criar HTMLs com dimensões exatas do destino
3. Gerar PNGs com `gerar-pngs.cjs` (puppeteer, deviceScaleFactor: 2)
4. Entregar na pasta `marketing/gmb-imagens/png/`

### Ferramentas que funcionam

- **Puppeteer** pra HTML→PNG (já instalado, funciona perfeito)
- **Edge headless** NÃO funciona pra screenshots no Windows
- **Midjourney/DALL-E** NÃO funcionam pra imagens de negócio local (genérico demais)

---

## Perfil do negócio

O perfil completo do operador e do negócio está em `core/IDENTITY.md` (missão,
personalidade, limites) e `core/USER.md` (como ele prefere interagir). As
ferramentas conectadas estão em `core/TOOLS.md`. O roteamento de entradas e os
donos de verdade estão em `core/PROPAGATION.md` e `core/MAPA.md`.

Mantemos aqui apenas o essencial operacional:
- Conteúdo novo de marketing → `marketing/`
- Análises e e-mails avulsos → `saidas/`
- Sempre que surgirem novas marcas ou mudanças de foco, atualizar `memoria/`
