# APSIDE-OS

**Sistema operacional do negócio da APSIDE.**

Estrutura de governança, memória e skills que o agente (opencode) lê antes de cada resposta.

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
Skills de entrega (GMB, raio-x, SEO, venda, conteúdo) em `.opencode/skills/`
— índice em `core/SKILLS.md`.

### Scripts
Scripts genéricos pra:
- Publicar no Instagram/Facebook (Meta Graph API)
- Gerar imagens com IA (HTML+CSS → PNG via puppeteer)
- Gerar leads (Apify)

---

## Setup rápido

```bash
# 1. Clone ou copie esta pasta
# 2. Abra no opencode — o BOOT.md carrega o contexto
```

---

## Estrutura

```
APSIDE-OS/
├── core/           # 14 arquivos de governança
├── memoria/        # Sistema de memória
├── identidade/     # Identidade visual
├── .opencode/      # Skills
├── templates/      # Templates reutilizáveis
├── scripts/        # Scripts genéricos
├── marketing/      # Estrutura pra conteúdo
├── analise/        # Análises (raiox, SEO, YouTube)
├── archive/        # Arquivo (nunca deletar)
├── saidas/         # Documentos pontuais
├── dados/          # Drop zone pra análise
└── reports/        # Relatórios de auditoria
```

---

## Como funciona

1. **O agente lê o contexto** antes de cada resposta (BOOT.md)
2. **A memória persiste** entre sessões (memoria/)
3. **As skills automatizam** tarefas recorrentes (.opencode/skills/)
4. **Tudo versionado** no git (HEARTBEAT.md)

---

## Para desenvolvedores

O APSIDE-OS é feito pra ser **customizável**:
- Crie skills novas seguindo o template em `templates/skills/`
- Adicione scripts em `scripts/`

---

## Licença

Uso interno.
