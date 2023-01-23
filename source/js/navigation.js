let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

nav.classList.remove('navigation--nojs');

navToggle.onclick = function() {
  nav.classList.toggle('navigation--closed');
  nav.classList.toggle('navigation--opened');
};
