"use strict";

// const typeText = document.querySelector(".type-text");
// const textLoad = function () {
//   setTimeout(() => {
//     typeText.textContent = "Web Developer";
//   }, 0);

//   setTimeout(() => {
//     typeText.textContent = "Software Engineer";
//   }, 4000);
// };

// textLoad();
// setInterval(textLoad, 8000);

const typingEffect = new Typed(".type-text-new", {
  strings: ["Web developer", "Software Engineer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

document
  .querySelector(".mobile-nav-btn")
  .addEventListener("click", function () {
    document.querySelector(".nav-btns").classList.toggle("open");
    document.querySelector(".menu-btn").classList.toggle("hidden");
    document.querySelector(".close-btn").classList.toggle("hidden");
  });

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      document.querySelector(".nav-btns").classList.remove("open");
      document.querySelector(".menu-btn").classList.remove("hidden");
      document.querySelector(".close-btn").classList.add("hidden");
    }, 500);
  });
});

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  const arr = [...entry.target.classList];
  document.querySelectorAll(".nav-btn").forEach((el) => {
    el.classList.remove("nav-btn-active");
    document
      .querySelector(`.nav-btn-${arr[0]}`)
      .classList.add("nav-btn-active");
    // console.log(el.classList);
  });

  // observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

const year = new Date().getFullYear();
document.querySelector(".year").textContent = year;
