"use strict";

/* ADD EVENT LISTENER ON MULTIPLE ELEMENTS */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/* MOBILE NAVBAR TOGGLER */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNav);

/* HEADER ANIMATION */

/* WHEN SCROLLED DOWN TO 100PX HEADER WILL BE ACTIVE  */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("Scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/* SLIDER */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const slidePrevBtn = document.querySelector("[data-slider-prev]");
const slideNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(
  getComputedStule(slider).getPropertyValue("--slider-items")
);
let totalSlidableItems =
  sliderContainer.childElementCount - totalSliderVisibleItems;
let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.getElementsByClassName.transform = `translateX(${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
};

/* NEXT SLIDE */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  moveSliderItem();
};

slideNextBtn.addEventListener("click", slideNext);

/* PREVIOUS SLIDE */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }
  moveSliderItem();
};

slidePrevBtn.addEventListener("click", slidePrev);

/* RESPONSIVE */

window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(
    getComputedStyle(slider).getPropertyValue("--slider-items")
  );
  totalSlidableItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});
