#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rl = createInterface({ input: process.stdin, output: process.stdout });

function pergunta(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

async function main() {
  console.log("\nAPSIDE-OS - Setup inicial\n");
  console.log("Vou te fazer algumas perguntas pra personalizar o sistema.\n");

  const config = {};

  // Dados basicos
  config.CLIENT_NAME = await pergunta("Nome do responsavel: ");
  config.BUSINESS_NAME = await pergunta("Nome do negocio: ");

  // Contato
  config.WHATSAPP = await pergunta("Numero WhatsApp (com codigo do pais, ex: 5511999999999): ");

  // Agent name
  config.AGENT_NAME = config.CLIENT_NAME.split(" ")[0] + "-agente";
  config.OS_NAME = "APSIDE-OS";

  console.log("\nAplicando configuracoes...\n");

  function substituir(content) {
    let result = content;
    for (const [key, value] of Object.entries(config)) {
      if (value) {
        result = result.replaceAll(`{{${key}}}`, value);
      }
    }
    return result;
  }

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
      console.log(`  ok ${arquivo}`);
    }
  }

  console.log(`\n${processados} arquivo(s) atualizado(s)\n`);

  rl.close();

  console.log("===========================================");
  console.log("  APSIDE-OS configurado com sucesso!");
  console.log("===========================================\n");
  console.log(`  Negocio: ${config.BUSINESS_NAME}`);
  console.log(`  Responsavel: ${config.CLIENT_NAME}\n`);
  console.log("  Proximos passos:");
  console.log("  1. Preencha memoria/estrategia.md com o foco atual");
  console.log("  2. Edite identidade/design-guide.md se necessario\n");
}

main().catch(console.error);
