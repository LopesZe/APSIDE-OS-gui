# Prospecar Instagram

Prospecção de clientes locais via Instagram. Encontra negócios com perfil ativo no Instagram e gera kit completo de vendas (apresentação + script + render).

## Gatilho

Quando o usuário pedir "prospecar instagram", "achar clientes no instagram", "encontrar perfis", ou `/prospecar-instagram`.

## Fluxo

### REgra de ouro: NÃO PERGUNTAR. APENAS FAZER.

O usuário não quer ser perguntado. Ele quer resultado. Se ele não especificou nicho/cidade, usar `memoria/empresa.md` como referência. Se não tiver referência, escolher nicho e cidade relevantes e executar o fluxo completo.

**O fluxo é: descobrir → extrair → qualificar → gerar kit completo. Tudo de uma vez. Sem perguntas no meio.**

### 1. Definir parâmetros

Se o usuário não especificou:
- **Nicho:** usar `memoria/empresa.md` ou escolher nicho local comum (clínicas, restaurantes, barbearias, lojas, academias)
- **Cidade:** usar `memoria/empresa.md` ou Ponta Grossa (base atual)
- **Máximo:** 20 perfis

### 2. Descobrir perfis via WebSearch

Rodar buscas no Google pra encontrar perfis de Instagram do nicho na cidade:

```
"instagram" "{nicho}" "{cidade}"
"@" "{nicho}" "{cidade}" instagram
site:instagram.com "{nicho}" "{cidade}"
"{nicho}" "{cidade}" instagram perfil
```

Para cada resultado:
- Extrair username do Instagram (de URLs instagram.com/{username})
- Filtrar: excluir perfis pessoais, influencers, páginas genéricas
- Manter apenas: negócios locais, clínicas, lojas, restaurantes, escritórios

### 3. Extrair dados do perfil (Apify)

```bash
node scripts/instaloader/extrair-perfil.js {username1} {username2} ...
```

O script retorna JSON com: username, full_name, biography, external_url, followers, followees, is_private, is_business_account, category, latest_posts.

**Filtros pós-extração:**
- Excluir privados
- Excluir < 500 seguidores
- Excluir sem posts > 60 dias
- Marcar link na bio como "tem site potencial"

### 4. Qualificar via WebSearch (verificação cruzada)

Para cada perfil que passou no filtro:

**Busca 1 — GMB:**
```
"{full_name}" "{cidade}" site:google.com/maps
```
- Encontrou → tem GMB (verificar se está bem estruturado)
- Não encontrou → SEM GMB = lead quente

**Busca 2 — Site:**
```
"{full_name}" "{cidade}" site oficial
```

**Busca 3 — Avaliações:**
```
"{full_name}" "{cidade}" avaliações reviews
```

**Busca 4 — WhatsApp/Contato:**
```
"{full_name}" "{cidade}" whatsapp telefone
```

### 5. Score (0-100)

| Critério | Pontos | Regra |
|---|---|---|
| Seguidores | 20 | >5k=20, >2k=15, >1k=10, >500=5 |
| Engajamento | 15 | Bio + posts recentes=15, bio vazia=5, sem posts=0 |
| **Sem GMB** | **25** | Não tem=25, tem mas fraco=10, bem estruturado=0 |
| **Sem site** | **25** | Só Instagram=25, link quebrado/appbarber=15, tem site=0 |
| Dados de contato | 10 | Tel/email na bio=10, tem nos posts=5, nada=0 |
| Categoria definida | 5 | Nicho claro=5, genérico=0 |

### 6. Classificação

| Faixa | Cor | Ação |
|---|---|---|
| 0-30 | 🔴 VERMELHO | Prospecar urgente |
| 31-60 | 🟡 AMARELO | Oportunidade clara |
| 61-80 | 🟢 VERDE | Pode melhorar |
| 81-100 | ⚪ COMPLETO | Não prospecar |

### 7. Gerar saída

Salvar em `dados/prospeccao-instagram-{nicho}-{cidade}-{data}.md`

### 8. Gerar kit completo (NÃO PERGUNTAR)

Para cada lead qualificado (top 3 no mínimo), gerar automaticamente:

1. **Pasta** → `dados/{nome-slug}-{data}/`
2. **dados.md** → dados brutos da prospecção
3. **apresentacao.html** → 6 páginas A4 landscape (template: `dados/barbearia-xv-2026-09-11/apresentacao.html`)
4. **script-abordagem.html** → DM + presencial + follow-up (template: `dados/barbearia-xv-2026-09-11/script-abordagem.html`)
5. **dados.html** → dados visuais + score (template: `dados/barbearia-xv-2026-09-11/dados.html`)
6. **index.html** → painel com links (template: `dados/barbearia-xv-2026-09-11/index.html`)
7. **render.cjs** → script de render (template: `dados/barbearia-xv-2026-09-11/render.cjs`)
8. **Rodar render** → gerar PNGs + PDF
9. **prospeccao.md** → lista completa dos leads

## Regras de padronização

### Dados
- **Sempre verificar localização** — não assumir cidade. Se o Instagram não mostra, buscar no Google
- **Sempre verificar GMB** — buscar no Google Maps. Se tem, verificar se está bem estruturado
- **Sempre verificar WhatsApp** — buscar nos posts e bio
- **Sempre verificar link na bio** — extrair do Apify e confirmar

### Navegação
- **NUNCA usar target="_blank"** — todos os links devem abrir na mesma página
- **Exceção:** links pra PDF e PNGs (podem abrir em nova aba)

### Nomes
- **Usar o nome que o negócio usa** — se diz "Salão de Festas", não "Espaço de Festas"
- **Slug do nome** → lowercase, sem acentos, separado por hífens

### Score
- **Recalcular se dados mudarem** — se descobrir que tem GMB, atualizar score
- **Mostrar critérios** — sempre mostrar pontuação por critério

### Templates
- **Usar templates mais recentes** como base (barbearia-xv ou betel-barbearia)
- **Adaptar conteúdo** — nunca copiar texto literal de outro lead
- **Manter design** — cores, fontes, layout devem ser idênticos

## Ferramentas necessárias

- **WebSearch** — descoberta + verificação
- **Node.js** — extração Apify
- **Apify API** — dados Instagram (`APIFY_API_TOKEN` no `.env`)

## Arquivos relacionados

- Script de extração: `scripts/instaloader/extrair-perfil.js`
- Templates: `dados/barbearia-xv-2026-09-11/` (mais recente)
- CRM: `dados/crm.md`

## Regras

- Nunca inventar dados
- Respeitar rate limits (3s entre requests Apify)
- Excluir privados automaticamente
- Foco em negócios LOCAIS
- Salvar tudo em `dados/`
- **NÃO PERGUNTAR — apenas fazer**
