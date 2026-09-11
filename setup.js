#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rl = createInterface({ input: process.stdin, output: process.stdout });

function pergunta(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

async function main() {
  console.log("\n🚀 APSIDE-OS — Setup inicial\n");
  console.log("Vou te fazer algumas perguntas pra personalizar o sistema.\n");

  const config = {};

  // Dados básicos
  config.CLIENT_NAME = await pergunta("Nome do responsável: ");
  config.BUSINESS_NAME = await pergunta("Nome do negócio: ");
  config.BUSINESS_TYPE = await pergunta("Tipo de atividade (ex: representante comercial): ");
  config.BRANDS = await pergunta("Marcas que representa (separadas por vírgula): ");
  config.PRIMARY_BRAND = await pergunta("Marca principal: ");
  config.COMMISSION_RATE = await pergunta("Taxa de comissão (ex: 0.05 para 5%): ") || "0.05";

  // Contato
  config.WHATSAPP = await pergunta("Número WhatsApp (com código do país, ex: 5511999999999): ");
  config.TELEGRAM_BOT = await pergunta("Nome do bot Telegram (ex: @MeuBot): ");
  config.TELEGRAM_GROUP = await pergunta("Nome do grupo Telegram: ");
  config.GROUP_FILTER_REGEX = await pergunta("Regex pra filtrar o grupo (ex: /meugrupo/i): ") || `/${config.TELEGRAM_GROUP.replace(/\s+/g, "")}/i`;

  // Dashboard
  config.DASHBOARD_TITLE = await pergunta("Título do dashboard (ex: Painel Silva): ") || `Painel ${config.CLIENT_NAME}`;

  // Supabase (opcional)
  console.log("\n--- Supabase (pressione Enter pra pular e configurar depois) ---");
  config.SUPABASE_URL = await pergunta("Supabase URL: ");
  config.SUPABASE_KEY = await pergunta("Supabase Key: ");
  config.TELEGRAM_TOKEN = await pergunta("Telegram Bot Token: ");

  // Agent name
  config.AGENT_NAME = config.CLIENT_NAME.split(" ")[0] + "-agente";
  config.OS_NAME = "APSIDE-OS";

  console.log("\n📦 Aplicando configurações...\n");

  // Função pra substituir placeholders em todos os arquivos
  function substituir(content) {
    let result = content;
    for (const [key, value] of Object.entries(config)) {
      if (value) {
        result = result.replaceAll(`{{${key}}}`, value);
      }
    }
    return result;
  }

  // Lista de arquivos pra processar
  const arquivos = [
    "core/opencode.md",
    "core/BOOT.md",
    "core/IDENTITY.md",
    "core/USER.md",
    "core/TOOLS.md",
    "core/AGENTS.md",
    "core/MAPA.md",
    "core/SKILLS.md",
    "core/RESOLVER.md",
    "memoria/empresa.md",
    "identidade/marcas.md",
    "sistema/package.json",
    "sistema/.env.example",
    "sistema/bot_telegram.mjs",
    "sistema/registrar_nota.mjs",
    "sistema/src/tools.js",
    "sistema/src/index.js",
    "sistema/dashboard/server.js",
    "sistema/dashboard/index.html",
  ];

  let processados = 0;
  for (const arquivo of arquivos) {
    const caminho = join(__dirname, arquivo);
    if (!existsSync(caminho)) continue;

    const content = readFileSync(caminho, "utf8");
    const novContent = substituir(content);

    if (novContent !== content) {
      writeFileSync(caminho, novContent, "utf8");
      processados++;
      console.log(`  ✓ ${arquivo}`);
    }
  }

  // Copiar .env.example → .env
  const envSrc = join(__dirname, "sistema", ".env.example");
  const envDst = join(__dirname, "sistema", ".env");
  if (existsSync(envSrc) && !existsSync(envDst)) {
    let envContent = readFileSync(envSrc, "utf8");
    envContent = substituir(envContent);
    writeFileSync(envDst, envContent, "utf8");
    console.log("  ✓ sistema/.env (criado a partir do .env.example)");
  }

  console.log(`\n✅ ${processados} arquivo(s) atualizado(s)\n`);

  // Git init
  console.log("🔧 Inicializando git...\n");

  const { execSync } = await import("node:child_process");
  try {
    execSync("git init", { cwd: __dirname, stdio: "ignore" });
    execSync("git add .", { cwd: __dirname, stdio: "ignore" });
    execSync(`git commit -m "Setup inicial do APSIDE-OS para ${config.BUSINESS_NAME}"`, { cwd: __dirname, stdio: "ignore" });
    console.log("  ✓ Git inicializado com commit inicial\n");
  } catch (e) {
    console.log("  ⚠ Git já inicializado ou não disponível\n");
  }

  rl.close();

  console.log("═══════════════════════════════════════════════");
  console.log("  APSIDE-OS configurado com sucesso!");
  console.log("═══════════════════════════════════════════════\n");
  console.log(`  Negócio: ${config.BUSINESS_NAME}`);
  console.log(`  Responsável: ${config.CLIENT_NAME}`);
  console.log(`  Marca principal: ${config.PRIMARY_BRAND}`);
  console.log(`  Dashboard: ${config.DASHBOARD_TITLE}\n`);
  console.log("  Próximos passos:");
  console.log("  1. Configure os tokens no arquivo sistema/.env");
  console.log("  2. Crie o projeto no Supabase e execute o schema.sql");
  console.log("  3. Execute 'cd sistema && npm install'");
  console.log("  4. Execute 'npm run bot' pra iniciar o bot");
  console.log("  5. Execute 'npm run dev' pra iniciar o dashboard\n");
  console.log("  Para mais detalhes, leia SETUP.md\n");
}

main().catch(console.error);
