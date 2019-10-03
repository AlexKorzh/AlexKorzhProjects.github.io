$(document).ready(function(){

	var date = moment().add(14,'days').format('D MMMM');
    $('.autodate').text(date);

	$(".phone-inp").mask("+7 (999) 999-99-99");

	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});

	$("a.smooth, nav ul li a").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top);
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});

	// $('.services-wrp .item .text-wrp').slideUp();
	// $('.services-wrp .item').hover(function(){
	// 	$(this).find('.text-wrp').slideToggle();
	// });
	//Compare Slider
  $('header .main-slider').bxSlider({
	    mode: 'fade',
		speed: 800,
		auto:true,
		slideWidth: 1920,
		touchEnabled:false
	});

		$('.owl-carousel').owlCarousel({
			margin:30,
			navSpeed: 1000,
			loop:true,
			autoWidth:true,
			items:8,
			MouseDrag: false,
			touchDrag: false,
			pullDrag:false,
			freeDrag:false
		});


	$(".fancybox-c").fancybox({
		padding: 0,
		openEffect : 'elastic',
		openSpeed  : 600,
		closeEffect : 'elastic',
		closeSpeed  : 600,
		closeClick : true,
		helpers : {
			overlay : {
				speedOut : 0
			}
		}
	});

	$('.open-polytic').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".politics-popup").show();
        $(".politics-popup").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });
      
    $(".opacity, .close").click(function() {
        $(".politics-popup").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, .politics-popup").hide();
        $('body').css({'overflow-y':'auto'});
    });

	
});	