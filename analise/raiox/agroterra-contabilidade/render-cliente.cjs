const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1122, height: 794 } });

  const htmlPath = path.resolve(__dirname, 'raiox-agroterra-contabilidade-cliente.html');
  await page.goto('file://' + htmlPath);
  await page.waitForTimeout(2000);

  const pages = await page.$$('.page');
  console.log(`Encontradas ${pages.length} páginas`);

  for (let i = 0; i < pages.length; i++) {
    const buf = await pages[i].screenshot({ type: 'png' });
    const filename = `raiox-cliente-pagina-${String(i + 1).padStart(2, '0')}.png`;
    fs.writeFileSync(path.resolve(__dirname, filename), buf);
    console.log(`Gerado ${filename} (${buf.length} bytes)`);
  }

  await page.pdf({
    path: path.resolve(__dirname, 'raiox-agroterra-contabilidade-cliente.pdf'),
    landscape: true,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('Gerado raiox-agroterra-contabilidade-cliente.pdf');

  await browser.close();
})();