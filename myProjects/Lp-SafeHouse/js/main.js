$(document).ready(function(){

	$(".phone-inp").mask("+7 (999) 999-99-99");

	$('input.phone').click(function(){
		$(this).css({"background": "none"});
	});
	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});

	$("nav ul li a, .button.to-problem, .callback, .to-top").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top);
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});

	$(".navigator a").click(function (){
		$(this).addClass("active").siblings().removeClass('active');
		var id = $(this).attr("href");
		var pos = ($(id).position().top);
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});

	$('.sandwich').click(function(){
	    $('nav ul').slideToggle();
	    $('section, footer, nav ul li a').click(function(){
	        $('nav ul').slideUp();
	    });
    });

	//LOCKS LIST
    $(".locks-list").slideUp();
    $(".locks .button.check").click(function(){
    	$(".locks .check-ico").addClass("rotate");
    	$(".locks-list").slideDown(function(){
    		$(".locks .button.check").css("opacity", "0");
    	});
    });

    //LOCKS TAB

    var parametrs = "s1";
	$('.locks .tab').removeClass('active');
    // $('.locks .parametrs').hide();
    $('.locks .tab.' + parametrs).addClass('active');
    $('.locks .tab').click(function(){
        var parametrsSort = $(this).attr('class').split(' ')[1];
        $('.locks .tab').removeClass('active');
        $('.locks .tab.' + parametrsSort).addClass('active');

      	if ($(this).hasClass("s2")){
      		//$('.locks .parametrs').show();
      		$('.locks .parametrs').animate({"opacity":1}, 200);
      	}
      	if($(this).hasClass("s1")){
      		//$('.locks .parametrs').hide();
      		$('.locks .parametrs').animate({"opacity":0}, 200);
      	}
    });

    //Reviwes LIST
    $(".reviwes-list").slideUp();
    $(".reviwes .button.check").click(function(){
    	$(".reviwes .check-ico").addClass("rotate");
    	$(".reviwes-list").slideDown(function(){
    		$(".reviwes .button.check").css("opacity", "0");
    	});
    });

	var videoSlider = $('.video .video-slider');
		videoSlider.bxSlider({
	    mode: 'horizontal',
		speed: 800,
		slideWidth: 550,
		infiniteLoop:false,
		touchEnabled:false,
		slideMargin: 30, 
	    nextSelector: '#slider-next1',
		prevSelector: '#slider-prev1',
		onSliderLoad:function videolinesize(){
			var slideQty1 = videoSlider.getSlideCount();
			var linkWidth1 = 100/slideQty1;
			var bxItemPager1 = $(".video-slider-wrp .bx-pager-item"); 
			bxItemPager1.width(linkWidth1 + "%"); 
		}
	});

	var textSlider = $('.video .text-slider');
	textSlider.bxSlider({
	    mode: 'horizontal',
		speed: 500,
		slideWidth: 400,
		infiniteLoop:false,
		touchEnabled:false,
		nextSelector: '#slider-next2',
		prevSelector: '#slider-prev2',
		onSliderLoad:function(){
			var slideQty2 = textSlider.getSlideCount();
			var linkWidth2 = 100/slideQty2;
			var bxItemPager2 = $(".text-slider-wrp .bx-pager-item");
			bxItemPager2.width(linkWidth2 + "%"); 
		}
	});

	$(window).resize(function(){
		var slideQty1 = videoSlider.getSlideCount();
		var linkWidth1 = 100/slideQty1;
		var bxItemPager1 = $(".video-slider-wrp .bx-pager-item"); 
		bxItemPager1.width(linkWidth1 + "%");
		var slideQty2 = textSlider.getSlideCount();
		var linkWidth2 = 100/slideQty2;
		var bxItemPager2 = $(".text-slider-wrp .bx-pager-item");
		bxItemPager2.width(linkWidth2 + "%"); 
	});

	var mainSolutionSlider = $('.solution .main-solution-slider');
	mainSolutionSlider.bxSlider({
	    mode: 'horizontal',
		speed: 500,
		infiniteLoop:true,
		slideWidth: 370,
		slideMargin: 15,
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 1,
		responsive: false,
		preloadImages: 'all',
		touchEnabled:false,
		onSliderLoad:function(){
			//mainSolutionSlider.goToNextSlide();
			$('.solution-wrp > .bx-wrapper > .bx-controls .bx-controls-direction a').addClass("scalewtop");
		}
	});

	var window_width = $(window).width();
	function sliders_width(){
		if (window_width > 1200) {
			mainSolutionSlider.reloadSlider({
			    mode: 'horizontal',
				speed: 500,
				infiniteLoop:true,
				slideWidth: 370,
				slideMargin: 15,
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 1,
				responsive: false,
				preloadImages: 'all',
				touchEnabled:false,
				onSliderLoad:function(){
					//mainSolutionSlider.goToNextSlide();
					$('.solution-wrp > .bx-wrapper > .bx-controls .bx-controls-direction a').addClass("scalewtop");
				}
			});
		}
		if ((window_width < 1201) && (window_width > 786)) {
			mainSolutionSlider.reloadSlider({
				mode: 'horizontal',
				speed: 500,
				infiniteLoop:true,
				slideWidth: 370,
				slideMargin: 15,
				minSlides: 2,
				maxSlides: 2,
				moveSlides: 1,
				responsive: false,
				preloadImages: 'all',
				touchEnabled:false,
				onSliderLoad:function(){
					//mainSolutionSlider.goToNextSlide();
					$('.solution-wrp > .bx-wrapper > .bx-controls .bx-controls-direction a').addClass("scalewtop");
				}
			});
		}
		if (window_width < 787) {
			mainSolutionSlider.reloadSlider({
				mode: 'horizontal',
				speed: 500,
				infiniteLoop:true,
				slideWidth: 370,
				slideMargin: 15,
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 1,
				responsive: false,
				preloadImages: 'all',
				touchEnabled:true,
				onSliderLoad:function(){
					//mainSolutionSlider.goToNextSlide();
					$('.solution-wrp > .bx-wrapper > .bx-controls .bx-controls-direction a').addClass("scalewtop");
				}
			});
		}
	}
	sliders_width();

	$(window).resize(function(){
		if( window_width !== $( window ).width() ){
	    	window_width = $( window ).width();
	    	sliders_width();
		}
	});
	

	var solutionSlider = $('.solution .solution-slider');
	solutionSlider.bxSlider({
	    mode: 'horizontal',
		speed: 500,
		infiniteLoop:false,
		slideWidth: 370,
		touchEnabled:false,
	});

	var locksSlider = $('.locks .locks-slider');
	locksSlider.bxSlider({
	    mode: 'horizontal',
		speed: 500,
		auto:true,
		infiniteLoop:false,
		preloadImages: 'all',
		slideWidth: 400,
		touchEnabled:false,
	});

	$(".youtube-videos").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding		: 0
	});

		// graphics animate

	var gr52 = $('.statistics .row.blue.52').css('width');
		$('.statistics .row.blue.52 .blue-graphic.52').css({'width':0});
	var gr26 = $('.statistics .row.blue.26').css('width');
		$('.statistics .row.blue.26 .blue-graphic.26').css({'width':0});
	var gr14 = $('.statistics .row.blue.14').css('width');
		$('.statistics .row.blue.14 .blue-graphic.14').css({'width':0});
	var gr7 = $('.statistics .row.blue.7').css('width');
		$('.statistics .row.blue.7 .blue-graphic.7').css({'width':0});
	var gr5 = $('.statistics .row.blue.5').css('width');
		$('.statistics .row.blue.5 .blue-graphic.5').css({'width':0});
	var gr69 = $('.statistics .row.orange.69').css('width');
		$('.statistics .row.orange.69 .orange-graphic.69').css({'width':0});
	var gr3 = $('.statistics .row.orange.3').css('width');
		$('.statistics .row.orange.3 .orange-graphic.3').css({'width':0});
	var gr13 = $('.statistics .row.orange.13').css('width');
		$('.statistics .row.orange.13 .orange-graphic.13').css({'width':0});
	var gr11 = $('.statistics .row.orange.11').css('width');
		$('.statistics .row.orange.11 .orange-graphic.11').css({'width':0});
	var gr5_o = $('.statistics .row.orange.5').css('width');
		$('.statistics .row.orange.5 .orange-graphic.5').css({'width':0});

		function maindiagram(){
			$('.statistics .row.blue.52').animate({width:gr52}, 0, function() {
				$('.statistics .row.blue.52 .blue-graphic.52').animate({
					width:($(this).width()/100*52)},2000);
			});
			$('.statistics .row.blue.26').animate({width:gr26}, 0, function() {
				$('.statistics .row.blue.26 .blue-graphic.26').animate({
					width:($(this).width()/100*26)},2000);
			});
			$('.statistics .row.blue.14').animate({width:gr14}, 0, function() {
				$('.statistics .row.blue.14 .blue-graphic.14').animate({
					width:($(this).width()/100*14)},2000);
			});
			$('.statistics .row.blue.7').animate({width:gr7}, 0, function() {
				$('.statistics .row.blue.7 .blue-graphic.7').animate({
					width:($(this).width()/100*7)},2000);
			});
			$('.statistics .row.blue.5').animate({width:gr5}, 0, function() {
				$('.statistics .row.blue.5 .blue-graphic.5').animate({
					width:($(this).width()/100*5)},2000);
			});
			$('.statistics .row.orange.69').animate({width:gr69}, 0, function() {
				$('.statistics .row.orange.69 .orange-graphic.69').animate({
					width:($(this).width()/100*69)},2000);
			});
			$('.statistics .row.orange.3').animate({width:gr3}, 0, function() {
				$('.statistics .row.orange.3 .orange-graphic.3').animate({
					width:($(this).width()/100*3)},2000);
			});
			$('.statistics .row.orange.13').animate({width:gr13}, 0, function() {
				$('.statistics .row.orange.13 .orange-graphic.13').animate({
					width:($(this).width()/100*13)},2000);
			});
			$('.statistics .row.orange.11').animate({width:gr11}, 0, function() {
				$('.statistics .row.orange.11 .orange-graphic.11').animate({
					width:($(this).width()/100*11)},2000);
			});
			$('.statistics .row.orange.5').animate({width:gr5_o}, 0, function() {
				$('.statistics .row.orange.5 .orange-graphic.5').animate({
					width:($(this).width()/100*11)},2000);
			});
		}
		var numberSCount1 = 0;
		var numberSCount2 = 0;
				/*---- problem ---*/
		var numberSeparator = $.animateNumber.numberStepFactories.separator(' ');
		function showNumbersProblem (){
			if (numberSCount1 === 0){
				$('.numberbig').each(function(){
					var number_animate = ($(this).text()).replace(/[^-0-9]/gim,''); // Убирает все символы из строки кроме цифр и тире
					$(this).prop('number', 10000).animateNumber({ number: number_animate,numberStep:numberSeparator }, 2000);
				});
				$('.numbersmall').each(function(){
					var number_animate = ($(this).text()).replace(/[^-0-9]/gim,'');
					$(this).prop('number', 0).animateNumber({ number: number_animate,numberStep:numberSeparator }, 2000);
				});
				$('.numbermiddle').each(function(){
					var number_animate = ($(this).text()).replace(/[^-0-9]/gim,'');
					$(this).prop('number', 500).animateNumber({ number: number_animate,numberStep:numberSeparator }, 2000);
				});
			}
			numberSCount1++;
	    	
		}
        	/*---- statistics -----*/
        function showNumbersStatistic(){
        	if (numberSCount2 === 0){
        		$('.numberpercent').each(function(){
					var number_animate = ($(this).text()).replace(/[^-0-9]/gim,'');
					$(this).prop('number', 0).animateNumber({ number: number_animate }, 2000);
				});
        	}
        	numberSCount2++;   
		}

        $('.open-reviews-popup').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".popup-reviews").show();
        $(".popup-reviews").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

        var offset = $(".fixed").offset();
        var topPadding = ($(window).height())/2 - ($(".fixed").height())/2;
        $(".fixed").stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
        $(window).scroll(function() {
            // if ($(window).scrollTop() > offset.top) {
            $(".fixed").stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
            // }
            // else {
            // 	$(".fixed").stop().animate({marginTop: 0});
            // }
        });

        var offset2 = $(".fixed2").offset();
        var topPadding2 = 20;
        $(window).scroll(function() {
            if ($(window).scrollTop() > offset2.top) {
                $(".fixed2").stop().animate({marginTop: $(window).scrollTop() - offset2.top + topPadding2});
            }
            else {
            	$(".fixed2").stop().animate({marginTop: 0});
            }
        });

     // STARS
    var values =[];

	$('.rating .gray-star-big').hover(function(){
		$('.rating .gray-star-big').removeClass('hov');
		// ID звезды на которой находится мышка
        var cur = parseInt($(this).attr('id').substr(4));
        // Закрашиваем звезды до той на которой мышка
        for(i = 0; i < cur; i++){
        	$("#star" + i).addClass('hov');
        } 
	}, function(){
	// Если мышка не находится на звездах, вернуть изначальное значение
        	$('.rating .gray-star-big').removeClass('hov');
       }
	);
  
	$('.rating .gray-star-big').click(function(){
		// // ID звезды на которой находится мышка
          var cur = parseInt($(this).attr('id').substr(4));
          $(this).parent().find('input').val(cur);
        // Закрашиваем звезды до той на которой мышка
       	  $('.rating .gray-star-big').removeClass('active');
          for(var i = 0; i < cur + 1; i++){
          	$("#star" + i).addClass('active');
          }
	});

	$(".opacity, .button-close.b3,.close").click(function() {
        $(".popup-reviews").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity,#parent_popup3,.popup-reviews").hide();
        $('body').css({'overflow-y':'auto'});
    });
    $(".button-close.b1").click(function() {
        $("#parent_popup").hide();
        $('body').css({'overflow-y':'auto'});
    });
    $(".button-close.b2").click(function() {
        $("#parent_popup2").hide();
        $('body').css({'overflow-y':'auto'});
    });
				
	 $('section').each(function () {
			var block = $(this);
			$(window).scroll(function() {
				var top = block.offset().top;
				var bottom = block.height()+top;
				top = top - $(window).height() + 250;
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

	 $('.solution, .locks').each(function () {
			var block = $(this);
			$(window).scroll(function() {
				var top = block.offset().top;
				var bottom = block.height()+top;
				top = top - ($(window).height()/2);
				bottom = bottom - ($(window).height()/2);
				var scroll_top = $(this).scrollTop();
				if ((scroll_top > top) && (scroll_top < bottom)) {
					if (!block.hasClass('navicolor')) {
						block.addClass('navicolor');
						block.trigger('navicolorIn');
					}
				} else {
					block.removeClass('navicolor');
					block.trigger('navicolorOut');
				}
			});

		});

	 $('.indication0, .indication1, .indication2, .indication3, .indication4,.indication5,.indication6').each(function () {
			var block = $(this);
			$(window).scroll(function() {
				var top = block.offset().top;
				var bottom = block.height()+top;
				//top = top - $(window).height();
				var scroll_top = $(this).scrollTop();
				if ((scroll_top > top) && (scroll_top < bottom)) {
					if (!block.hasClass('blockhref')) {
						block.addClass('blockhref');
						block.trigger('blockhrefIn');
					}
				} else {
					block.removeClass('blockhref');
					block.trigger('blockhrefOut');
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

		$('section').on('animateIn', function() {
			var inter = 500;
			$(this).find('.scalewtop').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('transform', 'scale(1.0, 1.0)');
					block.addClass('animated');
				}, inter+500);
				inter++;
			});
		}).on('animateOut', function() {
			$(this).find('.scalewtop').each(function() {
				$(this).css('transform', 'scale(0.5, 0.5)');
				$(this).removeClass('animated');
			});
		});

		$('section').on('animateIn', function() {
			var inter = 0;
			$(this).find('.translate-left').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('opacity', 1);
					block.css('transform', 'translate3d(0px, 0px, 0px)');
				}, inter*200);
				inter++;
			});
		}).on('animateOut', function() {
			$(this).find('.translate-left').each(function() {
				$(this).css('opacity', 0.01);
				$(this).css('transform', 'translate3d(-1200px, 0px, 0px)');
			});
		});

		$('section').on('animateIn', function() {
			var inter = 0;
			$(this).find('.translate-right').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('opacity', 1);
					block.css('transform', 'translate3d(0px, 0px, 0px)');
				}, inter*200);
				inter++;
			});
		}).on('animateOut', function() {
			$(this).find('.translate-right').each(function() {
				$(this).css('opacity', 0.01);
				$(this).css('transform', 'translate3d(1200px, 0px, 0px)');
			});
		});

		$('section').on('animateIn', function() {
			var inter = 0;
			$(this).find('.problem-wrp').each(function() {
				setTimeout(function() {
					showNumbersProblem();
				}, inter*200);
				inter++;
			});
		});

		$('section').on('animateIn', function() {
			var inter = 0;
			$(this).find('.how').each(function() {
				setTimeout(function() {
					maindiagram();
					showNumbersStatistic();
				}, inter*200);
				inter++;
			});
		});


		// $(window).scroll(function() {
		// 	var 
		// 	var top = block.offset().top;
		// 	var bottom = block.height()+top;
		// 	top = top - $(window).height() + 250;
		// 	var scroll_top = $(this).scrollTop();
		// 	if ((scroll_top > top) && (scroll_top < bottom)) {
		// 		if (!block.hasClass('animate')) {
		// 			block.addClass('animate');
		// 			block.trigger('animateIn');
		// 		}
		// 	} else {
		// 		block.removeClass('animate');
		// 		block.trigger('animateOut');
		// 	}
		// });

	    // Изменение цвета навигации при достижении блока
		$('.indication0, .indication1, .indication2, .indication3, .indication4,.indication5,.indication6').on('blockhrefIn', function() {
			$('.navigator a').removeClass('active');
			var inum = $(this).attr('class').split(" ")[0].split("indication")[1];
			$('.navigator .i'+inum).addClass('active');
		});

		$('.solution').on('navicolorIn', function() {
			$('.navigator').addClass('white');
		}).on('navicolorOut', function() {
			$('.navigator').removeClass('white');
		});
		$('.locks').on('navicolorIn', function() {
			$('.navigator').addClass('white2');
		}).on('navicolorOut', function() {
			$('.navigator').removeClass('white2');
		});

		if(null !== navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)){
		// ???? ????????? ???, ??????? ????? ???????? ?????? ?? iphone|ipod|ipad|android
		$('head').append('<style>.scale, .sr, .scale2,.translate-left,.translate-right{opacity:1!important;-webkit-transform: scale(1, 1)!important;position: inherit;transform:translate3d(0px, 0px, 0px) !important}</style>');
		  // ??? css-???, ??????? ?????? ???????? ???????? ????????, ??????? ?????????? ????????? ??????????
	}


});	
$(window).load(function(){
	$('select').each(function(){
		$('select').selectBox({
    		mobile: true,
		});
	});
    // $('#slider .ui-slider-handle').html('<span>1500000</span>');
});

    






