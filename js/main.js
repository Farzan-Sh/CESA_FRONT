$(window).on('scroll', function () {
    if ( window.innerWidth >= 768 ) {
        if ($(window).scrollTop() > 50) {
            $('.menu').addClass('scrolled');
        }
        else {
            $('.menu').removeClass('scrolled');
        }
    }
});
