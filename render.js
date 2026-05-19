// 文章渲染器
(async function() {
  var path = window.location.pathname;
  var match = path.match(/\/posts\/(.+)\.html/);
  if (!match) return;
  var slug = match[1];
  var res = await fetch(slug + '.html');
  if (!res.ok) return;
  var raw = await res.text();
  var fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!fmMatch) { var b = document.getElementById('post-body'); if (b) b.innerHTML = raw; return; }
  var fm = {};
  fmMatch[1].split('\n').forEach(function(line) {
    var m = line.match(/^(\w+):\s*(.+)/);
    if (m) fm[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
  });
  var body = fmMatch[2];
  if (fm.title) document.title = fm.title + ' — 云朵小记';
  var el;
  el = document.querySelector('.post-head-title'); if (el && fm.title) el.textContent = fm.title;
  el = document.querySelector('.post-head-date'); if (el && fm.date) el.textContent = fm.date;
  el = document.querySelector('.post-head-tag'); if (el && fm.tag && fm.tagclass) { el.textContent = fm.tag; el.className = 'post-tag ' + fm.tagclass; }
  el = document.getElementById('post-body'); if (el) el.innerHTML = body;
})();
