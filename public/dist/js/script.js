// Hamburger menu
window.onscroll = () => {
  const header = document.querySelector('header');
  const navMenu = document.querySelector('#nav-menu');
  const navMenuLus = document.querySelector('#nav-menu ul');
  const navMenu1 = document.querySelector('.nav-menu1');
  const navMenu2 = document.querySelector('.nav-menu2');

  const fixed = header.offsetTop;

  if (window.pageYOffset > fixed) {
    header.classList.add('navbar-fixed');
    navMenu.classList.add('text-black');
    navMenuLus.classList.add('text-black');
    navMenu1.classList.add('text-black');
    navMenu2.classList.add('text-black');
  } else {
    header.classList.remove('navbar-fixed');
    navMenu.classList.remove('text-black');
    navMenuLus.classList.remove('text-black');
    navMenu1.classList.remove('text-black');
    navMenu2.classList.remove('text-black');
  }
};

const hamburger = document.querySelector('#hamburger');
const languageButton = document.querySelector('#language-dropdown-button');
const languageMenu = document.querySelector('#language-dropdown-menu');
const languagedrop = document.querySelector('#language-dropdown-select');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
languageButton.addEventListener('click', () => {
  languageMenu.classList.toggle('hidden');
  languagedrop.classList.toggle('flag-active');
});

// Dark mode

const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const gradien = document.querySelectorAll('.grad');
console.log('grad', gradien);

// mengganti icon dalam tombol tergantung local storage
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggleLightIcon.classList.remove('hidden');
  themeToggleDarkIcon.classList.add('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
  // icon dalam tombol
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  // jika sebelumnya udah ada di local storage
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      // gradien[0].classList.remove('gradien');
      gradien.forEach((element) => {
        element.classList.remove('gradien');
      });
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      // gradien[0].classList.add('gradien');
      gradien.forEach((element) => {
        element.classList.add('gradien');
      });
    }

    //Jika belum ada di local storage
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      // gradien[0].classList.add('gradien');
      gradien.forEach((element) => {
        element.classList.add('gradien');
      });
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      // gradien[0].classList.remove('gradien');
      gradien.forEach((element) => {
        element.classList.remove('gradien');
      });
    }
  }
});

// Language
