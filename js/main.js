$(window).on('scroll', function () {
    if ( window.innerWidth >= 1024 ) {
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
            $('.openMenu').addClass('scrolled');
            // $('.header').hide();
        }
        else {
            $('.openMenu').removeClass('scrolled');
            // $('.header').show();
        }
    }
});
$('.openMenu').click(function () {
    $('.mobileMenu').animate({
        marginRight : '0'
    })
});
$('.closeMenu').click(function () {
    $('.mobileMenu').animate({
        marginRight : '-1000px'
    })
});
