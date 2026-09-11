const { chromium } = require('C:\\Users\\Guilherme Lopes\\APSIDE-OS-gui\\marketing\\conteudo\\carrossel-presenca-2026-08-25\\node_modules\\playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  
  // Go to channel videos page
  await p.goto('https://www.youtube.com/@moneyhomeofficejorge/videos', { waitUntil: 'networkidle' });
  await p.waitForTimeout(3000);
  
  // Scroll down to load more videos
  for (let i = 0; i < 5; i++) {
    await p.evaluate(() => window.scrollBy(0, 1000));
    await p.waitForTimeout(1500);
  }
  
  // Extract video data
  const videos = await p.evaluate(() => {
    const items = document.querySelectorAll('ytd-rich-item-renderer');
    const results = [];
    items.forEach(item => {
      const titleEl = item.querySelector('#video-title');
      const metaEl = item.querySelector('#metadata-line');
      const linkEl = item.querySelector('a#video-title-link');
      
      if (titleEl) {
        const title = titleEl.textContent.trim();
        const href = linkEl ? linkEl.href : '';
        const meta = metaEl ? metaEl.textContent.trim() : '';
        
        // Extract video ID from URL
        let videoId = '';
        if (href) {
          const match = href.match(/v=([^&]+)/);
          if (match) videoId = match[1];
        }
        
        results.push({ title, href, videoId, meta });
      }
    });
    return results;
  });
  
  console.log(JSON.stringify(videos, null, 2));
  
  // Save to file
  const outputPath = path.resolve(__dirname, 'videos.json');
  fs.writeFileSync(outputPath, JSON.stringify(videos, null, 2));
  console.log(`\nSaved ${videos.length} videos to ${outputPath}`);
  
  await b.close();
})();
