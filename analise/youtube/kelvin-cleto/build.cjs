const fs = require('fs');
const path = require('path');

const dec = s => new TextDecoder('windows-1252').decode(fs.readFileSync(path.join(__dirname, s)));
const dir = f => path.join(__dirname, f);

const raw = JSON.parse(dec('raw2.json'));
const titles = {};
dec('ids-pt2.txt').split(/\r?\n/).filter(Boolean).forEach(l => {
  const i = l.indexOf('|');
  titles[l.slice(0, i)] = l.slice(i + 1);
});

const vids = raw.entries.map(e => ({
  videoId: e.id,
  title: titles[e.id] || e.title,
  duration: e.duration,
  views: e.view_count,
  url: 'https://www.youtube.com/watch?v=' + e.id,
}));

fs.writeFileSync(dir('videos.json'), JSON.stringify(vids, null, 2), 'utf8');
fs.writeFileSync(dir('urls.txt'), vids.map(v => v.url).join('\n'), 'utf8');
console.log('videos:', vids.length);
console.log('primeiro:', vids[0].title);
console.log('ultimo:', vids[vids.length - 1].title);
