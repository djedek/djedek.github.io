$(document).ready(function(){

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop:true
		// nav:true
	});

	function toggleSlide(item){
		$(item).each(function(i){
			$(this).on('click', function(e){
				e.preventDefault();
				$('.stages__item-first').eq(i).toggleClass('stages__item-first_active');
				$('.stages__item-second').eq(i).toggleClass('stages__item-second_active');
			})
		})
	};

	toggleSlide('.stages__item-first');
	toggleSlide('.stages__item-second');

	// // Modal

	// $('[data-modal=consultation]').on('click', function() {
	// 	$('.overlay, #consultation').fadeIn('slow');
	// });

	// $('.modal__close').on('click', function() {
	// 	$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	// });

	// $('.button_mini').each(function(i) {
	// 	$(this).on('click', function() {
	// 		$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
	// 		$('.overlay, #order').fadeIn('slow');
	// 	})
	// });

	// function valideForms(form) {
	// 	$(form).validate({
	// 		rules: {
	// 			name: "required",
	// 			phone: "required",
	// 			email: {
	// 				required: true,
	// 				email: true
	// 			}
	// 		},
	// 		messages: {
	// 			name: "Пожалуйста, введите своё имя",
	// 			phone: "Пожалуйста, введите свой телефон",
	// 			email: {
	// 				  required: "Пожалуйста, введите свой E-mail",
	// 				  email: "Неправильно введен E-mail адрес"
	// 			}
	// 		}
	// 	});
	// };

	// valideForms('#consultation-form');
	// valideForms('#consultation form');
	// valideForms('#order form');

	// $('input[name=phone]').mask("+9 (999) 999-99-99");

	// $('form').submit(function(e) {
	// 	e.preventDefault();
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mailer/smart.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		$(this).find("input").val("");
	// 		$('#consultation, #order').fadeOut();
	// 		$('.overlay, #thanks').fadeIn('slow');

	// 		$('form').trigger('reset');
	// 	});
	// 	return false;
	// });

	// //Smooth scroll and pageup

	// $(window).scroll(function() {
	// 	if($(this).scrollTop() > 1600) {
	// 		$('.pageup').fadeIn();
	// 	} else {
	// 		$('.pageup').fadeOut();
	// 	}
	// });

	// $("a[href='#up'], a[href='#catalog']").click(function(){
	// 	const _href = $(this).attr("href");
	// 	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	// 	return false;
	// });

	// new WOW().init();

});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})
