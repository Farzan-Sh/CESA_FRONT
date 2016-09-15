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
});
