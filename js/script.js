const menuNav = document.querySelector('.icon-mobile-nav');
const header = document.querySelector('.header');

menuNav.addEventListener('click', function(){
    header.classList.toggle('nav-open')
    console.log('a')
})

