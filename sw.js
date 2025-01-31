const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.php',
    '/css/index.css',
    '/js/tour.js',
    '/icons/Alam Tasikmalaya.png',
    '/icons/Alam Tasikmalaya.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
