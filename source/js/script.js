let headNav = document.querySelector('.page-header__container');
let headToggle = document.querySelector('.page-header__toggle');
headNav.classList.remove('page-header__container--nojs');
headNav.classList.remove('page-header__container--opened');
headNav.classList.add('page-header__container--closed');
headToggle.onclick = function () {
  headNav.classList.toggle('page-header__container--closed');
  headNav.classList.toggle('page-header__container--opened');
}
let addressMap = document.querySelector('.address__map-interactiv');
addressMap.classList.remove('address__map-interactiv--nojs');
