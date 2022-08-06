// Menu Events
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('mobile-menu');

function openMobileMenu() {
  menu.style.visibility = 'visible';
  hamburger.style.visibility = 'hidden';
  closeMenu.style.visibility = 'visible';
}

function closeMobileMenu() {
  menu.style.visibility = 'hidden';
  hamburger.style.visibility = 'visible';
  closeMenu.style.visibility = 'hidden';
}

hamburger.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
