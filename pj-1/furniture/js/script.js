//  Tiny-slider
const slider = tns({
    container: '.product__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        769: {
            items: 2
        },
        993: {
            items: 3
        },
        1261: {
            items: 4
        }
      }
});

document.querySelector('.next').addEventListener("click", function () {
    slider.goTo("next");
});

document.querySelector('.prev').addEventListener("click", function () {
    slider.goTo("prev");
});