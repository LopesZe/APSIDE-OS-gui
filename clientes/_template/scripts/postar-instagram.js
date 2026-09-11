// Script genérico pra publicar carrossel no Instagram via Meta Graph API
// Uso: node postar-instagram.js <caminho_das_imagens> <legenda>

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Carrega .env
const envPath = path.join(__dirname, "..", ".env");
const env = readFileSync(envPath, "utf8");
const envVars = {};
for (const line of env.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eq = trimmed.indexOf("=");
  if (eq === -1) continue;
  envVars[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
}

const ACCESS_TOKEN = envVars.META_ACCESS_TOKEN;
const INSTAGRAM_BUSINESS_ACCOUNT_ID = envVars.INSTAGRAM_BUSINESS_ACCOUNT_ID;

if (!ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
  console.error("Configure META_ACCESS_TOKEN e INSTAGRAM_BUSINESS_ACCOUNT_ID no .env");
  process.exit(1);
}

const [, , imagesDir, caption] = process.argv;

if (!imagesDir || !caption) {
  console.error("Uso: node postar-instagram.js <caminho_das_imagens> <legenda>");
  process.exit(1);
}

async function criarContainer(imagePaths) {
  if (imagePaths.length === 1) {
    // Post único
    const r = await fetch(
      `https://graph.facebook.com/v21.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image_url: imagePaths[0],
          caption,
          access_token: ACCESS_TOKEN,
        }),
      }
    );
    return r.json();
  }

  // Carrossel
  const children = [];
  for (const img of imagePaths) {
    const r = await fetch(
      `https://graph.facebook.com/v21.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image_url: img,
          is_carousel_item: true,
          access_token: ACCESS_TOKEN,
        }),
      }
    );
    const d = await r.json();
    if (d.id) children.push(d.id);
  }

  const r = await fetch(
    `https://graph.facebook.com/v21.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        media_type: "CAROUSEL",
        children: children.join(","),
        caption,
        access_token: ACCESS_TOKEN,
      }),
    }
  );
  return r.json();
}

async function publicar(containerId) {
  const r = await fetch(
    `https://graph.facebook.com/v21.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media_publish`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        creation_id: containerId,
        access_token: ACCESS_TOKEN,
      }),
    }
  );
  return r.json();
}

// Main
const files = readdirSync(imagesDir)
  .filter((f) => f.endsWith(".png") || f.endsWith(".jpg"))
  .sort()
  .map((f) => path.join(imagesDir, f));

console.log(`${files.length} imagem(ns) encontrada(s)`);

const container = await criarContainer(files);
if (container.error) {
  console.error("Erro ao criar container:", container.error);
  process.exit(1);
}

console.log(`Container criado: ${container.id}`);

const result = await publicar(container.id);
if (result.error) {
  console.error("Erro ao publicar:", result.error);
  process.exit(1);
}

console.log(`Publicado com sucesso! ID: ${result.id}`);
console.log(`Link: https://www.instagram.com/p/${result.id}/`);
