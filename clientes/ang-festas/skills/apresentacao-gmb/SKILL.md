---
name: apresentacao-gmb
description: >
  Gera apresentação completa do Google Meu Negócio do cliente em PDF A4 landscape (6 páginas).
  Inclui: capa, diagnóstico com score, o que falta vs o que funciona, comparativo antes/depois com fotos reais, 3 planos de serviço, e CTA com logo APSIDE.
  Use quando o usuário pedir "apresentação GMB", "PDF pro cliente", "montar apresentação", "apresentação A4", ou /apresentacao-gmb.
---

# /apresentacao-gmb — Apresentação Completa do GMB

Skill de vendas presenciais. Gera um PDF profissional de 6 páginas (A4 landscape) pra mostrar ao dono do negócio em reunião ou enviar por WhatsApp/email.

## Dependências

- **Dados do diagnóstico:** resultado do `/diagnostico-gmb` (score, critérios, fotos)
- **Fotos do cliente:** imagens copiadas na pasta do projeto
- **Logo APSIDE:** `identidade/LOGO FUNDO ESCURO.png`
- **Playwright:** pra renderizar HTML → PNG e gerar PDF
- **Output vai em:** `marketing/conteudo/<NOME DO CLIENTE>/` (reutilizar pasta existente)

---

## Estrutura da apresentação (6 páginas)

| Página | Conteúdo |
|--------|----------|
| 1 | **Capa** — nome do negócio, nota, avaliações, score, logo APSIDE |
| 2 | **Diagnóstico** — score 0-100 com grid de 10 critérios (✓/⚠/✗) |
| 3 | **O que falta vs funciona** — dois cards: oportunidades perdidas vs pontos fortes |
| 4 | **Antes & Depois** — comparativo visual com fotos reais do cliente (photo picker) |
| 5 | **Planos** — 3 opções de serviço com preços e prazos |
| 6 | **CTA** — contato do cliente + logo APSIDE |

---

## Planos de serviço (padrão)

| Solução | Faixa de Preço | Itens |
|---------|----------------|-------|
| **Presença no Google** | R$ 297–497 | 8 fotos, 3 serviços, respostas (30d), horários, WhatsApp |
| **Google + Landing Page** | R$ 697–1.200 | Tudo do anterior + landing page + 4 carrosséis + SEO local + CTA WhatsApp |
| **Projeto de Estruturação** | R$ 1.500–5.000 | Tudo anterior + organização de captação + configuração de follow-up |

**Regra:** a solução é definida pelo problema identificado, não por uma tabela de preços.

---

## Workflow

### Passo 1 — Verificar se já tem diagnóstico

1. Checar se existe pasta `marketing/conteudo/gmb-comparativo-<NOME>-<DATA>/`
2. Se existir, ler `diagnostico.md` pra pegar score e critérios
3. Se não existir, rodar `/diagnostico-gmb` primeiro (ou pedir os dados ao usuário)

### Passo 2 — Organizar fotos

1. Verificar se existem fotos na pasta do projeto (`fachada.webp`, `foto-1.webp`, etc)
2. Se não existirem, pedir ao usuário que envie as fotos
3. Copiar com nomes padronizados:
   - `FACHADA.webp` (ou .jpg/.png) → fachada
   - `CARNES.webp`, `CARNES 2.webp`, etc → fotos de produtos
   - `INTERNA.webp`, `INTERNA 2.webp`, etc → fotos internas

### Passo 3 — Criar HTML da apresentação

Criar `apresentacao-gmb.html` na pasta do projeto, **copiando o template:**

```
.opencode/skills/apresentacao-gmb/template/apresentacao-gmb.html
```

**O template já tem:**
- Photo picker em todos os slots (página 4) — hover mostra botão `+` verde
- Logo APSIDE na página 1 (capa) e página 6 (CTA)
- CSS completo com estilos de photo slot
- JavaScript `pickPhoto()` pra selecionar arquivo

