self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('romanian-dictionary').then((cache) => cache.addAll([
        '/languageTree/',
        '/languageTree/app.js',
        '/languageTree/data.js',
        '/languageTree/index.html',
        '/languageTree/src.js',
        '/languageTree/style.css',
        '/languageTree/icons/logo-128.png',
        '/languageTree/600px-Book-icon-bible.png',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
  