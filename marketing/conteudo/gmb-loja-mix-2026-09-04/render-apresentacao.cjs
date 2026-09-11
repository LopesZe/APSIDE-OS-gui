const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1122, height: 794 } });
  
  const htmlPath = path.resolve(__dirname, 'apresentacao-gmb.html');
  await p.goto('file://' + htmlPath);
  await p.waitForTimeout(2000);

  const pages = await p.$$('.page');
  console.log(`Encontradas ${pages.length} páginas`);

  for (let i = 0; i < pages.length; i++) {
    const buf = await pages[i].screenshot({ type: 'png' });
    const filename = `pagina-${String(i + 1).padStart(2, '0')}.png`;
    fs.writeFileSync(path.resolve(__dirname, 'instagram', filename), buf);
    console.log(`Gerado ${filename} (${buf.length} bytes)`);
  }

  const fullBuf = await p.screenshot({ fullPage: true, type: 'png' });
  fs.writeFileSync(path.resolve(__dirname, 'instagram', 'apresentacao-completa.png'), fullBuf);
  console.log(`Gerado apresentacao-completa.png (${fullBuf.length} bytes)`);

  await p.pdf({
    path: path.resolve(__dirname, 'instagram', 'apresentacao-gmb.pdf'),
    landscape: true,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('Gerado apresentacao-gmb.pdf');

  await b.close();
})();
