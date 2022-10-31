// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@             PRELOADER             @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const preloader = document.querySelector('.preloader');
setTimeout(() => {
  preloader.classList.add('preloader-opacity');
}, 3000);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@       ADD HEADER BOX SHADOW       @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (this.scrollY >= 50) {
    header.classList.add('header-shadow');
  } else {
    header.classList.remove('header-shadow');
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@           CHANGE THEME            @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const themeButton = document.querySelector('.theme-button');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeButton.classList.replace('bi-moon-fill', 'bi-sun-fill');
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (!themeButton.classList.contains('bi-moon-fill')) {
    themeButton.classList.replace('bi-sun-fill', 'bi-moon-fill');
    localStorage.setItem('theme', 'light');
  } else {
    themeButton.classList.replace('bi-moon-fill', 'bi-sun-fill');
    localStorage.setItem('theme', 'dark');
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@      SHOW & REMOVE NAV LIST       @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navList = document.querySelector('.nav__list'),
  navToggle = document.querySelector('.nav__toggle'),
  navClose = document.querySelector('.nav__close'),
  overlay = document.querySelector('.overlay'),
  navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  navList.classList.add('show-nav');
  overlay.classList.add('show-overlay');
});

navClose.addEventListener('click', () => {
  navList.classList.remove('show-nav');
  overlay.classList.remove('show-overlay');
});

overlay.addEventListener('click', () => {
  navList.classList.remove('show-nav');
  overlay.classList.remove('show-overlay');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    navList.classList.remove('show-nav');
    overlay.classList.remove('show-overlay');
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@  ACTIVE LINKS WHEN SCROLL WINDOW  @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('nav__link-active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('nav__link-active');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@          ACCORDION MENU           @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const accordion = document.querySelectorAll('.accordion');

accordion.forEach((accordion) => {
  accordion.addEventListener('click', function () {
    this.classList.toggle('show-accordion');
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@      kunkalabs.com/mixitup/       @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let mixerQualifications = mixitup('.qualifications__container', {
  selectors: {
    target: '.qualifications__box',
  },
  animation: {
    duration: 0,
  },
});

/* Default filter products */
mixerQualifications.filter('.works');

/* Link active products */
const qualificationFilters = document.querySelectorAll(
  '.qualifications__filter'
);

qualificationFilters.forEach((q) => {
  q.addEventListener('click', function () {
    qualificationFilters.forEach((q) => {
      q.classList.remove('active');
      this.classList.add('active');
    });
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@              MODAL                @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const servicesButtons = document.querySelectorAll('.services__button');
const servicesModalClose = document.querySelectorAll('.services__modal-close');

servicesButtons.forEach((e) => {
  e.addEventListener('click', function () {
    this.nextElementSibling.classList.add('show-modal');
  });
});

servicesModalClose.forEach((e) => {
  e.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove('show-modal');
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@    swiperjs.com (PROJECTS SECTION)    @@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const projectsSwiper = new Swiper('.projects__swiper', {
  spaceBetween: 53,
  loop: 'true',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@    swiperjs.com (TESTIMONIAL SECTION)   @@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const testimonialsSwiper = new Swiper('.testimonials__swiper', {
  spaceBetween: 20,
  loop: 'true',
  grabCursor: 'true',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@           emailjs.com             @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const contactForm = document.querySelector('.contact__form'),
  contactName = document.querySelector('.contact__form input[type="text"]'),
  contactEmail = document.querySelector('.contact__form input[type="email"]'),
  contactProject = document.querySelector('.contact__form textarea'),
  contactMessage = document.querySelector('.contact__form .message');
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

contactForm.addEventListener('submit', sendEmail);

function sendEmail(e) {
  e.preventDefault();

  if (
    contactName.value === '' ||
    !contactEmail.value.match(emailPattern) ||
    contactProject.value === ''
  ) {
    contactMessage.classList.remove('check-color');
    contactMessage.classList.add('error-color');
    contactMessage.textContent = 'لطفا تمامی قسمت ها را تکمیل کنید.';

    setTimeout(() => {
      contactMessage.textContent = '';
    }, 3000);
  } else {
    // https://www.emailjs.com/docs/sdk/send-form/

    // emailjs
    //   .sendForm(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     '#YOUR_Form',
    //     'YOUR_PUBLIC_KEY'
    //   )
    //   .then(
    //     function () {},
    //     function () {}
    //   );

    emailjs
      .sendForm(
        'service_p6jk43w',
        'template_o0li56w',
        '#contact-form',
        '7RsoRVrmmFoAfa-j6'
      )
      .then(
        function () {
          contactMessage.classList.add('check-color');
          contactMessage.textContent = 'پیغام شما با موفقیت ارسال گردید.';

          setTimeout(() => {
            contactMessage.textContent = '';
          }, 5000);
        },
        function (error) {
          alert(
            'متاسفانه خطایی رخ داده است، پس از چند دقیقه مجددا تلاش نمایید.',
            error
          );
        }
      );

    contactName.value = '';
    contactEmail.value = '';
    contactProject.value = '';
  }
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@            SCROLL UP              @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const scrollUp = document.querySelector('.scrollup');

window.addEventListener('scroll', function () {
  if (this.scrollY > 50) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@        scrollrevealjs.org         @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 300,
});

sr.reveal(
  `.home__title , .home__center , .accordions-right , .accordions-left , .qualifications__box , .projects__swiper-container , .testimonials__swiper`
);

sr.reveal(`.services__card , .input-field , .textarea-field , input[type='submit'] , .contact__link`, {
  interval: 200,
});

sr.reveal(``, { origin: 'bottom' });
sr.reveal(
  `.home__bio-left , .input-field , .textarea-field , input[type='submit']`,
  { origin: 'left' }
);
sr.reveal(`.home__bio-right , .contact__link`, { origin: 'right' });
