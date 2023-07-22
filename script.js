let menuIsHidden = true;
 
function forward() {
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false,
    });
    menuIsHidden = false
}
 
function backward() {
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 270,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    menuIsHidden = true
}
 
$('.menu_small_icon').click(function () {
    if (menuIsHidden) {
        forward();
    } else {
        backward();
    }
});
 
let start = 0;
let end = 0;
 
$('.container').on('touchstart', function (event) {
    start = event.originalEvent.touches[0].pageX;
});
 
$('.container').on('touchend', function (event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && menuIsHidden) {
        forward();
    } else if (start - end >= 100 && !menuIsHidden) {
        backward();
    }
 
});

$(document).ready(function () {
    $('.slider').bxSlider({
        auto: true,
        infiniteLoop: true,
        adaptiveHeight: true,
        slideWidth: 500,
        hideControlOnEnd: true
    });
});