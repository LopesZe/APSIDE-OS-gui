---
name: gmb-master
description: >
  Workflow completo do Google Meu Negócio. Roda as 3 etapas juntas:
  diagnóstico (score) → comparativo visual (PNG 1080x1350) → apresentação completa (PDF A4 6 páginas).
  Use quando o usuário pedir "analisar Google", "ver GMB", "GMB do cliente", "Google Meu Negócio",
  ou /gmb. Esta skill orquestra diagnostico-gmb + comparar-gmb + apresentacao-gmb.
---

# /gmb — Workflow Completo do Google Meu Negócio

Skill master que roda todas as etapas de análise do GMB de um cliente em sequência.
O usuário pode pedir só uma etapa ou todas juntas.

## Dependências

- Print/screenshot do GMB do cliente (imagem)
- Fotos do cliente (fachada, produtos, internas)
- Playwright (já instalado em `marketing/conteudo/carrossel-presenca-2026-08-25/node_modules`)
- Logo APSIDE: `identidade/LOGO FUNDO ESCURO.png`

---

## Fluxo completo (3 etapas)

### Etapa 1: Diagnóstico (`/diagnostico-gmb`)

**O que faz:** Analisa o print do GMB, calcula score (0-100), gera relatório em markdown.

**Saída:**
- `marketing/diagnosticos/gmb-[nome]-[data].md` — relatório completo
- Score e classificação (VERMELHO / AMARELO / OK / COMPLETO)
- Lista do que tem vs o que falta

**Prompt pra rodar:**
> "Analise o GMB do cliente [NOME]. Print: [imagem]. Fotos: [imagens]. Gere diagnóstico completo com score."

---

### Etapa 2: Comparativo Visual (`/comparar-gmb`)

**O que faz:** Gera comparativo "antes/depois" lado a lado em PNG 1080x1350 (proporção Instagram).

**Saída:**
- `marketing/conteudo/gmb-comparativo-<NOME>-<DATA>/instagram/gmb-comparativo.png`
- Card esquerdo: "ASSIM TÁ HOJE" (com o que o cliente tem)
- Card direito: "ASSIM PODE FICAR" (com o ideal)

**Prompt pra rodar:**
> "Gere comparativo visual do GMB do [NOME]. Dados: [score, critérios]. Fotos: [lista]. Pasta: [caminho]"

---

### Etapa 3: Apresentação Completa (`/apresentacao-gmb`)

**O que faz:** Gera apresentação profissional em PDF A4 landscape (6 páginas) pra mostrar ao cliente.

**Saída:**
- `marketing/conteudo/gmb-comparativo-<NOME>-<DATA>/instagram/apresentacao-gmb.pdf`
- `marketing/conteudo/gmb-comparativo-<NOME>-<DATA>/instagram/pagina-01.png` a `pagina-06.png`
- Páginas: capa → diagnóstico → falta vs funciona → antes/depois → planos → CTA

**Prompt pra rodar:**
> "Monte apresentação completa do GMB do [NOME] em PDF. Dados: [diagnóstico]. Fotos: [lista]. Planos: [valores]."

---

## Como rodar (seqüência automática)

Quando o usuário pedir `/gmb` ou "analisar Google do [NOME]", rodar na ordem:

```
1. Receber print + fotos do cliente
2. Verificar/criar pasta do projeto:
   marketing/conteudo/<NOME DO CLIENTE>/
   (se o usuário já criou, USAR essa pasta)

3. RODAR ETAPA 1 (diagnóstico):
   → Analisar print, calcular score, gerar diagnostico.md
   → Mostrar resultado no chat

4. RODAR ETAPA 2 (comparativo):
   → Copiar fotos com nomes organizados
   → Gerar HTML comparativo
   → Renderizar PNG 1080x1350

5. RODAR ETAPA 3 (apresentação):
   → Gerar HTML da apresentação (6 páginas)
   → Renderizar PNGs + PDF

6. ENTREGAR RESUMO:
   - Score: XX/100
   - Comparativo: instagram/gmb-comparativo.png
   - PDF: instagram/apresentacao-gmb.pdf
   - Solução sugerida: [descrição do problema e solução]
   - Faixa de preço: R$ XXX–XXX
```

---

## Modo parcial

O usuário pode pedir só uma etapa:

| Pedido do usuário | Etapa rodada |
|---|---|
| "diagnóstico GMB", "quanto falta no Google" | Só Etapa 1 |
| "comparar GMB", "mostrar pro cliente" (formato Instagram) | Só Etapa 2 |
| "apresentação GMB", "PDF pro cliente", "montar apresentação" | Só Etapa 3 |
| "analisar Google", "ver GMB", `/gmb` | **Todas as 3** |

---

## Organização de arquivos

**Regra:** SEMPRE usar a pasta que o usuário criou (ex: `marketing/conteudo/LOJA MIX/`).
Se não existir pasta, criar `marketing/conteudo/<NOME DO CLIENTE>/`.

```
marketing/conteudo/<NOME DO CLIENTE>/
├── FACHADA.png                    ← fotos originais do cliente
├── FOTO 1.png
├── FOTO 2.png
├── ...
├── diagnostico.md                 ← da Etapa 1
├── gmb-comparativo.html           ← da Etapa 2
├── diag2.cjs                      ← render Etapa 2
├── apresentacao-gmb.html          ← da Etapa 3
├── render-apresentacao.cjs        ← render Etapa 3
└── instagram/
    ├── gmb-comparativo.png        ← comparativo 1080x1350
    ├── apresentacao-gmb.pdf       ← PDF A4 landscape
    ├── apresentacao-completa.png  ← imagem contínua
    └── pagina-01.png a pagina-06.png
```

**NÃO criar** pasta `gmb-comparativo-<NOME>-<DATA>` — tudo na pasta do cliente.

---

## Regras

- **Sempre rodar Etapa 1 primeiro** — os dados do diagnóstico alimentam as outras
- **Fotos reais** do cliente em todas as etapas — nunca placeholders
- **Logo APSIDE** só na Etapa 3 (página 6 da apresentação)
- **Planos** sempre com todos os itens listados (nunca "Tudo do plano X")
- **Viewport** do render: 1122×794px (A4 landscape)
- **umar Playwright** já instalado em `marketing/conteudo/carrossel-presenca-2026-08-25/node_modules`
- **Output** sempre na pasta do cliente (reutilizar pasta existente, não criar pasta nova com data)
