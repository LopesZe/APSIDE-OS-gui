---
name: comparar-gmb
description: >
  Compara o Google Meu Negócio de um cliente (print/envio) com um perfil ideal.
  Gera comparativo visual "antes/depois" em HTML + PNG 1080x1350 pra usar em reuniões e abordagens.
  Use quando o usuário mandar um print/screenshot do Google Meu Negócio, ou pedir "comparar GMB",
  "ver como tá o Google", "mostrar pro cliente", ou /comparar-gmb.
  Para workflow completo (diagnóstico + comparativo + apresentação PDF), use /gmb.
---

# /comparar-gmb — Comparativo Visual do Google Meu Negócio

Skill de vendas e diagnóstico. Recebe o print real do GMB do cliente + fotos anexadas → analisa o que falta → gera comparativo visual "antes/depois" pronto pra mostrar em call ou presencial.

## Dependências

- **Contexto do negócio:** `_memoria/empresa.md` (se disponível)
- **Print do cliente:** imagem enviada pelo usuário (screenshot do GMB)
- **Fotos do cliente:** imagens enviadas junto (produtos, fachada, etc)
- **Playwright:** pra renderizar HTML em PNG
- **Output vai em:** `marketing/conteudo/<NOME DO CLIENTE>/` (reutilizar pasta existente)

---

## Organização de arquivos

### Estrutura de pastas

```
marketing/conteudo/gmb-comparativo-<NOME>-<YYYY-MM-DD>/
├── diagnostico.md              ← análise em texto (score + itens)
├── gmb-comparativo.html        ← fonte do comparativo
├── diag2.js                    ← script de renderização
├── fachada.jpg                 ← foto da fachada (copia da enviada)
├── foto-1.webp                 ← fotos dos produtos (copia das enviadas)
├── foto-2.webp
├── foto-3.png
├── foto-4.png
├── foto-5.webp
├── foto-6.webp
├── foto-7.png
├── foto-8.png
└── instagram/
    └── gmb-comparativo.png     ← PNG pronto pra apresentar
```

### Regras de cópia de imagens

1. **Sempre copiar** as imagens enviadas pra pasta do projeto
2. **Renomear** com padrão simples: `foto-1.webp`, `foto-2.webp`, etc
3. **Fachada** sempre como `fachada.jpg` (independente do formato original)
4. **Manter** os formatos originais (.webp, .png, .jpg)
5. **NÃO converter** formatos — o Playwright renderiza qualquer formato

### Como copiar no PowerShell

```powershell
# Copiar fachada
Copy-Item "Caminho\da\fachada.png" "fachada.jpg"

# Copiar fotos dos produtos
Copy-Item "Caminho\foto1.webp" "foto-1.webp"
Copy-Item "Caminho\foto2.png" "foto-2.png"
# ... repetir pra cada foto
```

---

## O que a skill faz

1. **Recebe** o print/screenshot do GMB + fotos do cliente
2. **Copia** as imagens pra pasta do projeto com nomes organizados
3. **Analisa** o que está presente e o que falta (baseado nos 10 critérios do GMB Health Score)
4. **Gera** um comparativo visual lado a lado:
   - Card esquerdo = "ASSIM TÁ HOJE" (com fachada real + só as fotos que tem)
   - Card direito = "ASSIM PODE FICAR" (com fachada no destaque + todas as fotos de produtos)
5. **Renderiza** em PNG 1080x1350 pronto pra apresentar
6. **Entrega** com resumo do diagnóstico e orçamento sugerido

---

## Critérios de análise (GMB Health Score)

Ao olhar o print, verificar cada item:

| Critério | Pontos | O que verificar no print |
|---|---|---|
| **Foto de capa** | 15 | Tem foto de capa ou fica o mapa genérico? |
| **Fotos do perfil** | 15 | Quantas fotos aparecem? (0, 1-2, 3-5, 6+) |
| **Avaliações** | 15 | Tem estrelas? Quantas avaliações? Nota? |
| **Respostas do dono** | 10 | O dono responde às avaliações? |
| **Telefone** | 10 | Tem telefone cadastrado? |
| **Endereço** | 10 | Tem endereço completo? |
| **Horário** | 10 | Tem horário de funcionamento? |
| **Categoria** | 5 | Tem categoria principal + secundárias? |
| **Website** | 5 | Tem link pro site? |
| **Redes sociais** | 5 | Tem Facebook, Instagram, etc? |

**Classificação:**
- 0-30 = VERMELHO (precisa URGENTE)
- 31-60 = AMARELO (oportunidade clara)
- 61-80 = OK (já encaminhado)
- 81-100 = COMPLETO (não prospecar)

