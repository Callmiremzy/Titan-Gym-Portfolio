const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('navBar');
const closeBtn = document.getElementById('closeBtn');
const navLinks = mobileNav.querySelectorAll('a');


// Open nav
hamburger.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

// Close nav
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

// Close nav if clicking outside
document.addEventListener('click', (e) => {
  if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
    mobileNav.classList.remove('active');
  }
});
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});
