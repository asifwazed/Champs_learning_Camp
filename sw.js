/* sw.js - Champ's Camp Progressive Web App Engine v7.0 */

const CACHE_NAME = 'champs-camp-core-v7';

const CACHE_ASSETS = [
    './',
    './index.html',
    './index-engine.js',
    './grammar_matrix.html',
    './grammar_matrix_db.js',
    './grammar_matrix_engine.js',
    './grammar_exam.html',
    './boss-db.js',
    './boss-engine.js',
    './basic_english.html',
    './basic-db.js',
    './basic-engine.js',
    './adv_english.html',
    './adv-engine.js',
    './tools.html',
    './tools-engine.js',
    './units.html',
    './exam.html',
    './exam-db.js',
    './exam-engine.js',
    './part_b.html',
    './grammar-db.js',
    './grammar-engine.js',
    './writing.html',
    './writing-db.js',
    './writing-engine.js',
    './global-engine.js',
    './ai-database.js',
    './database.js',
    './manifest.json'
];

self.addEventListener('install', (e) => {
    self.skipWaiting(); 
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('SW: Forging Core Assets v7');
            return Promise.allSettled(CACHE_ASSETS.map(asset => cache.add(asset).catch(err => console.log(`Failed to cache ${asset}`))));
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim()) 
    );
});

self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            const networkFetch = fetch(e.request).then((networkResponse) => {
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(e.request, networkResponse.clone());
                });
                return networkResponse;
            }).catch(() => { });
            return cachedResponse || networkFetch;
        })
    );
});
