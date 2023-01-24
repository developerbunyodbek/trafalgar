const navbar = document.querySelector(".header");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-list");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("navbar-scroll", window.scrollY > 10);
});

const navAnim = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};
navAnim();
