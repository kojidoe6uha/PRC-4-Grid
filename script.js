const burgerBtn = document.getElementById('burger-btn');
const nav = document.querySelector('nav');

burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});