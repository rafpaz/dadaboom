/**
*
* -------------------------------------------------
*
* Template : Yala - One Page Personal Portfolio Template
* Author   : Hamza Mensouri
* Version  : 1.0
*
* --------------------------------------------------

01.Plugin For Preloader
02.Plugin for Smooth Scrolling
03.Plugin for Navbar Scrolling
04.Plugin for Typed Text
05.Plugin for Projects Counter
06.Plugin For Magnific Popup For Portfolio
07.Plugin for Google Map
08.Plugin For Wow Animation

* --------------------------------------------------
*
**/
(function ($) {
    "use strict";
	
jQuery(document).ready(function($){
	
	
/** 01.Plugin For Preloader **/
$(window).on('load', function() {
		$(document).ready(function(){
		$('html').animate({scrollTop:0}, 1);
		$('body').animate({scrollTop:0}, 1);
		});
        var preloaderDelay = 850,
            preloaderFadeOutTime = 800;
        function hidePreloader() {
        var loadingAnimation = $('.loader','.text'),
            preloader = $('.page-loading');
            loadingAnimation.fadeOut();
            preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
});

/** 02.Plugin for Smooth Scrolling **/
$('.section-link').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
});


/** 03.Plugin for Navbar Scrolling **/
$(window).scroll(function() {
    if($(this).scrollTop() >= 100) {
        $('body').addClass('nav-scroll');
    } else {
        $('body').removeClass('nav-scroll');
    }
});

/** 04.Plugin for Typed Text **/
// $(function(){
	// $(".typed").typed({
	// 	strings: ["בית ספר לתופים", "מתופף מקצועי", "מתמחה בעבודה עם ילדים"],
	// 	// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
	// 	stringsElement: null,
	// 	// typing speed
	// 	typeSpeed: 60,
	// 	// time before typing starts
	// 	startDelay: 1200,
	// 	// backspacing speed
	// 	backSpeed: 20,
	// 	// time before backspacing
	// 	backDelay: 500,
	// 	// loop
	// 	loop: true,
	// 	// false = infinite
	// 	loopCount: 5,
	// 	// show cursor
	// 	showCursor: false,
	// 	// character for cursor
	// 	cursorChar: "|",
	// 	// attribute to type (null == text)
	// 	attr: null,
	// 	// either html or text
	// 	contentType: 'html',
	// 	// call when done callback function
	// 	callback: function() {},
	// 	// starting callback function before each string
	// 	preStringTyped: function() {},
	// 	//callback for every typed string
	// 	onStringTyped: function() {},
	// 	// callback for reset
	// 	resetCallback: function() {}
	// });
// });

/** 05.Plugin for Projects Counter  **/
$('.number').countTo();

/** 06.Plugin For Magnific Popup For Portfolio **/
$('.portfolio-box').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
})

/** 07.Plugin for Google Map **/
 if($("#map").length > 0){
        var lat = 32.0723871;
        var long = 34.8140164;
        var myOptions = {  
            zoom: 16,
            center: new google.maps.LatLng(lat, long), //change the coordinates
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            mapTypeControl: false,
            styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
        };		 
        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var position = new google.maps.LatLng(lat, long);
        var marker = new google.maps.Marker({
          position: position,
          map: map,
          title: "Dadaboom"
        });
}
 
/** 08.Plugin For Wow Animation **/
	new WOW().init();
	
    });
})(jQuery);
