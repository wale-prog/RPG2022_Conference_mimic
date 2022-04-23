const hamburger = document.querySelector('.hamburger');
const popupMenu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  popupMenu.classList.add('active');
  body.classList.add('scroll-lock');
  hamburger.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  popupMenu.classList.remove('active');
  body.classList.remove('scroll-lock');
  hamburger.classList.remove('active');
});
