$(document).ready(function(){

	$(".phone-inp").mask("+7 (999) 999-99-99");

	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});

	$("a.smooth").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top);
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});

	 //Определем на какую машину hover
	// и соответсвенно отображаем нужный hover

	var carSort = "c2";

	$('.cars .car').removeClass('active');
    $('.cars .car-text').hide();
    $('.cars .car.' + carSort).addClass('active');
    $('.cars .car-text.' + carSort).show();

	$('.cars .car').hover(function(){
		var carSort = $(this).attr('class').split(' ')[1];
		$('.cars .car').removeClass('active');
		$('.cars .car-text').hide();
		$('.cars .car.' + carSort).addClass('active');
        $('.cars .car-text.' + carSort).show();
	});

	$('.reviews .reviews-slider').bxSlider({
	    mode: 'horizontal',
		speed: 800,
		auto:false,
		slideMargin:10,
		slideWidth: 1170,
		touchEnabled:true
	});

	$(".opacity, .close").click(function() {
        $(".politics-popup").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, .politics-popup").hide();
        $('body').css({'overflow-y':'auto'});
    });

   function initialize() {
	        var mapOptions = {
	            zoom: 10,
	            disableDefaultUI: true,
	            zoomControl:true, 
	            scrollwheel: false,  
	            center: new google.maps.LatLng(55.755031, 37.616579),
	            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
	               
	        };
	        var map = new google.maps.Map(document.getElementById('map'),mapOptions);

	        var bluePoint = 'img/blue-point.png';
	        var activeMarker = 'img/orange-point.png';
	        
	        var p1 = new google.maps.LatLng(55.708412, 37.423457);
	       
	       var marker1 = new google.maps.Marker({
	            position: p1,
	            map: map,
	          	icon:bluePoint
	        });

	        var p2 = new google.maps.LatLng(55.829285, 37.647615);
	       
	        var marker2 = new google.maps.Marker({
	            position: p2,
	            map: map,
	          	icon:bluePoint
	        });

	        var p3 = new google.maps.LatLng(55.885058, 37.407279);
	       
	       var marker3 = new google.maps.Marker({
	            position: p3,
	            map: map,
	          	icon:activeMarker
	        });

	        var p4 = new google.maps.LatLng(55.782211, 37.509599);
	       
	       var marker4 = new google.maps.Marker({
	            position: p4,
	            map: map,
	          	icon:bluePoint
	        });

	        var p5 = new google.maps.LatLng(55.620091, 37.622836);
	       
	        var marker5 = new google.maps.Marker({
	            position: p5,
	            map: map,
	          	icon:bluePoint
	        });

	        var p6 = new google.maps.LatLng(55.651184, 37.771530);
	       
	        var marker6 = new google.maps.Marker({
	            position: p6,
	            map: map,
	          	icon:bluePoint
	        });

	        var p7 = new google.maps.LatLng(55.745883, 37.838229);
	       
	        var marker7 = new google.maps.Marker({
	            position: p7,
	            map: map,
	          	icon:bluePoint
	        });

	        var markers = [marker1,marker2,marker3,marker4,marker5,marker6,marker7];

	        google.maps.event.addDomListener(marker1, 'click', function() {
	        	for(var i = 0; i < markers.length; i++){
	        		markers[i].setIcon(bluePoint);
	        	}
	        	$('.contacts-wrp p').removeClass('active');
  				$('.contacts-wrp p.a1').addClass('active');
  				markers[0].setIcon(activeMarker);

        	});
        	google.maps.event.addDomListener(marker2, 'click', function() {
        		for(var i = 0; i < markers.length; i++){
	        		markers[i].setIcon(bluePoint);
	        	}
        		$('.contacts-wrp p').removeClass('active');
  				$('.contacts-wrp p.a2').addClass('active');
  				markers[1].setIcon(activeMarker);

        	});
        	google.maps.event.addDomListener(marker3, 'click', function() {
        		for(var i = 0; i < markers.length; i++){
	        		markers[i].setIcon(bluePoint);
	        	}
	        	$('.contacts-wrp p').removeClass('active');
  				$('.contacts-wrp p.a3').addClass('active');
  				markers[2].setIcon(activeMarker);
        	});
        	google.maps.event.addDomListener(marker4, 'click', function() {
        		for(var i = 0; i < markers.length; i++){
	        		markers[i].setIcon(bluePoint);
	        	}
        		$('.contacts-wrp p').removeClass('active');
  				$('.contacts-wrp p.a4').addClass('active');
  				markers[3].setIcon(activeMarker);
        	});
        	google.maps.event.addDomListener(marker5, 'click', function() {
        		for(var i = 0; i < markers.length; i++){
	        		markers[i].setIcon(bluePoint);
	        	}
        		$('.contacts-wrp p').removeClass('active');
  				$('.contacts-wrp p.a5').addClass('active');
  				markers[4].setIcon(activeMarker);
        	});
        	google.maps.event.addDomListener(marker6, 'click', function() {
        		for(var i = 0; i < markers.length; i++){
	        		markers[i].setIcon(bluePoint);
	        	}
        		$('.contacts-wrp p').removeClass('active');
  				$('.contacts-wrp p.a6').addClass('active');
  				markers[5].setIcon(activeMarker);
        	});
        	google.maps.event.addDomListener(marker7, 'click', function() {
        		for(var i = 0; i < markers.length; i++){
	        		markers[i].setIcon(bluePoint);
	        	}
        		$('.contacts-wrp p').removeClass('active');
  				$('.contacts-wrp p.a7').addClass('active');
  				markers[6].setIcon(activeMarker);
        	});

	        var adressSort = "a3";
			$('.contacts-wrp p').removeClass('active');
		    $('.contacts-wrp p.' + adressSort).addClass('active');
		    $('.contacts-wrp p').click(function(){
		    	var adressSort = $(this).attr('class').split(' ')[1];
		    	$('.contacts-wrp p').removeClass('active');
        		 $('.contacts-wrp p.' + adressSort).addClass('active');
        		 if ($('.contacts-wrp p.a1').hasClass('active')){
        		 	marker1.setIcon(activeMarker);
        		 }
        		 else{
        		 	marker1.setIcon(bluePoint);
        		 }
        		 if ($('.contacts-wrp p.a2').hasClass('active')){
        		 	marker2.setIcon(activeMarker);
        		 }
        		 else{
        		 	marker2.setIcon(bluePoint);
        		 }
        		 if ($('.contacts-wrp p.a3').hasClass('active')){
        		 	marker3.setIcon(activeMarker);
        		 }
        		 else{
        		 	marker3.setIcon(bluePoint);
        		 }
        		 if ($('.contacts-wrp p.a4').hasClass('active')){
        		 	marker4.setIcon(activeMarker);
        		 }
        		 else{
        		 	marker4.setIcon(bluePoint);
        		 }
        		  if ($('.contacts-wrp p.a5').hasClass('active')){
        		 	marker5.setIcon(activeMarker);
        		 }
        		 else{
        		 	marker5.setIcon(bluePoint);
        		 }
        		  if ($('.contacts-wrp p.a6').hasClass('active')){
        		 	marker6.setIcon(activeMarker);
        		 }
        		 else{
        		 	marker6.setIcon(bluePoint);
        		 }
        		 if ($('.contacts-wrp p.a7').hasClass('active')){
        		 	marker7.setIcon(activeMarker);
        		 }
        		 else{
        		 	marker7.setIcon(bluePoint);
        		 }
		    });
		
	}
	 google.maps.event.addDomListener(window, 'load', initialize);

});	

$(window).load(function(){

	$('.jquery-comparison.comp1').comparison();
});






