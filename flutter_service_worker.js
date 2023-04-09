'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "71c74fd87d6c83714889dda0215e21fd",
"index.html": "5328b0c4787912455551bb8b2e7baa72",
"/": "5328b0c4787912455551bb8b2e7baa72",
"main.dart.js": "66291525395c3d7064b8f7bcba92dd12",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "1031bc8546ee226cb4af4fa00b4ba48c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b5739cef99432ae64c69d284ea083f6e",
"assets/AssetManifest.json": "dc5e912a111162633fe459e3008bd0f4",
"assets/NOTICES": "02d3a597327ebd8830225aef99a145b0",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/aglutinasi.png": "53cb1c407395fbc480e96e24c7027ad1",
"assets/assets/presipitasi.png": "3c59e07a61d6bc8d70ea9cc2ac64bd81",
"assets/assets/web_loading.gif": "aea82a19e2d2c3b67a080a059adcf463",
"assets/assets/kekebalan_aktif.png": "5c566fc8a0c7bbf2c31461f824da00f7",
"assets/assets/antibodi.jpg": "9784feb0f9ff8ffedec25d70e3b59140",
"assets/assets/profile_img.jpg": "f88c5f6c35f33daff9527575d9c4c45c",
"assets/assets/peta_konsep.png": "b548692d8fa9e25ef87ac257adafe7a2",
"assets/assets/drawer.png": "e97d82965e3398e99d75c887d1d98979",
"assets/assets/game1_4.png": "b0495096fe5be0f8ced9193d589491db",
"assets/assets/amico.png": "c6d7e042b319aad93b3378a479c3a577",
"assets/assets/doctor.png": "624b343e298fa15041f201be6c5a4032",
"assets/assets/petunjuk_1.jpg": "b8b223d020b32350e2e9456c51984ffe",
"assets/assets/rangkuman.png": "a6ddac58f48ce3feb65210d666b1a7e7",
"assets/assets/game1_1.png": "9e51b9cc4882da4c11df87e199e5bdde",
"assets/assets/bro.png": "d958f56b46f424d5bd705059d3436ebb",
"assets/assets/success_icon.png": "963b9d8fa9f2b65d5b9864f74567039e",
"assets/assets/game1_3.png": "f12ba259d8a9490c4275d0343d911f13",
"assets/assets/petunjuk_2.jpg": "8a3612b32c9c22c7aed1666d75c1d2e0",
"assets/assets/game1_2.png": "cdf4474a9fffb9fbb53be8fd0afb6154",
"assets/assets/materi.png": "78cfd96e4192aca15edc594f294e7d6c",
"assets/assets/Petunjuk%2520Penggunaan-1_page-0001.jpg": "0ceed02c5fda2f672eef7f32dbae89d5",
"assets/assets/left.png": "00b21a3a07940fa0594a0d241ca43a4c",
"assets/assets/logo.png": "1031bc8546ee226cb4af4fa00b4ba48c",
"assets/assets/refrensi.png": "6c71766e8aa39a8473a2fda374365daa",
"assets/assets/petunjuk_31.jpg": "9b208d90707be7bccdf3752deffd4bab",
"assets/assets/lkpd.png": "009186cf962b1e4cf79fdbe3da9b9b8c",
"assets/assets/kd_2.jpg": "d0c9cdde035a6f0f2d42506bfaf8e010",
"assets/assets/kd_2.png": "fec32d7b0ef44d87031d406b3d529d91",
"assets/assets/netralis.png": "cf3e302c0c90ac6ce6029e66b5dc2143",
"assets/assets/evaluasi.png": "d14a80f0e0b53b2e60949f44c19d8c18",
"assets/assets/rangkuman/8.png": "ec16f9d2aea55b0a489a0d0fbc6a8135",
"assets/assets/rangkuman/9.png": "f7a6fd1948bb5170d9bf76c3376eb5a6",
"assets/assets/rangkuman/12.png": "d076a37f332dd7fc2ec8e315e86282c2",
"assets/assets/rangkuman/13.png": "523088dce123966c102c0b4a3e3e7e3e",
"assets/assets/rangkuman/11.png": "15771e7d3646da0a540699d6a0e9bdcc",
"assets/assets/rangkuman/10.png": "ac21cecec025f14e3f29f22efed3b191",
"assets/assets/rangkuman/4.png": "041dbd2b7a9ebb5f3cfc421d8e59608e",
"assets/assets/rangkuman/5.png": "552f397a226c88eb09b6540ea6683213",
"assets/assets/rangkuman/7.png": "3989a091c66a148a6fd31960d7710e62",
"assets/assets/rangkuman/6.png": "6fc50eb8ee9ab59ac43a6806643b6166",
"assets/assets/rangkuman/2.png": "fe2e522038618ed0b281a0f74d8ec6ca",
"assets/assets/rangkuman/3.png": "cd97ac76c01ec9d0dfabe8863c978d6f",
"assets/assets/rangkuman/1.png": "c1e05722e75f8fa2c1699c371e70a9b1",
"assets/assets/kd_1.jpg": "ba6ebe6eea4f000e717c90672cac2255",
"assets/assets/landscape.jpeg": "6ee4df1064a9d6433ad2f3bb53bd8335",
"assets/assets/kd_1.png": "c41213c493c8e8d432a4d74912b4cb2d",
"assets/assets/cuate.png": "187e00073e303cbfc488f5886acbf73f",
"assets/assets/right.png": "1d89eabb6ae7f0c8103dc4f537ea425e",
"assets/assets/standart_kompetensi.png": "a40838dac3c15d1a93338e5bc8341bbe",
"assets/assets/kekebalan_pasif.png": "818d55fcdc34558447f8056b011377b6",
"assets/assets/peta_konsep_item.png": "82268c5d567a5191649de802e8bc0705",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
