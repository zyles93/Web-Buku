// hamburger

// const hamburger = document.querySelector("#hamburger");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
// });

const navbar = document.querySelector("#navbar");
const menu = document.querySelector("#menu");

navbar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != navbar && e.target != menu) {
    navbar.classList.remove("#menu");
    menu.classList.add("hidden");
  }
});
