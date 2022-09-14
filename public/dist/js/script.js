// Hamburger menu
window.onscroll = () => {
  const header = document.querySelector("header");
  const navMenu = document.querySelector("#nav-menu");
  const navMenuLus = document.querySelector("#nav-menu ul");
  const navMenu1 = document.querySelector(".nav-menu1");
  const navMenu2 = document.querySelector(".nav-menu2");

  const fixed = header.offsetTop;

  if (window.pageYOffset > fixed) {
    header.classList.add("navbar-fixed");
    navMenu.classList.add("text-black");
    navMenuLus.classList.add("text-black");
    navMenu1.classList.add("text-black");
    navMenu2.classList.add("text-black");
  } else {
    header.classList.remove("navbar-fixed");
    navMenu.classList.remove("text-black");
    navMenuLus.classList.remove("text-black");
    navMenu1.classList.remove("text-black");
    navMenu2.classList.remove("text-black");
  }
};

const hamburger = document.querySelector("#hamburger");
const languageButton = document.querySelector("#language-dropdown-button");
const languageMenu = document.querySelector("#language-dropdown-menu");
const languagedrop = document.querySelector("#language-dropdown-select");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
languageButton.addEventListener("click", () => {
  languageMenu.classList.toggle("hidden");
  languagedrop.classList.toggle("flag-active");
});

// Dark mode

const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
const gradien = document.querySelectorAll(".grad");
console.log("grad", gradien);

// mengganti icon dalam tombol tergantung local storage
if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  themeToggleLightIcon.classList.remove("hidden");
  themeToggleDarkIcon.classList.add("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // icon dalam tombol
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // jika sebelumnya udah ada di local storage
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      // gradien[0].classList.remove('gradien');
      gradien.forEach((element) => {
        element.classList.remove("gradien");
      });
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      // gradien[0].classList.add('gradien');
      gradien.forEach((element) => {
        element.classList.add("gradien");
      });
    }

    //Jika belum ada di local storage
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      // gradien[0].classList.add('gradien');
      gradien.forEach((element) => {
        element.classList.add("gradien");
      });
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      // gradien[0].classList.remove('gradien');
      gradien.forEach((element) => {
        element.classList.remove("gradien");
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
    $(".nav1").text("Beranda");
    $(".nav2").text("Agenda");
    $(".nav3").text("Tentang");
    $(".nav4").text("Galeri");
    $(".bahasa").text("Indonesia");
    $(".pembukaan1").html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">Sebuah</span> organisasi muda yang siap untuk membangkitkan kesejahteraan masyarakat indonesia dengan menyatukan kepedulian bersama dan menuangkannya kepada yang membutuhkan.
  </p>`);
    $(".pembukaan").html();
    $(".visi").text(" mewujudkan kesejahteraan bagi masyarakat Indonesia yang merupakan cita-cita luhur kemerdekaan. Menjadikan semua merasakan sila kedua, yaitu kemanusiaan yang adil dan beradab bersama. ");
    $(".misi").text(" menyumbangkan kepedulian kita berupa, pakaian layak pakai, sembako, dan juga dana untuk membeli air besih bagi mereka yang membutuhkan dan kebutuhan lainnya. ");
  });
  $("#jawa").click(function () {
    $(".nav1").text("Omah");
    $(".nav2").text("Kerongko");
    $(".nav3").text("A dewe");
    $(".nav4").text("Layar");
    $(".bahasa").text("Jawa");
    $(".pembukaan1").html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">Jawa</span> organisasi muda yang siap untuk membangkitkan kesejahteraan masyarakat indonesia dengan menyatukan kepedulian bersama dan menuangkannya kepada yang membutuhkan.
  </p>`);
    $(".pembukaan").html();
    $(".visi").text(" Jawa kesejahteraan bagi masyarakat Indonesia yang merupakan cita-cita luhur kemerdekaan. Menjadikan semua merasakan sila kedua, yaitu kemanusiaan yang adil dan beradab bersama. ");
    $(".misi").text();
  });
  $("#sunda").click(function () {
    $(".nav1").text("Imah");
    $(".nav2").text("Agenda");
    $(".nav3").text("Urang");
    $(".nav4").text("Galeri");
    $(".bahasa").text("Sunda");
    $(".pembukaan1").html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">Organisasi</span> anu siap kangge ngabangkitkeun kasejahteraan masyarakat indonesia ku nganyatukeun kapadulian sarerea jeung nganuangkeunna kanu ngabutuhkeun.
  </p>`);
    $(".pembukaan").html();
    $(".visi").text(" ngawujudkeun kasejahteraan kangge masyarakat indonesia anu mangrupakeun cita cita leluhur kamerdekaan.ngajadikeun sadaya ngarasakeun sila kadua,nyaeta kemanusiaan yang adil dan beradab. ");
    $(".misi").text(" nganyumbangkeun kapedulian urang mangrupa ,pakean anu masih layak di angge,sembako,sareng oge data kangge meser cai bersih kangge anu butuh tur kabutuhan nu sanesna. ");
  });
  $("#english").click(function () {
    $(".nav1").text("Home");
    $(".nav2").text("Plane");
    $(".nav3").text("About");
    $(".nav4").text("Galery");
    $(".bahasa").text("English");
    $(".pembukaan1").html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">A young organization</span>organization that is ready to raise the welfare of the Indonesian people by uniting common concerns and pouring them into those in need
  </p>`);
    $(".pembukaan").html();
    $(".visi").text("  mewujudkan kesejahteraan bagi masyarakat Indonesia yang merupakan cita-cita luhur kemerdekaan. Menjadikan semua merasakan sila kedua, yaitu kemanusiaan yang adil dan beradab bersama.  ");
    $(".misi").text(" contribute to the welfare of the people of Indonesia which is the noble ideal of independence. Making all feel the second precept, namely a just and civilized humanity together. ");
  });
  $("#madura").click(function () {
    $(".nav1").text("Compok");
    $(".nav2").text("Kalakoan");
    $(".nav3").text("Abhek");
    $(".nav4").text("Galeri");
    $(".bahasa").text("Madura");
    $(".pembukaan1").html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">Abhek</span> perkompolan ngodeh se siap ngebey jegeh aghi kesejahteraan masyarakat indonesia engak apolong aghi  kepedulian abhereng ambik mengaliraghi ngebey masyarakat se butoh.
  </p>`);
    $(".pembukaan").html();
    $(".visi").text(" menyumbang aghi kesejahteraan ghebey masyarakat indonesia se aropaaghi cita-cita luhur kemerdekaan. aghebey kabbi arrasahaghi sila ke dua, ajieh kemanusiaan se adil lan beradab se aberem");
    $(".misi").text(" menyumbang aghi kepedulian abek aropa aghi,klambih layak angghuy,sembako,lan tak loppa dana nghabay aeng berse nghabay masyarakat se butoh lan kabutohan se laen");
  });
});
