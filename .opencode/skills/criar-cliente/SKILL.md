# Skill: Criar Cliente

Cria um novo "sistema operacional" para um cliente a partir do template em `clientes/_template/`.

## Gatilho

`/criar-cliente` ou quando o usuário pedir "criar OS do cliente", "novo cliente", "setup cliente".

## Fluxo

### 1. Coletar dados do cliente

Pergunte ao usuário (uma pergunta por vez ou todas de uma vez):

| Dado | Placeholder | Obrigatório |
|------|------------|-------------|
| Nome do responsável | `{{CLIENT_NAME}}` | Sim |
| Nome do negócio | `{{BUSINESS_NAME}}` | Sim |
| Tipo de atividade | `{{BUSINESS_TYPE}}` | Sim |
| Descrição do negócio | `{{BUSINESS_DESCRIPTION}}` | Sim |
| Equipe (Solo / Equipe de X) | `{{TEAM_SIZE}}` | Sim |
| Marca principal | `{{PRIMARY_BRAND}}` | Sim |
| Handle Instagram | `{{HANDLE}}` | Não |
| Slogan/Tagline | `{{TAGLINE}}` | Sim |
| WhatsApp (numérico, com DDI) | `{{WHATSAPP}}` | Sim |
| Email | `{{EMAIL}}` | Sim |
| Cor primária (hex) | `{{PRIMARY_COLOR}}` | Sim |
| Cor de destaque (hex) | `{{ACCENT_COLOR}}` | Sim |
| Cor de fundo (hex) | `{{BG_COLOR}}` | Sim |
| Missão do negócio | `{{MISSION}}` | Não |
| Escopo do agente | `{{BUSINESS_SCOPE}}` | Não |

### 2. Gerar slug do nome

Converta o nome do negócio para um slug amigável:
- "Salão de Festas Maria" → `salao-festas-maria`
- "Clínica Dr. João" → `clinica-dr-joao`
- "Restaurante Sabor da Terra" → `restaurante-sabor-da-terra`

Use minúsculas, acentos removidos, espaços viram hífens.

### 3. Copiar template

```bash
cp -r clientes/_template clientes/{slug}
```

### 4. Substituir placeholders

Em TODOS os arquivos da pasta `clientes/{slug}/`, substitua todos os `{{PLACEHOLDER}}` pelos valores coletados.

Arquivos prioritários (verifique se foram substituídos):
- `core/IDENTITY.md`
- `core/USER.md`
- `core/AGENTS.md`
- `core/TOOLS.md`
- `core/PROPAGATION.md`
- `memoria/empresa.md`
- `memoria/preferencias.md`
- `memoria/estrategia.md`
- `identidade/design-guide.md`
- `identidade/marcas.md`
- `site/tailwind.config.ts`
- `site/app/globals.css`
- `site/app/layout.tsx`
- `site/components/Nav.tsx`
- `site/components/Hero.tsx`
- `site/components/Footer.tsx`
- `site/components/FinalCTA.tsx`
- `site/package.json`
- `README.md`

### 5. Calcular cores derivadas

A partir das 3 cores principais, gere:
- `{{BG_COLOR_SOFT}}` = versão 10% mais clara de BG_COLOR
- `{{INK_COLOR}}` = versão mais escura de BG_COLOR (use #0E0F1A como padrão)

### 6. Git init + commit

```bash
cd clientes/{slug}
git init
git add .
git commit -m "Setup inicial do OS para {BUSINESS_NAME}"
```

### 7. Perguntar sobre GitHub

Pergunte ao usuário:
> "Criar repo no GitHub e fazer push?"

Se sim:
```bash
gh repo create {slug}-os --private --source=. --push
```

Se não, informe que o repo está pronto localmente.

### 8. Confirmar

Mostre o resumo:
```
✅ OS do {BUSINESS_NAME} criado!

📁 Localização: clientes/{slug}/
🌐 Site: cd clientes/{slug}/site && npm run dev
📊 Skills: 26 skills disponíveis
📦 Git: commit inicial feito

Próximos passos:
1. Configure os tokens no .env (se necessário)
2. Crie a identidade visual (cores, logo)
3. Preencha a memória em memoria/
4. Inicie o site: cd site && npm run dev
```

## Notas importantes

- O template está em `clientes/_template/` — nunca edite esse diretório diretamente
- Cada cliente é uma cópia independente
- O OS do cliente NÃO tem acesso ao seu APSIDE-OS pessoal
- Skills de venda e prospecção NÃO estão incluídas (são suas)
