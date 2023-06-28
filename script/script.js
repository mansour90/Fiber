const openMenu = document.querySelector('.menu-open');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.mobile-menu');

openMenu.addEventListener('click', openTheMenu);
closeMenu.addEventListener('click', closeTheMenu);

function openTheMenu() {
  menu.classList.add('open');
}

function closeTheMenu() {
  menu.classList.remove('open')
}