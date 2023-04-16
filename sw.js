//
// Major version: changes in behavior / new buttons etc
// Minor version: new/edited words / bug fixes
const staticCacheName = 'languageTree-v20.3';

self.addEventListener('install', (e) =>
{
  console.log("Registering sw");
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => cache.addAll([
      '/languageTree/',
      '/languageTree/index.html',
      '/languageTree/style/style.css',
      '/languageTree/data/romanian-tree.js',
      '/languageTree/src/languageTree.js',
      '/languageTree/src/ui.js',
      '/languageTree/src/view.js',
      '/languageTree/img/background-tree.svg',
      '/languageTree/img/delta-icon.png',
      '/languageTree/img/leaf-icon.svg',
      '/languageTree/img/root-icon.svg',
      '/languageTree/img/parent-icon.svg',
      '/languageTree/img/search-icon.svg',
      '/languageTree/img/shuffle-icon-1.svg',
      '/languageTree/img/shuffle-icon-2.svg',
      '/languageTree/img/shuffle-icon-3.svg',
      '/languageTree/img/shuffle-icon-4.svg',
      '/languageTree/img/shuffle-icon-5.svg',
      '/languageTree/img/shuffle-icon-6.svg',
      '/languageTree/img/shuffle-icon-7.svg',
      '/languageTree/img/shuffle-icon-8.svg',
      '/languageTree/img/sort-icon.svg',
      '/languageTree/img/swap-language-icon-1.svg',
      '/languageTree/img/swap-language-icon-2.svg',
    ])),
  );
});

self.addEventListener('activate', (e) =>
{
  e.waitUntil(
    caches.keys().then(keys =>
    {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      )
    })
  )
});

self.addEventListener('fetch', (e) =>
{
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
