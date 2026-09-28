const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const images = [
  { name: '01-cover',             file: 'cover.html',            w: 1080, h: 608 },
  { name: '02-logo',              file: 'logo.html',             w: 250,  h: 250 },
  { name: '03-perfil',            file: 'perfil.html',           w: 250,  h: 250 },
  { name: '04-post-oferta',       file: 'post-oferta.html',      w: 1200, h: 900 },
  { name: '05-post-antes-depois', file: 'post-antes-depois.html',w: 1200, h: 900 },
  { name: '06-post-servicos',     file: 'post-servicos.html',    w: 1200, h: 900 },
  { name: '07-post-avaliacao',    file: 'post-avaliacao.html',   w: 1200, h: 900 },
  { name: '08-post-whatsapp',     file: 'post-whatsapp.html',    w: 1200, h: 900 },
  { name: '09-post-site',         file: 'post-site.html',        w: 1200, h: 900 },
];

(async () => {
  const dir = __dirname;
  const outDir = path.join(dir, 'png');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  console.log('\n=== Gerando imagens para o GMB da APSIDE ===\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  for (const img of images) {
    const htmlPath = path.join(dir, img.file);
    const pngPath = path.join(outDir, `${img.name}.png`);

    if (!fs.existsSync(htmlPath)) {
      console.log(`  SKIP  ${img.file} não encontrado`);
      continue;
    }

    const page = await browser.newPage();
    await page.setViewport({ width: img.w, height: img.h, deviceScaleFactor: 2 });
    await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
    await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width: img.w, height: img.h } });
    await page.close();

    const stats = fs.statSync(pngPath);
    const kb = Math.round(stats.size / 1024);
    console.log(`  OK    ${img.name}.png (${img.w}x${img.h}) — ${kb} KB`);
  }

  await browser.close();

  console.log('\n=== Completo! ===');
  console.log(`Imagens salvas em: ${outDir}`);
  console.log('\nPróximos passos:');
  console.log('  1. Abra cada PNG e ajuste se necessário');
  console.log('  2. Acesse business.google.com');
  console.log('  3. Faça upload de cada imagem na seção correta\n');
})();
