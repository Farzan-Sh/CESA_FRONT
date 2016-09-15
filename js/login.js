$('.input input').on("focus" , function () {
   $(this).siblings('.label').children('i').css({
       color : "#1da7ff"
   })
});
$('.input input').on("focusout" , function () {
    $(this).siblings('.label').children('i').css({
        color : "#333333"
    })
});
