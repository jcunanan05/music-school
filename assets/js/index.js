function init() {
  initBurgerClick();

  function initBurgerClick() {
    var navbarBurger = document.querySelector(".js-navbar-burger");
    navbarBurger.addEventListener("click", toggleNavbarMenu);

    function toggleNavbarMenu() {
      var navbarMenu = document.querySelector("#js-navbar-menu");
      navbarMenu.classList.toggle("is-active");
    }
  }
}

window ? (window.onload = init()) : null;
