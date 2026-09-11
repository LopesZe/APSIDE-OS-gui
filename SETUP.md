# SETUP — Guia de instalação

Guia completo pra configurar o APSIDE-OS pro seu negócio.

---

## Pré-requisitos

- Node.js 18+
- Git
- Conta no Supabase (gratuito)
- Bot Telegram (BotFather)

---

## 1. Setup interativo

```bash
cd APSIDE-OS
node setup.js
```

O setup vai perguntar:
- Nome do responsável e do negócio
- Tipo de atividade
- Marcas que representa
- Contato (WhatsApp, Telegram)
- Credenciais do Supabase e Telegram

Ele vai preencher automaticamente todos os `{{placeholders}}` nos arquivos.

---

## 2. Configurar Supabase

1. Crie um projeto no [supabase.com](https://supabase.com)
2. Vá em SQL Editor
3. Cole e execute o conteúdo de `sistema/schema.sql`
4. Copie a URL e a Key do projeto
5. Cole em `sistema/.env` (se o setup não pediu)

---

## 3. Configurar Bot Telegram

1. Fale com o [@BotFather](https://t.me/BotFather) no Telegram
2. Crie um bot novo: `/newbot`
3. Copie o token
4. Crie um grupo, adicione o bot
5. Configure tópicos (se for fórum):
   - Tópico "geral" → anote o ID
   - Tópico "nf" → anote o ID
6. Atualize `sistema/topic_ids.json`
7. Adicione o token em `sistema/.env`

---

## 4. Instalar dependências

```bash
cd sistema
npm install
```

---

## 5. Iniciar

```bash
# Bot Telegram (em segundo plano)
npm run bot

# Dashboard (abre no navegador)
npm run dev
```

O dashboard abre em `http://localhost:3000`.

---

## 6. Personalizar

### Identidade visual
Edite `identidade/design-guide.md` com suas cores, fontes e logo.

### Tom de voz
Edite `memoria/preferencias.md` com seu estilo de comunicação.

### Estratégia
Edite `memoria/estrategia.md` com suas prioridades.

### Skills
Crie skills novas seguindo o template em `templates/skills/skill-template.md`.

---

## 7. Versionar

```bash
# Criar repositório no GitHub
gh repo create meu-apside-os --private --source=. --push

# Ou manualmente
git remote add origin https://github.com/usuario/meu-apside-os.git
git push -u origin main
```

---

## Solução de problemas

### Bot não conecta
- Verifique o token no `.env`
- Verifique se o bot está no grupo
- Verifique os IDs dos tópicos em `topic_ids.json`

### Dashboard não abre
- Verifique se o Supabase está configurado
- Verifique o `.env` em `sistema/`
- Execute `npm install` em `sistema/`

### Erro de permissão no git
- Verifique se o repositório existe no GitHub
- Verifique as credenciais do git
