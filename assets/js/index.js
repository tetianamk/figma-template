const burgerButton = document.getElementById('burger');
const navList = document.getElementById('nav-list');

burgerButton.addEventListener('click', (e) => {
  burgerButton.classList.toggle('burger-open')
  navList.classList.toggle('hidden-display');
});