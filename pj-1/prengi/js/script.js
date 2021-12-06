$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav:true
    });

    new WOW().init();
});

const menu_open = document.querySelector('.open-menu'),
    menu = document.querySelector('.menu-right');

menu_open.addEventListener('click', () => {
    menu_open.classList.toggle('active');
    menu.classList.toggle('active');
});
