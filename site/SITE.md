# Site Institucional APSIDE

## O que é

Site institucional da APSIDE pra vender serviços de presença digital pra negócios locais. Não é apresentação pro cliente (aquilo ficou em `site/antigo/`). É o site que converte visitante em lead.

## Estrutura

```
site/
├── modelos/                  # 3 opções de design (teste)
│   ├── modelo-1-impacto.html
│   ├── modelo-2-elegancia.html
│   ├── modelo-3-fluxo.html
│   └── modelo-final.html     # ← Modelo escolhido (base, não mexer)
├── index.html                # Site vivo (02/10/2026) — fechado a partir do modelo-final
├── _preview-hero.png         # Screenshot de verificação (02/10)
├── _preview-full.png         # Screenshot full page (02/10)
└── SITE.md                   # Este arquivo
```

## Modelo final — Decisões de design

- **Layout:** Hero centralizado (texto + botoes), stats row abaixo, servicos alternando texto/visual, processo flutuante, CTA
- **Nav:** Começa solida (opaca), vira glass translúcida ao rolar. Formato pill, centralizada
- **Partículas:** 180 pontos simulando céu noturno. 3 padroes de brilho independentes (suave, irregular, flicker). Interação com mouse (desorganiza e volta). Mais fortes que o normal
- **Cores:** Preto e branco. Sem verde. `%` nos stats em cinza claro
- **Service cards:** Mocks detalhados com **negocio ficticio "Vitália
  Odontologia"** (odontologia, Centro, 4,9 · 127 avaliacoes, domínio
  vitaliaodontologia.com.br — verificado inexistente) nos 3 exemplos (06/10/2026).
  Borda com luz percorrendo no hover (conic-gradient, 6s por volta)
- **Processo:** Numeros flutuando sem moldura. Hover revela fundo sutil
- **Fonte:** DM Sans (titulos) + Plus Jakarta Sans (corpo) + JetBrains Mono (metricas/badges) — design-guide v3 (06/10/2026)
- **Animacoes:** GSAP + ScrollTrigger. Entradas suaves com power2
- **Copy:** reposicionamento AI-First (06/10/2026). Consultoria AI-First focada em
  vendas: frase-guia no CTA, Google como meio, contatos qualificados que viram
  venda. Sem tabela de servicos generica
- **Modal "Saiba mais":** layout vertical (06/10/2026) — exemplo em cima sem
  quadrado atrás (clone do `service-visual` com bg/borda zerados e `style`
  limpo pra nao herdar o transform do GSAP), texto embaixo, CTA alinhado à
  direita, X **fora** da caixa (`.modal-close` em `top:-44px`, modal com
  `overflow: visible` + `.modal-body` com scroll). Max-width 452px → conteudo
  418px = mesmo tamanho natural do mock no card (proporcional). **Sem hover
  dentro do modal** (spotlight, X e botao) e **sem o label do servico** no
  cabecalho do texto. **CTA fixo fora da area de scroll** (`.modal-cta-bar`
  direto no `.modal`) — sempre centralizado mesmo com scrollbar (scrollbar
  fina 6px no `.modal-body`)

## Seções do site

1. **Hero** — Titulo grande, descricao, 2 botoes (primario branco + outline)
2. **Stats** — 4 numeros grandes (76%, 28%, 87%, 46%) com label embaixo
3. **O que eu resolvo** — 3 rows alternados:
   - Ser encontrado no Google (GMB fictício: perfil Vitália Odontologia,
     estrelas, endereço, horário, fotos, botão "Agendar consulta")
   - Site que vende (navegador com domínio fictício, nav, hero "Seu sorriso
     merece cuidado de verdade", 2 CTAs)
   - IA e automacao (conversa WhatsApp da Vitália respondendo e agendando)
4. **Como funciona** — 4 etapas: Diagnóstico, Estratégia, Implementação, Resultado
5. **CTA** — Titulo + frase + botao primario
6. **Footer** — Copyright + email

## O que falta

- [x] Link do WhatsApp funcional — os 3 CTAs (nav, hero, seção final) vão pra
  `wa.me/5542999955452` com texto pré-preenchido por CTA (02/10/2026)
- [x] Link do email funcional — footer em `mailto:guilherme@apside.com.br`
- [x] SEO básico — title, meta description, theme-color, favicon SVG inline
- [x] Botões viraram links (antes eram `<button>` morto, sem handler)
- [ ] Deploy (Vercel, Netlify ou GitHub Pages) — **gate: domínio/escolha é do Guilherme**
- [ ] `og:image` + `og:url` — precisam de URL absoluta, só depois do deploy
- [ ] Testar em dispositivos reais (só verificado em desktop 1440px via puppeteer)
- [x] Fontes dos stats conferidas (06/10/2026): 76% Google/Think with Google;
  28% Google (busca local → compra em 24h); 87% BrightLocal (leem avaliações);
  46% Google rep 2018. ~~75% julgam pela foto~~ (sem fonte, trocado por 28%)

## Referências usadas

- Template dark (`dados/clinicas-ponta-grossa-2026-09-08/landing-pages/template-dark.html`)
- Site antigo (`site/index.html`) — partículas, GSAP, comparador
- Design guide (`identidade/design-guide.md`) — cores da marca

## Notas pro próximo passo

O modelo final é a base. Evoluir a partir dele, não criar do zero. O site ainda é estático (HTML puro). Quando tiver deploy, considerar transformar em algo mais dinâmico se necessário.
