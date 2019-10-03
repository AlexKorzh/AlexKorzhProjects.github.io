$(document).ready(function(){

		$('.sandwich').click(function(){
			$('.left-panel').toggleClass("open");
        });
        $('.nav li a').click(function(){
			$('.left-panel').removeClass("open");
        });

        $(".nav li a, a.smooth").click(function (){
			var id = $(this).attr("href");
			var pos = ($(id).position().top);
			$("html, body").animate({scrollTop: pos }, 1000);
			return false;
		});
		


	if (($(window).width()) > 1199) {
		$('.reviwes-slider').bxSlider({
			speed: 800,
			slideWidth: 230,
			touchEnabled:false,
			slideMargin: 30,
			minSlides: 4,
			maxSlides: 4,
			moveSlides: 1
		});
		$('.parallax-layer').parallax({
				mouseport: $("header")
			},
			{	
				xparallax: '50px',
				yparallax: '50px'
			},
			{
				xparallax: '20px',
				yparallax: '20px'
		});
	}

	if ((($(window).width()) < 1200) && (($(window).width()) > 890))  {
		$('.reviwes-slider').bxSlider({
			speed: 800,
			slideWidth: 230,
			touchEnabled:false,
			slideMargin: 30,
			minSlides: 3,
			maxSlides: 3,
			moveSlides: 1
		});
	}
	if ((($(window).width()) < 890) && (($(window).width()) > 640)) {
		$('.reviwes-slider').bxSlider({
			speed: 800,
			slideWidth: 230,
			touchEnabled:false,
			slideMargin: 30,
			minSlides: 2,
			maxSlides: 2,
			moveSlides: 1
		});
	}
	if (($(window).width()) < 640) {
		$('.reviwes-slider').bxSlider({
			speed: 800,
			slideWidth: 230,
			touchEnabled:false,
			slideMargin: 30,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1
		});
	}

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

	 $(window).scroll(function() {
        var top = $('.main-wrp').offset().top;
        var scroll_top = $(this).scrollTop();
        if (scroll_top > top) {
        	$('.top-head').slideUp(); 
        	$('.sandwich').addClass('active');
        	$('.nav').addClass('active');          
        } else {
            $('.top-head').slideDown();
            $('.sandwich').removeClass('active');
            $('.nav').removeClass('active');

        }
    });	

	 $('section').each(function () {
			var block = $(this);
			$(window).scroll(function() {
				var top = block.offset().top;
				var bottom = block.height()+top;
				top = top - $(window).height() + 500;
				var scroll_top = $(this).scrollTop();
				if ((scroll_top > top) && (scroll_top < bottom)) {
					if (!block.hasClass('animate')) {
						block.addClass('animate');
						block.trigger('animateIn');
					}
				} else {
					block.removeClass('animate');
					block.trigger('animateOut');
				}
			});

		});
	
	$('section').on('animateIn', function() {
			var inter = 0;
			$(this).find('.scale').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('opacity', 1);
					block.css('transform', 'scale(1.0, 1.0)');
				}, inter*200);
				inter++;
			});
		}).on('animateOut', function() {
			$(this).find('.scale').each(function() {
				$(this).css('opacity', 0.01);
				$(this).css('transform', 'scale(0.5, 0.5)');
			});
		});

	if(null !== navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)){
		// ???? ????????? ???, ??????? ????? ???????? ?????? ?? iphone|ipod|ipad|android
		$('head').append('<style>.scale, .sr, .scale2 {opacity:1!important;-webkit-transform: scale(1, 1)!important;margin-left:0 !important;position: inherit}</style>'); // ??? css-???, ??????? ?????? ???????? ???????? ????????, ??????? ?????????? ????????? ??????????
	}


	
});	