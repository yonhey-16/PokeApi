self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('pokeapp-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css', // Ajusta si tu carpeta es /css o /CSS
          '/JS/api.js',
          '/JS/lista.js',
          '/JS/mios.js',
          '/JS/aleatorio.js',
          '/JS/favoritos.js',
          '/JS/datos.js',
          '/JS/detalle.js',
          '/icons/icon-192.png',
          '/icons/icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });