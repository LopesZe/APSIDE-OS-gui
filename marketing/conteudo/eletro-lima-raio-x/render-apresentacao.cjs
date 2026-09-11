const { chromium } = require('C:/Users/guilo/APSIDE-OS/marketing/conteudo/carrossel-presenca-2026-08-25/node_modules/playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1122, height: 794 } });

  const htmlPath = path.resolve(__dirname, 'apresentacao-gmb.html');
  await page.goto('file://' + htmlPath);
  await page.waitForTimeout(2000);

  const pages = await page.$$('.page');
  console.log(`Encontradas ${pages.length} páginas`);

  // Create instagram directory if it doesn't exist
  const instagramDir = path.resolve(__dirname, 'instagram');
  if (!fs.existsSync(instagramDir)) {
    fs.mkdirSync(instagramDir);
  }

  for (let i = 0; i < pages.length; i++) {
    const buf = await pages[i].screenshot({ type: 'png' });
    const filename = `pagina-${String(i + 1).padStart(2, '0')}.png`;
    fs.writeFileSync(path.resolve(instagramDir, filename), buf);
    console.log(`Gerado ${filename} (${buf.length} bytes)`);
  }

  const fullBuf = await page.screenshot({ fullPage: true, type: 'png' });
  fs.writeFileSync(path.resolve(instagramDir, 'apresentacao-completa.png'), fullBuf);
  console.log(`Gerado apresentacao-completa.png (${fullBuf.length} bytes)`);

  await page.pdf({
    path: path.resolve(instagramDir, 'apresentacao-gmb.pdf'),
    landscape: true,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('Gerado apresentacao-gmb.pdf');

  await browser.close();
})();
