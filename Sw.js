// Minimal service worker — just enough to make the page installable.
// It doesn't cache anything, so it won't interfere with edits while you're
// still working on the site. Feel free to expand this later for offline support.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // no-op — pass everything through to the network