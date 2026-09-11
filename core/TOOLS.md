# TOOLS — Catálogo de ferramentas conectadas

Toda ferramenta que o agente usa ou pretende usar. Regra: qualquer credencial vive
em `.env` (ignorado pelo git) — **nunca** neste arquivo.

## Conectadas / em uso
- **opencode** — agente e skills (este repo).
- **Telegram** — bot (configurar via .env) no grupo (configurar via .env) (tópicos `geral`/`nf`);
  entrada das NFs.
- **Supabase** — banco de pedidos/NFs/dashboard (`sistema/`).
- **GitHub** — versionamento (`/salvar` faz commit+push).
- **Playwright** — render de carrosséis/posts em PNG.
- **Apify** — scraping de Google Maps, Instagram, Facebook, LinkedIn (`APIFY_API_TOKEN` no `.env`).
  - Google Maps: `scripts/apify/run_actor.js` (compass~crawler-google-places)
  - Instagram profiles: `scripts/instaloader/extrair-perfil.js` (instagram-scraper~instagram-profile-scraper, $0.50/1k)

## Planejadas (marcar conforme instala)
- [ ] Notion
- [ ] Canva
- [ ] Google Calendar
- [ ] Meta Ads
- [ ] Google Ads

## Regras
- Credenciais nunca no git (`.env` e `sistema/.env` estão no `.gitignore`).
- Toda ferramenta nova entra aqui e, se virar procedimento recorrente, vira skill.
