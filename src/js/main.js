'use strict';
(function(){
const BREAKPOINTS = {
  tablet: '1024px'
};

const toggle = document.querySelector(".main-nav__toggle");
const menu = document.querySelector(".main-nav__list");

const handleBreackpointChange = function (event) {
  if (event.matches) {
    menu.classList.remove("menu-close");
  } else {
    menu.classList.add("menu-close");
  }
}

const modalMenuActive = function() {
   toggle.classList.remove("visually-hidden");
};

const mediaQueryList = window.matchMedia('(min-width:' + BREAKPOINTS.tablet.toString() + '');
mediaQueryList.addEventListener("change", handleBreackpointChange);
handleBreackpointChange(mediaQueryList);

window.addEventListener("load", modalMenuActive);

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  this.classList.toggle("main-nav__toggle-close");
  menu.classList.toggle("menu-close");
});
})();