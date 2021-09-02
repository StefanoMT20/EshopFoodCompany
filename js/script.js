const btnMenuNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnMenuNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });

//Scroll animation
  const allLinks = document.querySelectorAll('a:link');

  allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      const href = link.getAttribute("href");

      //scroll back to the top
      if (href==="#") 
      window.scrollTo({
        top:0,
        behavior: "smooth",
      });
      // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
    });
  });

