//
// Major version: changes in behavior / interface changes
// Middle version: bug fixes / view updates
// Minor version: new/edited words
const version = "v25.3.6";
const staticCacheName = 'languageTree-' + version;

self.addEventListener('install', (e) =>
{
  console.log("Registering sw");
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => cache.addAll([
      // root
      '/languageTree/index.html',
      '/languageTree/configuration.js',
      // data
      '/languageTree/data/music-tree.js',
      '/languageTree/data/romanian-functions.js',
      '/languageTree/data/romanian-language-models.js',
      '/languageTree/data/romanian-tree.js',
      '/languageTree/data/romanian-views.js',
      // img
      '/languageTree/img/background-tree.svg',
      '/languageTree/img/delta-icon.png',
      '/languageTree/img/leaf-icon.svg',
      '/languageTree/img/parent-icon.svg',
      '/languageTree/img/root-icon.svg',
      '/languageTree/img/screenshot.png',
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
      // src
      '/languageTree/src/app.js',
      '/languageTree/src/identifiers.js',
      '/languageTree/src/view.js',
      // src/buttons
      '/languageTree/src/buttons/button.js',
      '/languageTree/src/buttons/view.js',
      // src/colours
      '/languageTree/src/colors/colorWheel.js',
      '/languageTree/src/colors/rainbowColorWheel.js',
      // src/history
      '/languageTree/src/history/scroll.js',
      // src/pracice
      '/languageTree/src/practice/functions.js',
      '/languageTree/src/practice/models.js',
      // src/search
      '/languageTree/src/search/functions.js',
      '/languageTree/src/search/index.js',
      '/languageTree/src/search/models.js',
      '/languageTree/src/search/view.js',
      // src/settings
      '/languageTree/src/settings/settings.js',
      '/languageTree/src/settings/view.js',
      // src/state
      '/languageTree/src/state/localStorage.js',
      '/languageTree/src/state/models.js',
      // src/stats
      '/languageTree/src/stats/functions.js',
      '/languageTree/src/stats/models.js',
      '/languageTree/src/stats/svg.js',
      '/languageTree/src/stats/view.js',
      // src/sw
      // 'languageTree/src/sw/register.js',
      // src/tree
      '/languageTree/src/tree/enums.js',
      '/languageTree/src/tree/functions.js',
      '/languageTree/src/tree/index.js',
      '/languageTree/src/tree/models.js',
      '/languageTree/src/tree/types.js',
      '/languageTree/src/tree/view.js',
      // src/utils
      '/languageTree/src/utils/random.js',
      '/languageTree/src/utils/string.js',
      // style
      '/languageTree/style/style.css',
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
