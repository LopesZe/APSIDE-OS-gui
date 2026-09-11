const { chromium } = require('C:\\Users\\Guilherme Lopes\\APSIDE-OS-gui\\marketing\\conteudo\\carrossel-presenca-2026-08-25\\node_modules\\playwright');
const fs = require('fs');
const path = require('path');

const videos = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'videos.json'), 'utf-8'));

// Filter SEO-related videos
const seoKeywords = ['seo', 'backlink', 'site', 'blog', 'afiliado', 'google', 'tráfego', 'rank', 'pagina', 'domínio', 'monetizar'];
const seoVideos = videos.filter(v => {
  const lower = v.title.toLowerCase();
  return seoKeywords.some(kw => lower.includes(kw));
});

console.log(`Found ${seoVideos.length} SEO-related videos`);

(async () => {
  const b = await chromium.launch({ headless: false });
  const p = await b.newPage();
  
  const outputDir = path.resolve(__dirname, 'transcricoes');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  
  for (let i = 0; i < seoVideos.length; i++) {
    const v = seoVideos[i];
    console.log(`\n[${i+1}/${seoVideos.length}] Processing: ${v.title}`);
    
    try {
      // Go to video page
      await p.goto(`https://www.youtube.com/watch?v=${v.videoId}`, { waitUntil: 'domcontentloaded' });
      await p.waitForTimeout(3000);
      
      // Click "...mais" (more) button to expand description
      try {
        await p.click('#expand', { timeout: 5000 });
        await p.waitForTimeout(1000);
      } catch(e) {}
      
      // Click "Mostrar transcrição" button
      try {
        // Try to find and click the transcript button
        const transcriptBtn = await p.$('button[aria-label="Mostrar transcrição"]');
        if (transcriptBtn) {
          await transcriptBtn.click();
          await p.waitForTimeout(2000);
        } else {
          // Try clicking the three dots menu first
          const menuBtn = await p.$('#button-shape button[aria-label="Mais ações"]');
          if (menuBtn) {
            await menuBtn.click();
            await p.waitForTimeout(1000);
            
            const transcriptOption = await p.$('tp-yt-paper-listbox ytd-menu-service-item-renderer');
            if (transcriptOption) {
              await transcriptOption.click();
              await p.waitForTimeout(2000);
            }
          }
        }
      } catch(e) {}
      
      // Try to get transcript text
      const transcript = await p.evaluate(() => {
        const segments = document.querySelectorAll('ytd-transcript-segment-renderer');
        if (segments.length > 0) {
          return Array.from(segments).map(s => {
            const time = s.querySelector('.segment-timestamp')?.textContent?.trim() || '';
            const text = s.querySelector('.segment-text')?.textContent?.trim() || '';
            return `${time} ${text}`;
          }).join('\n');
        }
        
        // Alternative: try getting from the transcript panel
        const panel = document.querySelector('ytd-transcript-renderer');
        if (panel) {
          return panel.textContent;
        }
        
        return null;
      });
      
      if (transcript) {
        const filename = `${v.videoId}_transcricao.txt`;
        fs.writeFileSync(path.resolve(outputDir, filename), transcript);
        console.log(`  ✓ Transcript saved (${transcript.length} chars)`);
      } else {
        console.log(`  ✗ No transcript found`);
      }
      
    } catch(e) {
      console.log(`  ✗ Error: ${e.message}`);
    }
  }
  
  await b.close();
  
  // List all saved files
  const files = fs.readdirSync(outputDir);
  console.log(`\n\nTotal files saved: ${files.length}`);
  files.forEach(f => console.log(`  ${f}`));
})();
