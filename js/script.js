const btnMenuNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnMenuNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
