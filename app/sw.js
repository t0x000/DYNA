const CACHE_NAME = 'dyna-cache-v1';

const urlsToCache = [
  '/app/',
  '/app/index.html',
  '/app/style.css',
  '/app/app.js',
  '/app/manifest.json',
  '/app/images/icon-192x192.png',
  '/app/images/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching app shell');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log('Service Worker: Serving from cache', event.request.url);
        return response;
      }
      console.log('Service Worker: Fetching from network', event.request.url);
      return fetch(event.request);
    })
  );
});

