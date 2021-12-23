// global variabls
let menuBtn = document.querySelector(".mobile-nav-toggle");
let menu = document.getElementById("primary-navigation");

// add event listner to toggle Butyton
menuBtn.onclick = (_) => {
   menu.classList.toggle("menuControl");
   if (menuBtn.ariaExpanded === "false") {
      menuBtn.ariaExpanded = "true";
      menuBtn.style.backgroundImage = "url(./assets/shared/icon-close.svg)";
      return;
   }
   menuBtn.setAttribute("aria-expanded", false);
   menuBtn.style.backgroundImage = "url(./assets/shared/icon-hamburger.svg)";
};