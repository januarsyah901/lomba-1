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

if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  // gradien[1].classList.remove('gradien');
} else {
  document.documentElement.classList.remove("dark");
  // gradien[1].classList.add('gradien');
}
$(document).ready(function () {

  $("#indonesia").click(function () {
    $(".bahasa").text("Indonesia");
    $(".pembukaan1").html(`
    <div class="z-40 grid grid-cols-9 w-full h-screen content-center tracking-tight text-white">
      <h1 class="mt-32 font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl col-start-2 col-span-8">
        LANGKAH AWAL<br /><span class="font-thin">UNTUK MEMULAI <br /></span><span class="text-5xl">KEBAIKAN</span>
        <p class="block mt-4 text-xl 2xl:text-3xl font-thin">
          mari salurkan <br />
          kepedulian anda
        </p>
      </h1>
      <div class="grid z-40 col-start-3 lg:col-start-8 grid-rows-2 justify-center">
        <div class="row-start-2">
          <button type="button" class="py-2 px-4 text-base font-bold text-center text-main bg-white rounded-full hover:bg-main hover:text-white">DONASI</button>
        </div>
      </div>
    </div>`);
    $(".pembukaan2").html(`<div class="pembukaan2 flex text-left text-lg md:text-2xl 2xl:text-4xl text-white font-medium antialiased w-[80%] md:w-[85%] lg:w-[90%] 2xl:w-[96%]">
    <p><span class=" text-xl md:text-3xl 2xl:text-6xl">INDONESIA</span> organisasi muda yang siap untuk membangkitkan kesejahteraan masyarakat indonesia dengan menyatukan kepedulian bersama dan menuangkannya kepada yang membutuhkan.</p>
  </div>`);
  $(".visimisi").html();
  });
  $("#jawa").click(function () {
    $(".bahasa").text("Jawa");
    $(".pembukaan1").html();
    $(".pembukaan2").html(`<div class="pembukaan2 flex text-left text-lg md:text-2xl 2xl:text-4xl text-white font-medium antialiased w-[80%] md:w-[85%] lg:w-[90%] 2xl:w-[96%]">
    <p><span class=" text-xl md:text-3xl 2xl:text-6xl">JAWA</span> organisasi enom seng cepak gae nukulno kesejahteraan wong wong indonesia karo nyatokake pengerten sedoyo lan ditublek ake marang wong seng butuh.</p>
  </div>`);
  $(".visimisi").html();
  });
  $("#sunda").click(function () {
    $(".bahasa").text("Sunda");
    $(".pembukaan1").html();
    $(".pembukaan2").html(`<div class="pembukaan2 flex text-left text-lg md:text-2xl 2xl:text-4xl text-white font-medium antialiased w-[80%] md:w-[85%] lg:w-[90%] 2xl:w-[96%]">
    <p><span class=" text-xl md:text-3xl 2xl:text-6xl">SUNDA</span> organisasi muda nu siap untuk hayong alim nuju naon ayena, ayena saha nu bagean piket tabuh sabaraha atu.</p>
  </div>`);
  $(".visimisi").html();
  });
  $("#english").click(function () {
    $(".bahasa").text("English");
    $(".pembukaan1").html();
    $(".pembukaan2").html(`<div class="pembukaan2 flex text-left text-lg md:text-2xl 2xl:text-4xl text-white font-medium antialiased w-[80%] md:w-[85%] lg:w-[90%] 2xl:w-[96%]">
    <p><span class=" text-xl md:text-3xl 2xl:text-6xl">English</span> what the florr, me will kill a some thing with my girl friendds and u wll love someone when i saw you bhind.</p>
  </div>`);
  $(".visimisi").html();
  });
  $("#madura").click(function () {
    $(".bahasa").text("Madura");
    $(".pembukaan1").html();
    $(".pembukaan2").html(`<div class="pembukaan2 flex text-left text-lg md:text-2xl 2xl:text-4xl text-white font-medium antialiased w-[80%] md:w-[85%] lg:w-[90%] 2xl:w-[96%]">
    <p><span class=" text-xl md:text-3xl 2xl:text-6xl">Madura</span> carok tokar cong been ganteng, sampe an meta medunten ngajak gelot, ancene raine koyok ngunu, mengundan pukulan.</p>
  </div>`);
  $(".visimisi").html();
  });
  
});
