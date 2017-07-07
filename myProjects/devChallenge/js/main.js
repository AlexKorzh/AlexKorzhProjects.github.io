$(document).ready(function(){

	$('input, textarea').click(function(){
        $(this).css({"border-bottom-color": "#000"});
    });

	$("a.smooth").click(function (){
		$('.nav .nav-item a').removeClass('active');
		$(this).addClass('active');
		if ($('.nav').hasClass('active')) {
			$('body').css({'overflow-y':'auto'});
			$('.nav.active').removeClass('active');
			$('.sandwich').removeClass('active');
		}
		var id = $(this).attr("href");
		var pos = ($(id).position().top) - 50;
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});

	$('.sandwich').click(function(){
		$(this).toggleClass('active');
		$('body').css({'overflow-y':'hidden'});
		$('.nav').toggleClass('active');
	});
	
	var $galleryCarousel = $('.gallery-carousel'),
		$partnersCarousel = $('.partners-carousel'),
		$carouselControls = $('.owl-controls'),
		$reviewsSlider = $('.reviews .reviews-slider'),
		counter = document.getElementById('counter');

		// gallery-carousel
		$galleryCarousel.owlCarousel({
			margin:53,
			navSpeed: 900,
			loop:true,
			autoWidth:true,
			items:3,
			MouseDrag: true,
			touchDrag: true,
			pullDrag:false,
			freeDrag:false,
			onInitialized: function(event) {
				counter.innerHTML = "<span class='numbers'>"+1+ "</span> " + "<span class='inner-text'>"+"from"+"</span>" + " <span class='numbers'>"+ this.items().length+"</span>";
			}
		});

		$galleryCarousel.on('changed.owl.carousel', function(event) {
			counter.innerHTML = "<span class='numbers'>"+ (++event.page.index) +"</span>" + "<span class='inner-text'>"+"from"+"</span>" + "<span class='numbers'>"+ event.item.count +"</span>";
		});

		// reviews-slider
		$reviewsSlider.bxSlider({
			mode: 'horizontal',
			speed: 800,
			slideWidth: 1180,
			touchEnabled:false,
			autoHeight: true,
			auto: true,
			pause: 4000
		});

		// partners-carousel
		$partnersCarousel.owlCarousel({
			margin:100,
			navSpeed: 900,
			loop:true,
			autoWidth:true,
			items:6,
			MouseDrag: false,
			touchDrag: false,
			pullDrag:false,
			freeDrag:false,
			autoplay:true,
			autoplayTimeout:6000
		});

		// tabs
		var tabSort = "basic";

		$('.programs .tabs-wrp .tab').removeClass('active');
		$('.programs .course-level').hide();
		$('.programs .course-block').hide();
		$('.programs .course-dersciption').hide();
		$('.programs .course-extra').hide();
		$('.programs .tabs-wrp .tab.' + tabSort).addClass('active');
		$('.programs .course-level.' + tabSort).show();
		$('.programs .course-block.' + tabSort).show();
		$('.programs .course-dersciption.' + tabSort).show();
		$('.programs .course-extra.' + tabSort).show();

		$('.programs .tabs-wrp .tab').click(function(){
			var tabSort = $(this).attr('class').split(' ')[1];

			$('.programs .tabs-wrp .tab').removeClass('active');
			$('.programs .course-level').hide();
			$('.programs .course-block').hide();
			$('.programs .course-dersciption').hide();
			$('.programs .course-extra').hide();
			$('.programs .tabs-wrp .tab.' + tabSort).addClass('active');
			$('.programs .course-level.' + tabSort).show();
			$('.programs .course-block.' + tabSort).show();
			$('.programs .course-dersciption.' + tabSort).show();
			$('.programs .course-extra.' + tabSort).show();
		});

		var isMobile = {
			Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
			BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
			iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
			Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
			any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
		};

		if ( !isMobile.any() ) {
			// Parallax for backgrounds
			$('.bg-parallax[data-type="background"]').each(function(){
				var $bgobj = $(this);
				$(window).scroll(function() {
					var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
					var coords = 'center '+ yPos + 'px';
					$bgobj.css({ backgroundPosition: coords }); 
				});
			});
		}
		// Parallax for corns
		function parallax(){
			var scrolled = $(window).scrollTop();
			$('.parallax_1').css('top', +(scrolled * 0.25) + 'px');
			$('.parallax_2').css('top', +(scrolled * 0.2) + 'px');
			$('.parallax_3').css('top', +(scrolled * 0.2) + 'px');
			$('.parallax_4').css('top', +(scrolled * 0.1) + 'px');
		}

		$(window).scroll(function() {
			var top = 5;
			var scroll_top = $(this).scrollTop();
			if (scroll_top > top) {
				$('.top-header').addClass('active'); 
				$('.right-line').addClass('active');             
			} else {
				$('.right-line').removeClass('active');
				$('.top-header').removeClass('active');       
			}
			parallax();
		});

	});	