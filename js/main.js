// add active class to current link
let lis = document.querySelectorAll(".navbar-nav li a");
lis.forEach((a) => {
    if (a.textContent === "الرئيسية") {
        a.classList.add("active")
        a.childNodes[0].attributes[0] = "";
    }
    a.addEventListener("click", (e) => {
        lis.forEach((a) => {
            a.classList.remove("active")
            a.childNodes[0].attributes[0].value = "";
        })
        e.currentTarget.classList.add("active")
        e.currentTarget.childNodes[0].attributes[0].value =
          "images/active-link.svg";
    }
      );
  });
// Start Counter
const counters = document.querySelectorAll(".value");
const speed = 1000;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
      }
  };

  animate();
});

// Start Swiper
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
}
);

// Start Swiper
var swiper = new Swiper(".slide-content-1", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});