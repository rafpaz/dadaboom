let plugins = {};

plugins.preloader = function(action){
	if(action == "POP"){
		$(window).on('load', function() {
			handlePreloader();
		});
	}
	else {
		$(document).ready(function () {
			handlePreloader();
		});
	}
};

function handlePreloader(){
	let preloaderDelay = 850,
		preloaderFadeOutTime = 800;
	function hidePreloader() {
		let loadingAnimation = $(".loader", ".text"),
			preloader = $(".page-loading");
		loadingAnimation.fadeOut();
		preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
		$("html").animate({ scrollTop: 0 }, 1);
		$("body").animate({ scrollTop: 0 }, 1);
	}
	hidePreloader();
}

plugins.smothScrolling = function(){
	$('.section-link').on('click', function(event) {
		let $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 0
		}, 1000);
		event.preventDefault();
	});
};

plugins.navBarScrolling = function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= 100) {
			$('body').addClass('nav-scroll');
		} else {
			$('body').removeClass('nav-scroll');
		}
	});
};

plugins.countTo = function(){
	$('.number').countTo();
};

plugins.magnificPopup = function(){
	$('.portfolio-box').magnificPopup({
		type:'image',
		gallery:{enabled:true},
		zoom:{enabled: true, duration: 300}
	})
};

plugins.googleMaps = function(){
	if($("#map").length > 0){
		let lat = 32.0723871;
		let long = 34.8140164;
		let myOptions = {
			zoom: 16,
			center: new google.maps.LatLng(lat, long), //change the coordinates
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			mapTypeControl: false,
			styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
		};
		let map = new google.maps.Map(document.getElementById("map"), myOptions);
		let position = new google.maps.LatLng(lat, long);
		let marker = new google.maps.Marker({
			position: position,
			map: map,
			title: "Dadaboom"
		});
	}
};

plugins.wow = function(){
	new WOW().init();
};

export default plugins;
