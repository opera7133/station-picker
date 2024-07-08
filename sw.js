const CACHE_NAME = "station-picker-1.0.0";
const urlsToCache = [...kantoScripts.map((script) => `/assets/${script}.js`)];

self.addEventListener("install", function (event) {
  console.log("sw event: install called");

  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log("sw event: fetch called");

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response ? response : fetch(event.request);
    })
  );
});
