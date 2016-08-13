

$(window).scroll(function(){
    if ($(window).scrollTop() >= 220) {
       $('.sticky-header').addClass('fixed');
    }
    else {
       $('.sticky-header').removeClass('fixed');
    }
});
