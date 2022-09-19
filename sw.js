//
// Major version: changes in behavior / new buttons etc
// Minor version: new/edited cars / bug fixes
const staticCacheName = 'languageTree-v17-6';

self.addEventListener('install', (e) => {
  console.log("Registering sw");
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => cache.addAll([
      '/languageTree/',
      '/languageTree/data/romanian-tree.js',
      '/languageTree/src/languageTree.js',
      '/languageTree/img/background-tree.svg',
      '/languageTree/img/delta-icon.png',
      '/languageTree/img/leaf-icon.png',
      '/languageTree/img/root-icon.png',
      '/languageTree/img/parent-icon.png',
      '/languageTree/img/search-icon-1.png',
      '/languageTree/img/search-icon-2.png',
      '/languageTree/img/settings-icon.png',
      '/languageTree/img/shuffle-icon-1.png',
      '/languageTree/img/shuffle-icon-2.png',
      '/languageTree/img/shuffle-icon-3.png',
      '/languageTree/img/shuffle-icon-4.png',
      '/languageTree/img/sort-icon.png',
      '/languageTree/img/swap-language-icon-1.png',
      '/languageTree/img/swap-language-icon-2.png',
      '/languageTree/src/ui.js',
      '/languageTree/style/rainbow-cards.css',
      '/languageTree/index.html'
    ])),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      )
    })
  )
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
