$(function(){
	//Smooth scroll and pageup

	$(window).scroll(function() {
		if($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	

});

new WOW().init();

const slider = tns({
    container: '.carousel__my-slider',
    items: 1,
    slideBy: 'page',
	autoplay: false,
	controls: false,
	navPosition: 'bottom'
});

document.querySelector('.prev').addEventListener('click', function (){
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function (){
	slider.goTo('next');
});

const slider_mini = tns({
    container: '.carousel-mini__my-slider',
    items: 1,
    slideBy: 'page',
	autoplay: false,
	controls: false,
	navPosition: 'bottom'
});

document.querySelector('.prev_mini').addEventListener('click', function (){
	slider_mini.goTo('prev');
});

document.querySelector('.next_mini').addEventListener('click', function (){
	slider_mini.goTo('next');
});