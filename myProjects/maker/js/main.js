$(document).ready(function(){
	$('.sandwich').click(function(){
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});
	$(".nav li a, a.scroll").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top);
		$("html, body").animate({scrollTop: pos }, 1500);
		return false;
	});
	$("a.scroll").click(function (){
		$('.sandwich').toggleClass('active');
		$('.nav').removeClass('active');
	});
});	