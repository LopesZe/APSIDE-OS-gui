// Script genérico pra publicar álbum no Facebook via Meta Graph API
// Uso: node postar-facebook.js <caminho_das_imagens> <legenda>

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
const FACEBOOK_PAGE_ID = envVars.FACEBOOK_PAGE_ID;

if (!ACCESS_TOKEN || !FACEBOOK_PAGE_ID) {
  console.error("Configure META_ACCESS_TOKEN e FACEBOOK_PAGE_ID no .env");
  process.exit(1);
}

const [, , imagesDir, caption] = process.argv;

if (!imagesDir || !caption) {
  console.error("Uso: node postar-facebook.js <caminho_das_imagens> <legenda>");
  process.exit(1);
}

async function publicarAlbum(imagePaths, message) {
  const r = await fetch(
    `https://graph.facebook.com/v21.0/${FACEBOOK_PAGE_ID}/photos`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: imagePaths[0],
        message,
        access_token: ACCESS_TOKEN,
      }),
    }
  );
  return r.json();
}

const files = readdirSync(imagesDir)
  .filter((f) => f.endsWith(".png") || f.endsWith(".jpg"))
  .sort()
  .map((f) => path.join(imagesDir, f));

console.log(`${files.length} imagem(ns) encontrada(s)`);

const result = await publicarAlbum(files, caption);
if (result.error) {
  console.error("Erro ao publicar:", result.error);
  process.exit(1);
}

console.log(`Publicado com sucesso! Post ID: ${result.id}`);
