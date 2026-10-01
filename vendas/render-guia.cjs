const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });

  const htmlPath = path.resolve(__dirname, 'guia-precos.html');
  await page.goto('file://' + htmlPath);
  await page.waitForTimeout(2000);

  const pages = await page.$$('.page');
  console.log(`Encontradas ${pages.length} paginas`);

  const outputDir = __dirname;
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (let i = 0; i < pages.length; i++) {
    const buf = await pages[i].screenshot({ type: 'png' });
    const filename = `guia-precos-pagina-${String(i + 1).padStart(2, '0')}.png`;
    fs.writeFileSync(path.resolve(outputDir, filename), buf);
    console.log(`Gerado ${filename} (${buf.length} bytes)`);
  }

  await page.pdf({
    path: path.resolve(outputDir, 'guia-precos.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('Gerado guia-precos.pdf');

  await browser.close();
})();
