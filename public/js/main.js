// GlideJS
new Glide('.glide').mount();

// AOS Init
AOS.init();

// Leaflet Map
// Inicialize o mapa Leaflet apenas se o elemento existir
if (document.getElementById('map')) {
  var map = L.map('map').setView([-17.6509, -149.4260], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  var marker = L.marker([-17.6509, -149.4260]).addTo(map);
  marker.bindPopup("<b>Tahiti</b><br>Welcome to Tahiti!").openPopup();
}

// Glide para a galeria
if (document.querySelector('.gallery-glide')) {
  new Glide('.gallery-glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 2500,
    hoverpause: true,
    animationDuration: 900,
    animationTimingFunc: 'linear'
  }).mount();
}
