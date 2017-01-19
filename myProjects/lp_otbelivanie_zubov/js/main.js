$(document).ready(function(){

	//$(".phone-inp").mask("+38 (999) 999-99-99");

	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});

	var height = $(window).height();
	var width = $(window).width();

	var ratio = width / height;
	if (ratio > 1.777) {
		$('.video video').css({"width": "100%"});
	} else {
		$('.video video').css({"height": "100%"});
	}
	if (width < 1201) {
        $('.video video').hide();
    }

	var resultlider = $('.result .result-slider');
	resultlider.bxSlider({
	    mode: 'horizontal',
		speed: 800,
		slideWidth: 970,
		slideMargin: 20,
		touchEnabled:false
	});

	if (($(window).width()) > 1199) {
		$('.certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 230,
			touchEnabled:false,
			slideMargin: 70,
			minSlides: 3,
			maxSlides: 3,
			moveSlides: 1
		});
	}

	if ((($(window).width()) < 1200) && (($(window).width()) > 780))  {
		$('.certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 230,
			touchEnabled:false,
			slideMargin: 70,
			minSlides: 2,
			maxSlides: 2,
			moveSlides: 1
		});
	}
	if (($(window).width()) < 780) {
		$('.certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 230,
			touchEnabled:false,
			slideMargin: 70,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1
		});
	}
	$(".fancy-video").fancybox({
		// maxWidth	: '98%',
		// maxHeight	: '98%',
		autoSize: true,
		fitToView	: true,
		// autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding		: 0,
		autoPlay: true
	});

	$('.answer-wrp  p').slideUp();
	$('.answer-wrp h3').click(function(){
		$(this).closest('.item').toggleClass('active');
		$(this).parent().find('p').slideToggle();		
	});

	$('.open-order-form').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".order-form").show();
        $(".order-form").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });
      
    $(".opacity, .close, #parent_popup").click(function() {
        $(".popup").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, #parent_popup_robo,.popup").hide();
        $('body').css({'overflow-y':'auto'});
    });

    $.get("php/pay.php", function(pay) {
        $("#payment-form").html(pay);
        var orderid = $("#payment-form").find('input[name=WMI_PAYMENT_NO]').val();
        $('.orderid').val(orderid);
    });

	$(".fancybox-r").fancybox({
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
	
});	