---

## Workflow

### Passo 1 — Receber e organizar arquivos

1. Receber o print/screenshot do GMB do cliente
2. Receber as fotos anexadas (produtos, fachada, etc)
3. Criar a pasta do projeto:
   ```powershell
   New-Item -ItemType Directory -Force -Path "marketing\conteudo\gmb-comparativo-<NOME>-<DATA>\instagram"
   ```
4. Copiar as imagens com nomes organizados:
   ```powershell
   Copy-Item "fachada.jpg" "marketing\conteudo\gmb-comparativo-<NOME>-<DATA>\fachada.jpg"
   Copy-Item "foto-produto.webp" "marketing\conteudo\gmb-comparativo-<NOME>-<DATA>\foto-1.webp"
   # ... pra cada foto
   ```

### Passo 2 — Analisar o print

1. Olhar cada um dos 10 critérios acima
2. Marcar o que PRESENTE e o que AUSENTE
3. Calcular o GMB Health Score atual

**CHECKPOINT:** Mostrar o diagnóstico em texto antes de gerar o visual:

```
Diagnóstico do GMB — [Nome do Cliente]
Score atual: XX/100

✅ Presença:
- [item 1]
- [item 2]

❌ Ausente:
- [item 1]
- [item 2]
- [item 3]
```

### Passo 3 — Criar o HTML comparativo

Criar `gmb-comparativo.html` com dois cards lado a lado:

**Card ESQUERDO ("ASSIM TÁ HOJE"):**
- Fundo branco, borda tracejada cinza
- Tag cinza no topo
- **Foto da fachada real** no mapa (com overlay escuro + label)
- Nome do cliente (dados reais)
- Estrelas vazias ou com nota baixa
- Botões desabilitados (cinza)
- Endereço, telefone, horário reais
- **Apenas as fotos que o cliente tem** (1 ou poucas)
- "Nenhuma avaliação" ou poucas
- "Nenhuma rede social"

**Card DIREITO ("ASSIM PODE FICAR"):**
- Fundo branco, borda sólida
- Tag verde no topo
- **Foto da fachada real no destaque** (topo do card, sem overlay)
- Nome do cliente (dados reais)
- ★★★★★ + nota boa + avaliações
- Botões ativos (azul)
- Todos os itens preenchidos com ícone verde
- **Todas as fotos reais do cliente** (8 fotos organizadas)
- 5 reviews de exemplo (avatar + nome + estrelas + texto)
- Todas as redes sociais (Facebook, Instagram, TikTok, WhatsApp)

**Estilo visual:**
- Fonte: Inter (Google Fonts)
- Cores: mesmo padrão do MazyOS (#0E1116 fundo, #F5ECD7 cream, #FF7A45 accent)
- Largura total: 1080px
- Cards com border-radius: 24px

### Passo 4 — Renderizar PNG

Criar `diag2.js` na mesma pasta:

```javascript
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1180, height: 1600 } });
  await p.goto('file://' + path.resolve(__dirname, 'gmb-comparativo.html'));
  await p.waitForTimeout(1500);
  const buf = await p.screenshot({ fullPage: true });
  fs.writeFileSync(path.resolve(__dirname, 'instagram', 'gmb-comparativo.png'), buf);
  console.log('gerado gmb-comparativo.png', buf.length, 'bytes');
  await b.close();
})();
```

Rodar:

```bash
NODE_PATH="<pasta-com-node_modules>/node_modules" node diag2.js
```

### Passo 5 — Entregar com proposta

Mostrar o PNG gerado + resumo:

```
Comparativo pronto!

Score atual do [Nome]: XX/100
O que falta: [lista rápida]

Solução possível:
- [solução 1]
- [solução 2]

Faixa de preço: R$ XXX–XXX

Quer que eu monte uma proposta?
```

---

## Regras

- **Sempre copiar** as imagens enviadas pra pasta do projeto antes de gerar o HTML
- **Fachada** sempre no destaque dos dois cards (fundo do mapa)
- **Card "bad"** deve ser fiel ao que o cliente tem — usar as fotos que ele tem (se só tem 1, mostra 1)
- **Card "good"** deve mostrar o IDEAL — usar TODAS as fotos enviadas (8+)
- **Dados reais** do cliente sempre (nome, endereço, telefone, horário)
- Reviews de exemplo no card "good" devem ser genéricos mas realistas
- Sempre renderizar em 1080x1350 (proporção Instagram)
- Salvar sempre na pasta `marketing/conteudo/gmb-comparativo-<NOME>-<DATA>/`
- PNG deve ser pronto pra apresentar em call ou levar presencialmente
