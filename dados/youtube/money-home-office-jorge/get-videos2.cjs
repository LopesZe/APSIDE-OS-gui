const { chromium } = require('C:\\Users\\Guilherme Lopes\\APSIDE-OS-gui\\marketing\\conteudo\\carrossel-presenca-2026-08-25\\node_modules\\playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const b = await chromium.launch({ headless: false });
  const p = await b.newPage();
  
  // Go to channel videos page
  await p.goto('https://www.youtube.com/@moneyhomeofficejorge/videos', { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(5000);
  
  // Scroll to load videos
  for (let i = 0; i < 8; i++) {
    await p.evaluate(() => window.scrollBy(0, 800));
    await p.waitForTimeout(2000);
  }
  
  // Take a screenshot to see what's on the page
  await p.screenshot({ path: path.resolve(__dirname, 'debug.png'), fullPage: false });
  
  // Try to get page content
  const content = await p.content();
  fs.writeFileSync(path.resolve(__dirname, 'page.html'), content);
  
  // Try different selectors
  const videos = await p.evaluate(() => {
    const results = [];
    
    // Try multiple selector strategies
    const selectors = [
      'ytd-rich-item-renderer',
      'ytd-grid-video-renderer', 
      'ytd-video-renderer',
      '#content ytd-rich-item-renderer',
      'a#video-title',
      'a#video-title-link'
    ];
    
    for (const sel of selectors) {
      const els = document.querySelectorAll(sel);
      if (els.length > 0) {
        console.log(`Found ${els.length} elements with selector: ${sel}`);
      }
    }
    
    // Get all links that look like video links
    const allLinks = document.querySelectorAll('a[href*="/watch?v="]');
    allLinks.forEach(a => {
      const title = a.textContent?.trim() || a.getAttribute('title') || '';
      const href = a.href;
      const match = href.match(/v=([^&]+)/);
      if (match && title) {
        results.push({ title, videoId: match[1], href });
      }
    });
    
    return results;
  });
  
  console.log(`Found ${videos.length} videos`);
  console.log(JSON.stringify(videos.slice(0, 5), null, 2));
  
  // Save
  fs.writeFileSync(path.resolve(__dirname, 'videos.json'), JSON.stringify(videos, null, 2));
  
  await b.close();
})();
