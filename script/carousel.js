  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#toolsCarousel', {
        type: 'loop',
        perPage: 4,
        autoplay: true,
        pauseOnHover: true,
        interval: 5000,
        arrows: false,
        breakpoints: {
          700: {
            perPage: 1,
          },  
        },
        type: 'loop',
        pagination: true,
    } );
    splide.mount();
  } );