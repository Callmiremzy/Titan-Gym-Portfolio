
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  // when scroll down 50px
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
