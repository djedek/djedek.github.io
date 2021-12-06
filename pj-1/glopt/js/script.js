const hamburger = document.querySelector('.hamburger'),
      menu      = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      clickLinks = document.querySelectorAll('.menu__link a');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

clickLinks[0].addEventListener('click', () => {
    menu.classList.remove('active');
});
clickLinks[1].addEventListener('click', () => {
    menu.classList.remove('active');
});
clickLinks[2].addEventListener('click', () => {
    menu.classList.remove('active');
});
clickLinks[3].addEventListener('click', () => {
    menu.classList.remove('active');
});
clickLinks[4].addEventListener('click', () => {
    menu.classList.remove('active');
});
clickLinks[5].addEventListener('click', () => {
    menu.classList.remove('active');
});


//  Tiny-slider
const slider = tns({
    container: '.reviews__carousel',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.next').addEventListener("click", function () {
    slider.goTo("next");
});

document.querySelector('.prev').addEventListener("click", function () {
    slider.goTo("prev");
});



// const counters = document.querySelectorAll('.skills__ratings-counter'),
//       lines = document.querySelectorAll('.skills__ratings-line span');

// counters.forEach((item, i) => {
//     lines[i].style.width = item.innerHTML;
// });

$(document).ready(function () {
    
    // valide phone mask
    $('input[name=phone]').mask("+9 9(999) 999-99-99");

    // Smuth scroll and pageup

    $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    $("a[href^='#benefits']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    $("a[href^='#work']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    $("a[href^='#prices']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    $("a[href^='#scheme']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    $("a[href^='#reviews']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    $("a[href^='#map']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


    new WOW().init();


    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });




    // Mailer

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

});
