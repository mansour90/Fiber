const openMenu = document.querySelector('.menu-open');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');
const listMenu = document.querySelectorAll('.link-menu');

openMenu.addEventListener('click', openTheMenu);
closeMenu.addEventListener('click', closeTheMenu);

function openTheMenu() {
  menu.classList.add('open');
}

function closeTheMenu() {
  menu.classList.remove('open');
}

listMenu.forEach(function (list) {
  menu.classList.remove('open');
});

nav.addEventListener('scroll', function (e) {
  console.log(e.currentTarget.scrollHeight);
});

