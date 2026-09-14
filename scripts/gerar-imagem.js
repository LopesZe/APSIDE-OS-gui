// Script genérico pra gerar imagens via OpenAI DALL-E 3
// Uso: node gerar-imagem.js <prompt> <caminho_de_saida>

import { readFileSync } from "node:fs";
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

const OPENAI_API_KEY = envVars.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("Configure OPENAI_API_KEY no .env");
  process.exit(1);
}

const [, , prompt, outputPath] = process.argv;

if (!prompt || !outputPath) {
  console.error("Uso: node gerar-imagem.js <prompt> <caminho_de_saida.png>");
  process.exit(1);
}

async function gerar(prompt) {
  const r = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url",
    }),
  });
  return r.json();
}

console.log("Gerando imagem...");
const result = await gerar(prompt);

if (result.error) {
  console.error("Erro:", result.error.message);
  process.exit(1);
}

const url = result.data[0].url;
console.log(`URL: ${url}`);

// Download
const imgR = await fetch(url);
const buf = Buffer.from(await imgR.arrayBuffer());
const { writeFileSync } = await import("node:fs");
writeFileSync(outputPath, buf);
console.log(`Salvo em: ${outputPath}`);
