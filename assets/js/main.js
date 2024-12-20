(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const logo = document.querySelector(".navbar-brand img");

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "assets/images/logo/logo-2.svg";
    } else {
      logo.src = "assets/images/logo/logo.svg";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  });

  // ===== submenu
  const submenuButton = document.querySelectorAll(".nav-item-has-children");
  submenuButton.forEach((elem) => {
    elem.querySelector("a").addEventListener("click", () => {
      elem.querySelector(".ud-submenu").classList.toggle("show");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;
    const animateScroll = () => {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();

const galleryItems1 = document.getElementById("gallery-swiper1");
const galleryItems2 = document.getElementById("gallery-swiper2");
const galleryItems3 = document.getElementById("gallery-swiper3");
const galleryItems4 = document.getElementById("gallery-swiper4");
const galleryItems5 = document.getElementById("gallery-swiper5");
const galleryItems6 = document.getElementById("gallery-swiper6");

const galleryImgs = [];
Array.from({ length: 61}, (_, i) => galleryImgs.push(`${i + 1}.jpg`));

const sheGalleriaImgs = [];
Array.from({ length: 29 }, (_, i) => sheGalleriaImgs.push(`${i + 1}.jpg`));
const igImgs = [];
Array.from({ length: 10 }, (_, i) => igImgs.push(`${i + 1}.jpg`));
const sparkImgs = [];
Array.from({ length: 7}, (_, i) => sparkImgs.push(`${i + 1}.jpg`));

const onboardImgs = [];
Array.from({ length: 19 }, (_, i) => onboardImgs.push(`${i + 1}.jpg`)); 

const SHEgalleriaImgs = [];
Array.from({ length: 23}, (_, i) => SHEgalleriaImgs.push(`${i + 1}.jpg`));


const htmlString = galleryImgs.reverse()
  .map((item, index) => {
    return `
<div key=${index} class="swiper-slide">
        <a href="./assets/images/gallery/${item}" data-fancybox="gallery">
            <div class="image" style="background-image: url(./assets/images/gallery/${item})">
                <div class="overlay">
                    <em class="mdi mdi-magnify-plus"></em>
                </div>
            </div>
        </a>
    </div>
`;
  })
  .join("");
galleryItems1.innerHTML = htmlString;

const SGhtmlString = sheGalleriaImgs
  .map((item, index) => {
    return `
<div key=${index} class="swiper-slide">
        <a href="./assets/images/SHE GALERIA/she${item}" data-fancybox="gallery">
            <div class="image" style="background-image: url('./assets/images/SHE GALERIA/she${item}')">
                <div class="overlay">
                    <em class="mdi mdi-magnify-plus"></em>
                </div>
            </div>
        </a>
    </div>
`;
  })
  .join("");
galleryItems3.innerHTML = SGhtmlString;
console.log(igImgs);

const IGhtmlString = igImgs
  .map((item, index) => {
    return `
<div key=${index} class="swiper-slide">
        <a href="./assets/images/IGNITE/ig${item}" data-fancybox="gallery">
            <div class="image" style="background-image: url('./assets/images/IGNITE/ig${item}')">
                <div class="overlay">
                    <em class="mdi mdi-magnify-plus"></em>
                </div>
            </div>
        </a>
    </div>
`;
  })
  .join("");
galleryItems2.innerHTML = IGhtmlString;


const SKkhtmlString = sparkImgs
  .map((item, index) => {
    return `
<div key=${index} class="swiper-slide">
        <a href="./assets/images/SPARK/SK${item}" data-fancybox="gallery">
            <div class="image" style="background-image: url(./assets/images/SPARK/SK${item})">
                <div class="overlay">
                    <em class="mdi mdi-magnify-plus"></em>
                </div>
            </div>
        </a>
    </div>
`;
  })
  .join("");
galleryItems4.innerHTML = SKkhtmlString;


const OBhtmlString = onboardImgs
  .map((item, index) => {
    return `
<div key=${index} class="swiper-slide">
        <a href="./assets/images/ONBOARD/${item}" data-fancybox="gallery">
            <div class="image" style="background-image: url(./assets/images/ONBOARD/OB${item})">
                <div class="overlay">
                    <em class="mdi mdi-magnify-plus"></em>
                </div>
            </div>
        </a>
    </div>
`;
  })
  .join("");
galleryItems5.innerHTML = OBhtmlString;


const SHGhtmlString = SHEgalleriaImgs
  .map((item, index) => {
    return `
<div key=${index} class="swiper-slide">
        <a href="./assets/images/SHE-GALLERIA-2.0/${item}" data-fancybox="gallery">
            <div class="image" style="background-image: url(./assets/images/SHE-GALLERIA-2.0/SHE${item})">
                <div class="overlay">
                    <em class="mdi mdi-magnify-plus"></em>
                </div>
            </div>
        </a>
    </div>
`;
  })
  .join("");
galleryItems6.innerHTML = SHGhtmlString;








$(function () {
  var swiper = new Swiper(".carousel-gallery .swiper-container", {
    effect: "slide",
    speed: 900,
    slidesPerView: 5,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".carousel-gallery .swiper-pagination",
      // clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      // when window width is <= 480px
      425: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  }); /*http://idangero.us/swiper/api/*/
});





