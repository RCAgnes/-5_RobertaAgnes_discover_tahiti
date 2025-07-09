document.addEventListener("DOMContentLoaded", function() {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    once: true // anima só uma vez
  });

  AOS.refresh(); // garante atualização

  // Initialize Glide for main carousel
  if (document.querySelector('.glide')) {
    new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      autoplay: 3000,
      animationDuration: 800,
      animationTimingFunc: 'ease-in-out',
    }).mount();
  }

  // Initialize Lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  // Initialize Leaflet map if element exists
  if (document.getElementById('map')) {
    var map = L.map('map').setView([-17.6509, -149.4260], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var marker = L.marker([-17.6509, -149.4260]).addTo(map);
    marker.bindPopup("<b>Tahiti</b><br>Welcome to Tahiti!").openPopup();
  }

  // Initialize Glide for gallery carousel
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

  // Initialize Glide for Welcome to Tahiti carousel
  if (document.querySelector('.welcome-glide')) {
    new Glide('.welcome-glide', {
      type: 'carousel',
      perView: 1,
      autoplay: 3000,
      animationDuration: 800,
      animationTimingFunc: 'ease-in-out'
    }).mount();
  }

  // Granim.js animated background
  if (document.getElementById('granim-canvas')) {
    new Granim({
      element: '#granim-canvas',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      states : {
        "default-state": {
          gradients: [
            ['#00bfa5', '#1de9b6'],
            ['#43cea2', '#185a9d'],
            ['#ff9966', '#ff5e62']
          ],
          transitionSpeed: 2000
        }
      }
    });
  }

  // Animate Travel Tips bullet points with Anime.js
  if (document.querySelector('.tips-list')) {
    anime({
      targets: '.tips-list li',
      opacity: [0, 1],
      translateX: [-30, 0],
      delay: anime.stagger(200),
      duration: 800,
      easing: 'easeOutQuad'
    });
  }
});

