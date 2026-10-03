const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const VERSIONS = [
  { id: 'reuniao', hidePreco: true,  label: 'sem preço (reunião)' },
  { id: 'precos',  hidePreco: false, label: 'com preço (envio)' },
];

(async () => {
  const browser = await chromium.launch();
  const htmlPath = path.resolve(__dirname, 'apresentacao-vendas.html');

  for (const ver of VERSIONS) {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
    await page.goto('file://' + htmlPath);
    if (ver.hidePreco) {
      await page.addStyleTag({ content: '.only-preco { display: none !important; }' });
    }
    await page.waitForTimeout(2500);

    const slides = await page.$$('.slide');
    const visible = [];
    for (const s of slides) {
      if (await s.isVisible()) visible.push(s);
    }
    console.log(`[${ver.id}] ${visible.length} slides (${ver.label})`);

    for (let i = 0; i < visible.length; i++) {
      const buf = await visible[i].screenshot({ type: 'png' });
      const filename = `apresentacao-${ver.id}-pagina-${String(i + 1).padStart(2, '0')}.png`;
      fs.writeFileSync(path.resolve(__dirname, filename), buf);
      console.log(`  ${filename} (${buf.length} bytes)`);
    }

    const pdfName = ver.hidePreco
      ? 'apresentacao-conta-gestor-reuniao.pdf'
      : 'apresentacao-conta-gestor-com-precos.pdf';
    await page.pdf({
      path: path.resolve(__dirname, pdfName),
      width: '1920px',
      height: '1080px',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      pageBreakAfter: 'always',
    });
    console.log(`  ${pdfName}`);

    await page.close();
  }

  await browser.close();
  console.log('OK');
})().catch((e) => { console.error(e); process.exit(1); });
