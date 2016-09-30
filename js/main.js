// persian numbers
$(document).ready(function () {
    $('body').persiaNumber();
});

$(window).on('scroll', function () {
    if ( window.innerWidth >= 768 ) {
        if ($(window).scrollTop() > 120) {
            $('.menu').addClass('scrolled');
            $('.header').hide();
        }
        else {
            $('.menu').removeClass('scrolled');
                $('.header').show();
        }
    }
    else {
        if ($(window).scrollTop() > 50) {
            $('.openMenu , .mobileMenu').addClass('scrolled');
            $('.header').hide();
        }
        else {
            $('.openMenu , .mobileMenu').removeClass('scrolled');
            $('.header').show();
        }
    }
});
$(window).resize(function () {
    console.log(window.innerWidth);
    if (window.innerWidth < 768 ) {
        if ($(window).scrollTop() > 50) {
            $('.openMenu , .mobileMenu').addClass('scrolled');
            $('.header').hide();
        }
        else {
            $('.openMenu , .mobileMenu').removeClass('scrolled');
            $('.header').show();
        }
    }
    else {
        if ($(window).scrollTop() > 120) {
            $('.menu').addClass('scrolled');
            $('.header').hide();
        }
        else {
            $('.menu').removeClass('scrolled');
            $('.header').show();
        }
    }
});
$('.openMenu').click(function () {
    $('.mobileMenu').stop().slideToggle();
    $('.openMenu .fa').stop().toggleClass('fa-chevron-down');
    $('.openMenu .fa').stop().toggleClass('fa-chevron-up')
});
