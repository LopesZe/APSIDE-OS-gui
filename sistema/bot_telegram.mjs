import { createClient } from "@supabase/supabase-js";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Carrega .env manualmente
const envPath = path.join(__dirname, ".env");
if (existsSync(envPath)) {
  const env = readFileSync(envPath, "utf8");
  for (const line of env.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}

const TOKEN = process.env.TLEGRAM_TOKEN || process.env.TELEGRAM_TOKEN;
const GROUP_ID = process.env.TELEGRAM_GROUP_ID;
const GROUP_NAME = process.env.TELEGRAM_GROUP_NAME || "";
const TOPICOS = JSON.parse(readFileSync(path.join(__dirname, "topic_ids.json"), "utf8"));

if (!TOKEN || !GROUP_ID) {
  console.error("Configure TELEGRAM_TOKEN e TELEGRAM_GROUP_ID no .env");
  process.exit(1);
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const API = `https://api.telegram.org/bot${TOKEN}`;
const NOTAS_DIR = path.join(__dirname, "notas");
if (!existsSync(NOTAS_DIR)) mkdirSync(NOTAS_DIR, { recursive: true });

let offset = 0;
const processando = new Set();

async function api(method, body = {}) {
  const r = await fetch(`${API}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return r.json();
}

async function enviar(chatId, text, topic) {
  await api("sendMessage", { chat_id: chatId, text, message_thread_id: topic });
}

async function baixarArquivo(fileId, destino) {
  const info = await api("getFile", { file_id: fileId });
  if (!info.ok) throw new Error("Não conseguiu obter info do arquivo");
  const url = `https://api.telegram.org/file/bot${TOKEN}/${info.result.file_path}`;
  const r = await fetch(url);
  const buf = Buffer.from(await r.arrayBuffer());
  writeFileSync(destino, buf);
  return destino;
}

async function processarPdf(message) {
  const doc = message.document;
  if (!doc || !doc.file_name?.toLowerCase().endsWith(".pdf")) return;

  const chatId = message.chat.id;
  const threadId = message.message_thread_id;

  // Só processa no tópico NF
  if (threadId !== TOPICOS.nf) return;

  // Verifica se é do grupo correto
  const chatMatch = GROUP_NAME ? new RegExp(GROUP_NAME, "i").test(message.chat.title || "") : true;
  if (!chatMatch) return;

  const fileId = doc.file_id;
  const nomeArquivo = `${Date.now()}_${doc.file_name || "nf.pdf"}`;
  const caminho = path.join(NOTAS_DIR, nomeArquivo);

  if (processando.has(fileId)) return;
  processando.add(fileId);

  try {
    await enviar(chatId, "📥 Recebi o PDF. Processando...", threadId);

    await baixarArquivo(fileId, caminho);

    // Chama o registrador
    const resultado = execSync(
      `node registrar_nota.mjs "${caminho}"`,
      { cwd: __dirname, encoding: "utf8", timeout: 30000 }
    );

    const linhas = resultado.trim().split("\n");
    const resumo = linhas.slice(-5).join("\n");
    await enviar(chatId, `✅ Nota registrada!\n\n${resumo}`, threadId);
  } catch (err) {
    console.error("Erro ao processar PDF:", err.message);
    await enviar(chatId, `❌ Erro ao processar: ${err.message}`, threadId);
  } finally {
    processando.delete(fileId);
  }
}

async function poll() {
  while (true) {
    try {
      const res = await api("getUpdates", {
        offset,
        timeout: 30,
        allowed_updates: ["message"],
      });

      if (res.ok && res.result) {
        for (const update of res.result) {
          offset = update.update_id + 1;
          if (update.message) {
            processarPdf(update.message).catch(console.error);
          }
        }
      }
    } catch (err) {
      console.error("Erro no poll:", err.message);
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
}

console.log("🤖 Bot rodando. Aguardando PDFs no tópico nf...");
poll();
