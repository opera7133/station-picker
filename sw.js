const kantoScripts = [
  "kanto",
  "jr-east/tokyo",
  "jr-east/chiba",
  "jr-east/saitama",
  "jr-east/ibaraki",
  "jr-east/kanagawa",
  "tokyo-metro/tokyo-metro",
  "tobu/chiba",
  "tobu/saitama",
  "seibu/seibu",
  "keisei/ks",
  "tx/tx",
  "toei/toei",
  "toei/nt",
  "toei/sakura",
  "keio/keio",
  "rinkai/rinkai",
  "tokyo-monorail/tokyo-monorail",
  "yurikamome/yurikamome",
  "tama-monorail/tama-monorail",
  "hokso/hs",
  "cm/cm",
  "yu-kari/yu-kari",
  "kominato/kominato",
  "isumi/isumi",
  "toyo/toyo",
  "choshi/choshi",
  "ryutetsu/ryutetsu",
  "sr/sr",
  "ns/ns",
  "kantetsu/kantetsu",
  "kashima-rinkai/kashima-rinkai",
  "hitachinaka/hitachinaka",
];
const CACHE_NAME = "station-picker-1.0.0";
const urlsToCache = [...kantoScripts.map((script) => `./assets/${script}.js`)];

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
