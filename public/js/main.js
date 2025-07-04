// GlideJS
new Glide('.glide').mount();

// AOS Init
AOS.init();

// Leaflet Map
const map = L.map('map').setView([-17.6509, -149.4260], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
L.marker([-17.6509, -149.4260]).addTo(map)
  .bindPopup('Papeete, Tahiti - French Polynesia')
  .openPopup();
