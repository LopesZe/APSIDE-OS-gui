# APSIDE-OS

**Sistema operacional universal para negócios.**

Um framework completo pra transformar qualquer negócio num sistema operacional inteligente, com agente de IA, automações, dashboard e governance integrada.

---

## O que vem incluído

### Core (Governança)
14 arquivos que formam a "constituição" do sistema:
- Regras, rotinas, roteamento de entradas, donos de verdade
- Tudo versionado no git como "sinal de vida"

### Memória
Sistema de memória persistente que o agente lê antes de cada resposta:
- Perfil do negócio
- Tom de voz e preferências
- Estratégia e prioridades
- Pendências e decisões

### Skills
25+ skills profissionais prontas:
- **Core:** abrir, instalar, salvar, auditar, mapear-rotinas
- **Conteúdo:** carrossel, post-instagram, publicar-tema
- **SEO/Ads:** seo, anuncio-google, relatorio-ads
- **Comunicação:** email-profissional, responder-avaliacoes
- **Dados:** analisar-dados, data-storytelling
- **Growth:** growth-engine, apify-lead-generation

### Sistema (Bot + Dashboard)
- **Bot Telegram:** recebe PDFs de NF-e e registra automaticamente
- **Dashboard:** painel web com vendas, clientes, produtos, comissões
- **MCP Server:** 8 ferramentas expostas pro agente

### Scripts
Scripts genéricos pra:
- Publicar no Instagram/Facebook (Meta Graph API)
- Gerar imagens com IA (DALL-E)
- Gerar leads (Apify)

---

## Setup rápido

```bash
# 1. Clone ou copie esta pasta
# 2. Execute o setup
node setup.js

# 3. Configure os tokens
# Edite sistema/.env com suas credenciais

# 4. Instale dependências do sistema
cd sistema && npm install

# 5. Inicie o bot e o dashboard
npm run bot      # Bot Telegram
npm run dev      # Dashboard
```

Para detalhes completos, veja [SETUP.md](SETUP.md).

---

## Estrutura

```
APSIDE-OS/
├── core/           # 14 arquivos de governança
├── memoria/        # Sistema de memória
├── identidade/     # Identidade visual
├── skills/         # 25+ skills
├── sistema/        # Bot + Dashboard + MCP
├── templates/      # Templates reutilizáveis
├── scripts/        # Scripts genéricos
├── marketing/      # Estrutura pra conteúdo
├── archive/        # Arquivo (nunca deletar)
├── saidas/         # Documentos pontuais
├── dados/          # Drop zone pra análise
└── reports/        # Relatórios de auditoria
```

---

## Como funciona

1. **O agente lê o contexto** antes de cada resposta (BOOT.md)
2. **A memória persiste** entre sessões (memoria/)
3. **As skills automatizam** tarefas recorrentes (skills/)
4. **O bot processa** NFs automaticamente (sistema/)
5. **O dashboard mostra** tudo em tempo real (sistema/dashboard/)
6. **Tudo versionado** no git (HEARTBEAT.md)

---

## Para desenvolvedores

O APSIDE-OS é feito pra ser **customizável**:
- Substitua `{{placeholders}}` pelos dados do cliente
- Crie skills novas seguindo o template em `templates/skills/`
- Adicione scripts em `scripts/`
- Estenda o dashboard em `sistema/dashboard/`

---

## Licença

Uso interno. Adaptado livremente para qualquer negócio.
