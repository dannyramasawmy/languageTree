self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('romanian-dictionary').then((cache) => cache.addAll([
        '/languageTree/',
        '/languageTree/data/romanian-tree.js',
        '/languageTree/img/delta-icon.png',
        '/languageTree/src/languageTree.js',
        '/languageTree/src/ui.js',
        '/languageTree/style/rainbow-cards.css',
        '/languageTree/index.html'
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
  