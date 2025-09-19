  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#toolsCarousel', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        autoplay: true,
        pauseOnHover: true,
        interval: 6000,
        arrows: false,
        breakpoints: {
          768: {
            perPage: 1,
          },
          965: {
             perpage: 2
          },  
        },
        type: 'loop',
        pagination: true,
    } );
    splide.mount();
  } );
// SECTION CAROUSEL
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#lastCarousel', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '1.5rem',
        autoplay: true,
        pauseOnHover: true,
        interval: 6000,
        arrows: false,
        breakpoints: {
          768: {
            perPage: 1,
          },
          965: {
             perpage: 2
          },  
        },
        type: 'loop',
        pagination: true,
    } );
    splide.mount();
  } );