# Clientes

Cada cliente tem seu próprio "sistema operacional" — um repo isolado
com governança, memória, skills e site customizados.

## Criar novo cliente

Use a skill `/criar-cliente` dentro do opencode. Ela vai:
1. Perguntar os dados do cliente
2. Copiar o template
3. Substituir todos os placeholders
4. Criar o git init
5. Opcionalmente fazer push pro GitHub

## Estrutura

```
clientes/
├── _template/              ← template base (não mexer diretamente)
│   ├── core/               ← 14 arquivos de governança
│   ├── memoria/            ← memória do negócio
│   ├── identidade/         ← identidade visual
│   ├── skills/             ← 26 skills prontas
│   ├── vendas/             ← scripts de venda
│   ├── templates/          ← templates reutilizáveis
│   ├── marketing/          ← templates de conteúdo
│   ├── scripts/            ← scripts de automação
│   └── site/               ← landing page Next.js
├── salao-festas-maria/     ← OS do Salão Maria (exemplo)
├── clinica-dr-joao/        ← OS da Clínica Dr. João (exemplo)
└── README.md               ← este arquivo
```

## O que o cliente recebe

| Componente | Descrição |
|-----------|-----------|
| **Core** | Governança completa (regras, rotinas, mapas) |
| **Memória** | Sistema de memória persistente |
| **Skills** | 26 skills (GMB, SEO, conteúdo, visual, tráfego) |
| **Vendas** | Scripts de venda genéricos |
| **Templates** | Templates de carrossel, post, story |
| **Marketing** | Templates de conteúdo e legendas |
| **Scripts** | Automação (Instagram, Facebook, imagens) |
| **Site** | Landing page Next.js com identidade customizada |

## O que o cliente NÃO recebe

Skills de venda e prospecção (ficam com você):
- vender, prospecar, prospecar-instagram, apify-lead-generation
- salvar, auditar, atualizar, novo-projeto, context-agent, cred-omega

## Template

O template está em `_template/`. Nunca edite diretamente — sempre crie
um novo cliente a partir dele usando `/criar-cliente`.
