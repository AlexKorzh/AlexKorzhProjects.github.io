$(document).ready(function() {			 

	$("a.smooth, .nav a").click(function (){
		var id = $(this).attr("href");
		var pos = $(id).position().top;
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});

	 $('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});

	$(".open-callback-form").click(function() {
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".callback-form").show();
        $(".callback-form").animate({"opacity":1}, 400);
        return false;
    });
      
    $(".opacity, #parent_popup, .close").click(function() {
        $(".callback-form").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, .callback-form").hide();
    });

    
});
$(window).load(function(){
	$('select').each(function(){
		$('select').selectBox({
    		mobile: true,
		});
	});
});


