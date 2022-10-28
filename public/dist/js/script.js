// Hamburger menu
window.onscroll = () => {
  const header = document.querySelector('header');
  const navMenu = document.querySelector('#nav-menu');
  const navMenuLus = document.querySelector('#nav-menu ul');
  const navMenu1 = document.querySelector('.nav-menu1');
  const navMenu2 = document.querySelector('.nav-menu2');
  const line = document.querySelector('.line');
  const line1 = document.querySelector('.line2');
  const line2 = document.querySelector('.line3');

  const fixed = header.offsetTop;

  if (window.pageYOffset > fixed) {
    header.classList.add('navbar-fixed');
    navMenu.classList.add('text-black');
    navMenuLus.classList.add('text-black');
    navMenu1.classList.add('text-black');
    navMenu2.classList.add('text-black');

    line.classList.remove('white');
    line.classList.add('black');
    line1.classList.remove('white');
    line1.classList.add('black');
    line2.classList.remove('white');
    line2.classList.add('black');
  } else {
    header.classList.remove('navbar-fixed');
    navMenu.classList.remove('text-black');
    navMenuLus.classList.remove('text-black');
    navMenu1.classList.remove('text-black');
    navMenu2.classList.remove('text-black');

    line.classList.add('white');
    line.classList.remove('black');
    line1.classList.add('white');
    line1.classList.remove('black');
    line2.classList.add('white');
    line2.classList.remove('black');
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
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

    //Jika belum ada di local storage
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});
$(document).ready(function () {
  $('#indonesia').click(function () {
    $('.nav1').text('Beranda');
    $('.nav2').text('Agenda');
    $('.nav3').text('Tentang');
    $('.nav4').text('Galeri');
    $('.bahasa').text('Indonesia');
    $('.pembukaan1').html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">Sebuah</span> organisasi muda yang siap untuk membangkitkan kesejahteraan masyarakat Indonesia dengan menyatukan kepedulian bersama dan menuangkannya kepada yang membutuhkan.
  </p>`);
    $('.awal').html(` <h1  class="awal mt-32 font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl col-start-2 col-span-8">
    LANGKAH AWAL<br /><span class="font-thin">UNTUK MEMULAI <br /></span><span class="">KEBAIKAN</span>
    <p class="block mt-4 text-xl 2xl:text-3xl font-thin">
      mari salurkan <br />
      kepedulian anda
    </p>
  </h1>`);
    $('.pembukaan').html();
    $('.visi').text('Mewujudkan kesejahteraan bagi masyarakat Indonesia yang merupakan cita-cita luhur kemerdekaan. Menjadikan semua merasakan sila kedua, yaitu kemanusiaan yang adil dan beradab bersama.');
    $('.misi').text('Menyumbangkan kepedulian kita berupa, pakaian layak pakai, sembako, dan juga dana untuk membeli air besih bagi mereka yang membutuhkan dan kebutuhan lainnya.');
    $('.ag1').text('Berbagi sembako kepada masyarakat sekitar');
    $('.ag2').text('Kerja bakti membersihkan lingkungan');
    $('.ag3').text('Berbagi bahan makanan');
    $('.ag4').text('Bantuan korban bencana');
    $('.ag5').text('Berbagi bersama anggota TNI');
    $('.ag6').text('Santunan kepada anak yatim piatu');
    $('.fatih').text('Kepedulian menjadi salah satu bukti bahwa semua orang memiliki sisi baiknya');
    $('.sabra').text('Satu kepedulian bisa menumbuhkan berjuta kebahagiaan.');
    $('.januarsyah').text('Ketika kamu peduli, kebahagiaan akan berpihak padanya dan dirimu.');
  });
  $('#jawa').click(function () {
    $('.nav1').text('Omah');
    $('.nav2').text('Agenda');
    $('.nav3').text('A dewe');
    $('.nav4').text('Layar');
    $('.bahasa').text('Jawa');
    $('.pembukaan1').html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">Organisasi</span>  nom-noman kang siyaga ngunggahake karaharjaning bangsa Indonesia kanthi nyawijikake keprihatinan umum lan diwutahake marang sing butuh.
  </p>`);
    $('.awal').html(` <h1  class="awal mt-32 font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl col-start-2 col-span-8">
  LAMPAHAN AWAL<br /><span class="font-thin">KANGGE MIWITI <br /></span><span class="">KESAENAN</span>
  <p class="block mt-4 text-xl 2xl:text-3xl font-thin">
    mangga salurkan <br />
    kepedulian panjenengan
  </p>
</h1>`);
    $('.pembukaan').html();
    $('.visi').text('Mujudake kamakmuran tumrap bangsa Indonesia kang minangka cita-cita luhur kamardikan. Dados sadaya sami ngraosaken pranatan ingkang kaping kalih, inggih punika kamanungsan ingkang adil lan beradab sesarengan. ');
    $('.misi').text('Nyumbangake perawatan arupa sandhangan sing layak, kabutuhan dhasar, lan uga dana kanggo tuku banyu resik kanggo wong sing butuh lan kabutuhan liyane. ');
    $('.ag1').text('Nuduhake sembako kanggo masyarakat');
    $('.ag2').text('Ngresiki lingkungan bebarengan');
    $('.ag3').text('Nuduhake bahan panganan');
    $('.ag4').text('Bantuan korban bencana');
    $('.ag5').text('Nuduhake bareng karo anggota TNI');
    $('.ag6').text('Sumbangan kanggo bocah yatim piatu');
    $('.fatih').text('Ngrawat minangka salah sawijining bukti yen saben wong duwe sisi apik');
    $('.sabra').text('Siji prihatin bisa tuwuh jutaan rasa seneng.');
    $('.januarsyah').text('Yen sampeyan peduli, rasa seneng bakal ana ing sisihe lan sampeyan.');
  });
  $('#sunda').click(function () {
    $('.nav1').text('Imah');
    $('.nav2').text('Agenda');
    $('.nav3').text('Urang');
    $('.nav4').text('Galeri');
    $('.bahasa').text('Sunda');
    $('.pembukaan1').html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">Organisasi</span> anu siap kangge ngabangkitkeun kasejahteraan masyarakat Indonesia ku nganyatukeun kapadulian sarerea jeung nganuangkeunna kanu ngabutuhkeun.
  </p>`);
    $('.awal').html(` <h1  class="awal mt-32 font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl col-start-2 col-span-8">
  
LENGKAH MUNGGARAN <br /><span class="font-thin">PIKEUN NGAMIMITIAN <br /></span><span class="">KEHADEAN</span>
  <p class="block mt-4 text-xl 2xl:text-3xl font-thin">
  hayu urang bagikeun  <br />
  perhatian Anjeun
  </p>
</h1>`);
    $('.pembukaan').html();
    $('.visi').text(' Ngawujudkeun kasejahteraan kangge masyarakat Indonesia anu mangrupakeun cita cita leluhur kamerdekaan.ngajadikeun sadaya ngarasakeun sila kadua,nyaeta kemanusiaan yang adil dan beradab. ');
    $('.misi').text(' Nganyumbangkeun kapedulian urang mangrupa ,pakean anu masih layak di angge,sembako,sareng oge data kangge meser cai bersih kangge anu butuh tur kabutuhan nu sanesna. ');
    $('.ag1').text('Babagi sembako jeung masarakat sabudeureun');
    $('.ag2').text('Ngabersihan lingkungan babarengan');
    $('.ag3').text('Ngadistribusikaeun sembako');
    $('.ag4').text('Mantuan korban bencana');
    $('.ag5').text('Babagi kalawan anggota TNI');
    $('.ag6').text('Babagi jeung yatim piatu');
    $('.fatih').text('Miara mangrupa salah sahiji bukti yén unggal jalma boga sisi alus');
    $('.sabra').text('Hiji perhatian bisa tumuwuh jutaan kabagjaan.');
    $('.januarsyah').text('Nalika anjeun paduli, kabagjaan bakal aya di sisi anjeunna sareng anjeun.');
  });
  $('#english').click(function () {
    $('.nav1').text('Home');
    $('.nav2').text('Plan');
    $('.nav3').text('About');
    $('.nav4').text('Galery');
    $('.bahasa').text('English');
    $('.pembukaan1').html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">A young organization</span>that is ready to raise the welfare of the Indonesian people by uniting common concerns and pouring them into those in need
  </p>`);
    $('.pembukaan').html();
    $('.visi').text(' contribute to the welfare of the people of Indonesia which is the noble ideal of independence. Making all feel the second precept, namely a just and civilized humanity together.  ');
    $('.misi').text(' provide our care in the form of proper clothing, basic necessities, and also funds to buy clean water for those in need and other needs. ');
    $('.awal').html(` <h1  class="awal mt-32 font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl col-start-2 col-span-8">
  
      THE FIRST STEP  <br /><span class="font-thin">TO START <br /></span><span class="">GOODNESS</span>
      <p class="block mt-4 text-xl 2xl:text-3xl font-thin">
      let's spread   <br />
      your kindness
      </p>
    </h1>`);
    $('.ag1').text('Share groceries with the surrounding community');
    $('.ag2').text('Clean the environment together');
    $('.ag3').text('Distribute food ingredients');
    $('.ag4').text('Help disaster victims');
    $('.ag5').text('Share with military members');
    $('.ag6').text('Share with orphans');
    $('.fatih').text('Caring is one proof that everyone has a good side');
    $('.sabra').text('One concern can grow millions of happiness.');
    $('.januarsyah').text('When you care, happiness will be on his side and you.');
  });
  $('#madura').click(function () {
    $('.nav1').text('Compok');
    $('.nav2').text('Kalakoan');
    $('.nav3').text('Abhek');
    $('.nav4').text('Galeri');
    $('.bahasa').text('Madura');
    $('.pembukaan1').html(`<p class="pembukaan1">
    <span class="text-2xl md:text-3xl 2xl:text-6xl italic font-bold">Abhek</span> perkompolan ngodeh se siap ngebey jegeh aghi kesejahteraan masyarakat Indonesia engak apolong aghi  kepedulian abhereng ambik mengaliraghi ngebey masyarakat se butoh.
  </p>`);
    $('.awal').html(` <h1  class="awal mt-32 font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl col-start-2 col-span-8">
  
  LENGKAH SETTONG  <br /><span class="font-thin">GHABAY MOLAE <br /></span><span class="">SE BECCE</span>
  <p class="block mt-4 text-xl 2xl:text-3xl font-thin">
   mara sebar <br />
  bekna becce
  </p>
</h1>`);
    $('.pembukaan').html();
    $('.visi').text(' menyumbang aghi kesejahteraan ghebey masyarakat Indonesia se aropaaghi cita-cita luhur kemerdekaan. aghebey kabbi arrasahaghi sila ke dua, ajieh kemanusiaan se adil lan beradab se aberem');
    $('.misi').text(' menyumbang aghi kepedulian abek aropa aghi,klambih layak angghuy,sembako,lan tak loppa dana nghabay aeng berse nghabay masyarakat se butoh lan kabutohan se laen');
    $('.ag1').text('Berbagi sembako ka masyarakat esekitar abhek');
    $('.ag2').text('Abersehaghi lingkungan esekitar areng bhereng');
    $('.ag3').text('Membagikan bahan-bahan kakanan');
    $('.ag4').text('Abentoh korban bencana');
    $('.ag5').text('Berbagi abhereng anggota TNI');
    $('.ag6').text('Berbagi ka nak kanak jetem');
    $('.fatih').text('kepedulilan deddi salah settong bukte sa ongguna kebbih oreng andik sisi bagusseh');
    $('.sabra').text('settong kepedulian bisa namba aghi berjuta kabungaan');
    $('.januarsyah').text('mon bekna peduli, kabungaan apihak ka jeriya dan bekna');
  });
});
