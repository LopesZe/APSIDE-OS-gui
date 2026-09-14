// Script genérico pra rodar atores do Apify (lead generation)
// Uso: node apify/run_actor.js <actor_id> <input_json>

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Carrega .env
const envPath = path.join(__dirname, "..", "..", ".env");
const env = readFileSync(envPath, "utf8");
const envVars = {};
for (const line of env.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eq = trimmed.indexOf("=");
  if (eq === -1) continue;
  envVars[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
}

const APIFY_API_TOKEN = envVars.APIFY_API_TOKEN;

if (!APIFY_API_TOKEN) {
  console.error("Configure APIFY_API_TOKEN no .env");
  process.exit(1);
}

const [, , actorIdRaw, inputPath] = process.argv;

if (!actorIdRaw) {
  console.error("Uso: node apify/run_actor.js <actor_id> [caminho_input.json]");
  process.exit(1);
}

// API do Apify usa ~ em vez de / no actor ID (ex: compass~crawler-google-places)
const actorId = actorIdRaw.replace("/", "~");

const input = inputPath ? JSON.parse(readFileSync(inputPath, "utf8")) : {};

async function runActor(actorId, input) {
  // Start actor run
  const startR = await fetch(
    `https://api.apify.com/v2/acts/${actorId}/runs?token=${APIFY_API_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    }
  );
  const start = await startR.json();
  console.log("API response:", JSON.stringify(start, null, 2));
  if (!start.data || !start.data.id) {
    console.error("Falha ao iniciar run. Resposta da API:", JSON.stringify(start));
    process.exit(1);
  }
  const runId = start.data.id;
  console.log(`Run iniciado: ${runId}`);

  // Poll até terminar
  while (true) {
    await new Promise((r) => setTimeout(r, 5000));
    const statusR = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${APIFY_API_TOKEN}`
    );
    const status = await statusR.json();
    console.log(`Status: ${status.data.status}`);

    if (["SUCCEEDED", "FAILED", "TIMED-OUT", "ABORTED"].includes(status.data.status)) {
      return status.data;
    }
  }
}

async function getResults(runId) {
  const r = await fetch(
    `https://api.apify.com/v2/actor-runs/${runId}/dataset/items?token=${APIFY_API_TOKEN}`
  );
  return r.json();
}

const result = await runActor(actorId, input);

if (result.status === "SUCCEEDED") {
  const items = await getResults(result.id);
  console.log(`${items.length} resultado(s) obtido(s)`);
  const outPath = path.join(__dirname, "output.json");
  const { writeFileSync } = await import("node:fs");
  writeFileSync(outPath, JSON.stringify(items, null, 2));
  console.log(`Salvo em: ${outPath}`);
} else {
  console.error("Run falhou:", result.status);
  process.exit(1);
}
