const CACHE_NAME = 'adexto-v1';
const urlsToCache = [
  '/',
  '/cenovnik',
  '/modeli',
  '/galerija',
  '/kontakt',
  '/manifest.json',
  '/images/logo.svg',
  '/images/android-chrome-192x192.png',
  '/images/android-chrome-512x512.png',
  '/adexto-3-d-model.mp4'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});