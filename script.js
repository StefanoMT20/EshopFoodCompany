const menuNav = document.querySelector('.icon-mobile-nav');
const header = document.querySelector('.header');

menuNav.addEventListener('click', function(){
    if (!header.classList.contains('nav-open')){
        header.classList.add('nav-open');
    }
    else{
        if(header.classList.contains('nav-open')){
            header.classList.remove('nav-open');
        }
    }
})

