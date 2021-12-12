let headNav = document.querySelector(".page-header__container");
let headToggle = document.querySelector(".page-header__toggle");
headNav.classList.remove("page-header__container--nojs");
headToggle.onclick = function () {
  headNav.classList.toggle("page-header__container--closed");
  headNav.classList.toggle("page-header__container--opened");
}
