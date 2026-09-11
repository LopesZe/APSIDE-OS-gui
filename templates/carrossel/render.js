import { chromium } from "playwright";
import { mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const [,, htmlPath, outputDir] = process.argv;

if (!htmlPath || !outputDir) {
  console.error("Uso: node render.js <caminho/do/carrossel.html> <caminho/saida>");
  process.exit(1);
}

const absHtml = path.resolve(htmlPath);
const absOutput = path.resolve(outputDir);

if (!existsSync(absOutput)) mkdirSync(absOutput, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1440 } });

  await page.goto(`file:///${absHtml.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });

  const slides = await page.$$(".slide");
  console.log(`${slides.length} slide(s) encontrado(s)`);

  for (let i = 0; i < slides.length; i++) {
    const id = await slides[i].getAttribute("id");
    const num = String(i + 1).padStart(2, "0");
    const file = path.join(absOutput, `slide-${num}.png`);
    await slides[i].screenshot({ path: file });
    console.log(`  → ${file}`);
  }

  await browser.close();
  console.log("Pronto!");
})();
