// Service Worker, not attached to any other page, runs on a separate fret.
self.addEventListener('install', function(event) {
    console.log('SW installed');
    event.waitUntil( //El SW s'apaga sol, ficant aixo fem que estigui despert fins que aabi tot aixo de dintre.
        caches.open('static')
            .then(function(cache) {
                //cache.add('/');
                //cache.add('/index.html'); Individual adding
                cache.addAll([    //Adding in block
                    '/',
                    '/index.html',
                    '/contacte.html',

                    //CDNS used
                    'https://fonts.googleapis.com/css?family=Roboto:400,600,700,800',
                    '//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css',
                    'https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js',
                    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
                    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
                    //to get the icons we need to get more recurrent:   ls -d **/*/* | awk '{print "\47/" $1 "\47,"}'
                    '/images/icons/love-1080x1080.png',
                    '/images/icons/love-128x128.png',
                    '/images/icons/love-144x144.png',
                    '/images/icons/love-152x152.png',
                    '/images/icons/love-192x192.png',
                    '/images/icons/love-384x384.png',
                    '/images/icons/love-512x512.png',
                    '/images/icons/love-72x72.png',
                    '/images/icons/love-96x96.png',
                    //inside the folders: get them running on the terminal:  ls -d **/* | awk '{print "\47/" $1 "\47,"}'
                    // \47 stands for ' as character in awk
                    // ls -d **/* makes ls recurrent until 2 levels.

                    //REMOVE IMAGES/ICONS
                    '/images/11-1.jpeg',
                    '/images/11-10.jpg',
                    '/images/11-11.jpg',
                    '/images/11-12.jpg',
                    '/images/11-13.jpg',
                    '/images/11-14.jpg',
                    '/images/11-15.jpg',
                    '/images/11-16.jpg',
                    '/images/11-17.jpg',
                    '/images/11-18.jpg',
                    '/images/11-19.jpg',
                    '/images/11-2.jpeg',
                    '/images/11-20.jpg',
                    '/images/11-21.jpg',
                    '/images/11-3.jpg',
                    '/images/11-4.jpg',
                    '/images/11-5.jpg',
                    '/images/11-6.jpg',
                    '/images/11-7.jpg',
                    '/images/11-8.jpg',
                    '/images/11-9.jpg',
                    '/images/12-1.jpg',
                    '/images/12-25.jpg',
                    '/images/bckgnd.jpg',
                    '/images/benches.jpg',
                    '/images/black.png',
                    '/images/bridge.jpg',
                    '/images/coast.jpg',
                    '/images/DSC06275.JPG',
                    '/images/Fondo.jpg',
                    '/images/IMG_20171202_144417.jpg',
                    '/images/IMG_20171203_200843.jpg',
                    '/images/IMG_20171203_201300.jpg',
                    '/images/park.jpg',
                    '/images/prova.jpg',
                    '/images/rails.jpg',
                    '/images/rocks.jpg',
                    '/images/sky.jpg',
                    '/images/Thumbs.db',
                    '/images/traffic.jpg',
                    '/images/tunnel.jpg',
                    '/js/activateSW.js',
                    '/js/baguetteBox.min.js',
                    '/js/JqueryEasing.js',
                    '/js/scripts.js',
                    '/js/scroll.js',
                    '/media/BeastBurden.mp3',
                    '/styles/baguetteBox.min.css',
                    '/styles/bootstrap.min.css',
                    '/styles/custom_style.css',
                    '/styles/gallery-clean.css',
                    '/styles/topbutton.css'
                ])
            })
    );
});

self.addEventListener('activate', function() {
    console.log('SW Activated');
}); //The SW only activates when the user closes all the existing tabs of our pages, because if it was a change it would breake the otehers.


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(res) {
                if (res) {
                    return res;
                } else {
                    return fetch(event.request);
                }
            })
    );
})