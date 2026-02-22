const CACHE_NAME = 'champs-camp-v1';

// Install the worker
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

// Intercept network requests and load super fast
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
