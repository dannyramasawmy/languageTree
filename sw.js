self.addEventListener('install', (e) => {
  console.log("Registering sw");
    e.waitUntil(
      caches.open('romanian-dictionary').then((cache) => cache.addAll([
        '/',
        '/data/romanian-tree.js',
        '/img/delta-icon.png',
        '/src/languageTree.js',
        '/src/ui.js',
        '/style/rainbow-cards.css',
        '/index.html'
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
  