function parallax(){
    var scrolled = $(window).scrollTop();
    $('.paralax_1').css('top', -(scrolled * 0.6) + 'px');
}

$(window).scroll(function(e){
    parallax();

});