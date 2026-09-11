const { chromium } = require('C:\\Users\\Guilherme Lopes\\APSIDE-OS-gui\\marketing\\conteudo\\carrossel-presenca-2026-08-25\\node_modules\\playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const b = await chromium.launch({ headless: false });
  const p = await b.newPage();
  
  await p.goto('https://www.youtube.com/@moneyhomeofficejorge/videos', { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(5000);
  
  // Scroll to load more videos
  for (let i = 0; i < 10; i++) {
    await p.evaluate(() => window.scrollBy(0, 1000));
    await p.waitForTimeout(2000);
  }
  
  // Extract videos with proper titles
  const videos = await p.evaluate(() => {
    const results = [];
    const seen = new Set();
    
    const allLinks = document.querySelectorAll('a[href*="/watch?v="]');
    allLinks.forEach(a => {
      const title = a.getAttribute('title') || a.textContent?.trim() || '';
      const href = a.href;
      const match = href.match(/v=([^&]+)/);
      if (match && title && !seen.has(match[1]) && !title.match(/^\d+:\d+$/)) {
        seen.add(match[1]);
        results.push({ title, videoId: match[1] });
      }
    });
    
    return results;
  });
  
  console.log(`Found ${videos.length} unique videos`);
  
  // Filter last 3 months (June, July, August, September 2026)
  // Since we can't get dates from the page easily, let's just get the first 15-20 videos (recent ones)
  const recentVideos = videos.slice(0, 20);
  
  console.log('\nRecent videos:');
  recentVideos.forEach((v, i) => {
    console.log(`${i+1}. ${v.title}`);
    console.log(`   https://www.youtube.com/watch?v=${v.videoId}`);
  });
  
  fs.writeFileSync(path.resolve(__dirname, 'videos.json'), JSON.stringify(recentVideos, null, 2));
  
  await b.close();
})();