**Substituir os comentários `<!-- EDITAR: ... -->`** com os dados do cliente:
- `<!-- EDITAR: NOME -->` → nome real do cliente
- `<!-- EDITAR: CIDADE/ESTADO -->` → cidade e estado
- `<!-- EDITAR: NOTA -->` → nota média (ex: 4.6)
- `<!-- EDITAR: AVALIACOES -->` → quantidade de avaliações (ex: 38)
- `<!-- EDITAR: SCORE -->` → score do diagnóstico (ex: 55)
- `<!-- EDITAR: CLASSIFICACAO -->` → "Ótimo" / "Precisa de melhorias" / "Crítico"
- `<!-- EDITAR: DESCRIÇÃO DO DIAGNÓSTICO -->` → texto do diagnóstico
- `<!-- EDITAR: MÊS ANO -->` → mês e ano atual
- 10 critérios na página 2 (usar classes `criteria-ok`, `criteria-warn`, `criteria-fail`)
- 4 problemas + 4 pontos fortes na página 3
- Dados das colunas "Antes" e "Depois" na página 4

**Para adicionar fotos:** basta abrir o HTML no navegador, passar o mouse num slot e clicar no `+`. A foto aparece automaticamente.

### Passo 4 — Renderizar

Copiar `render-apresentacao.cjs` de uma pasta existente (ex: `eletro-lima-raio-x/`) ou criar:

```javascript
const { chromium } = require('C:/Users/guilo/APSIDE-OS/marketing/conteudo/carrossel-presenca-2026-08-25/node_modules/playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1122, height: 794 } });
  
  const htmlPath = path.resolve(__dirname, 'apresentacao-gmb.html');
  await p.goto('file://' + htmlPath);
  await p.waitForTimeout(2000);

  const pages = await p.$$('.page');
  console.log(`Encontradas ${pages.length} páginas`);

  const instagramDir = path.resolve(__dirname, 'instagram');
  if (!fs.existsSync(instagramDir)) fs.mkdirSync(instagramDir);

  for (let i = 0; i < pages.length; i++) {
    const buf = await pages[i].screenshot({ type: 'png' });
    const filename = `pagina-${String(i + 1).padStart(2, '0')}.png`;
    fs.writeFileSync(path.resolve(instagramDir, filename), buf);
    console.log(`Gerado ${filename} (${buf.length} bytes)`);
  }

  const fullBuf = await p.screenshot({ fullPage: true, type: 'png' });
  fs.writeFileSync(path.resolve(instagramDir, 'apresentacao-completa.png'), fullBuf);
  console.log(`Gerado apresentacao-completa.png (${fullBuf.length} bytes)`);

  await p.pdf({
    path: path.resolve(instagramDir, 'apresentacao-gmb.pdf'),
    landscape: true,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('Gerado apresentacao-gmb.pdf');

  await b.close();
})();
```

Rodar:

```powershell
node render-apresentacao.cjs
```

### Passo 5 — Entregar

Mostrar resumo no chat:

```
Apresentação pronta!

📄 PDF: instagram/apresentacao-gmb.pdf
🖼️ PNGs: instagram/pagina-01.png a pagina-06.png
📊 Score do diagnóstico: XX/100

Páginas:
1. Capa + logo APSIDE
2. Diagnóstico (10 critérios)
3. O que falta vs funciona
4. Antes & Depois (fotos reais com photo picker)
5. Soluções (Presença no Google / Google + Landing / Estruturação)
6. CTA + logo APSIDE

Pra adicionar fotos: abra o .html no navegador → hover no slot → clique no +
```

---

## Regras

- **Sempre usar fotos reais** do cliente — o template tem photo picker pra facilitar
- **Logo APSIDE** sempre na página 1 (capa) e página 6 (CTA)
- **Soluções** nunca ter "Tudo da solução X" — listar todos os itens explicitamente
- **CTA** não pode parecer botão — é texto simples
- **Viewport** do render sempre 1122×794 (A4 landscape exato)
- **Salvar** sempre na pasta `marketing/conteudo/gmb-comparativo-<NOME>-<DATA>/`
- **PDF** pronto pra enviar por WhatsApp ou imprimir
- **Photo picker** funciona só no navegador — no render as fotos já selecionadas ficam no PNG/PDF
