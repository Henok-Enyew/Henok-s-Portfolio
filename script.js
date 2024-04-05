"use strict";

const typeText = document.querySelector(".type-text");
const textLoad = function () {
  setTimeout(() => {
    typeText.textContent = "Web Developer";
  }, 0);

  setTimeout(() => {
    typeText.textContent = "Software Engineer";
  }, 4000);
};

textLoad();
setInterval(textLoad, 8000);

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
