$(document).ready(function(){

	$('.button').hover(function(){
		$('.text-bg').addClass('animate');
	});

	$('.works, .contacts, .contacts-wrp').hide();

	$('.portfolio-button').click(function(){
		$('.works').slideDown('slow');
		$('.contacts').show();
	});

	$('.contacts-button').click(function(){
		$('.contacts-wrp').slideDown('slow');
	});

	$("a.smooth").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top + 130);
		$("html, body").animate({scrollTop: pos }, 1200);
		return false;
	});
	$(".contacts-button").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top + 200);
		$("html, body").animate({scrollTop: pos }, 1200);
		return false;
	});
	
});

$(window).load(function()
{
	/*----------------ANIMATION TB-----------------*/
	function coverBgTB(element)
	{
	    var animationTime = 290;
	    $('.animate-tb').addClass('cover-tb');
	    setTimeout(function() {
	       	element.find('.cover-bg').addClass('remove');
	       	element.find('.block-bg').addClass('remove');
	    }, animationTime);
	}
	
	// /*----------------ANIMATION BT-----------------*/
	function coverBgBT(element)
	{
	    var animationTime = 290; // Задержка анимации блока
	    $('.animate-bt').addClass('cover-bt');
	    setTimeout(function() {
	    	element.find('.cover-bg').addClass('remove');
	    	element.find('.block-bg').addClass('remove');
	    }, animationTime);
	}

	var delay1 = 500;
	var delay2 = 1300;
	var delay3 = 1800;
	var delay4 = 2300;
	//1 
	setTimeout(function() {
		var element = $('.logo');
		element.addClass('animate-tb');
		coverBgTB(element);
	}, delay1);
	// 2 
	setTimeout(function() {
		var element = $('.main-img');
		element.addClass('animate-tb');
		coverBgTB(element);
	}, delay2);
	// 3 
	setTimeout(function() {
		var element = $('.gray-bg');
		element.addClass('animate-bt');
		coverBgBT(element);
	}, delay2);
	// 4 
	setTimeout(function() {
		var element1 = $('h1');
		var element2 = $('.text-animation p');
		element1.addClass('fadeInUp_1');
		element2.addClass('fadeInUp_2');
	}, delay3);
	// 5 
	setTimeout(function() {
		var element3 = $('.animate-button');
		var element4 = $('.animate-text');
		element3.addClass('fadeInUp_1');
		element4.addClass('fadeInUp_1');
	}, delay4);
	







});	