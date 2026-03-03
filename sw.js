const CACHE_NAME = 'champs-camp-v3'; // Upgraded to v3 to force phones to update!

const CACHE_ASSETS = [
    '/',
    '/index.html',
    '/grammar_matrix.html',
    '/grammar_exam.html', // The new file!
    '/basic_english.html',
    '/adv_english.html',
    '/tools.html',
    '/units.html',
    '/part_b.html',
    '/writing.html',
    '/global-engine.js',
    '/ai-database.js',
    '/manifest.json'
];

// Install Event - Pre-cache the main files
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('SW: Caching Core Assets');
            // Using catch to prevent failure if one file is missing
            return Promise.allSettled(CACHE_ASSETS.map(asset => cache.add(asset).catch(err => console.log(`Failed to cache ${asset}`))));
        })
        .then(() => self.skipWaiting())
    );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('SW: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch Event - Serve from Cache, fallback to Network
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        }).catch(() => {
            // Optional fallback for offline pages
            if(e.request.url.endsWith('.html')) return caches.match('/index.html');
        })
    );
});
