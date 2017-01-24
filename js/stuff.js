function initMap()
{
	var screenLatLngSk = new google.maps.LatLng(-31.951241, 115.859884);
	var screenLatLngCz = new google.maps.LatLng(-31.951241, 115.859884);

	var myOptions = {
		zoom: 16,
		center: screenLatLngSk,
		disableDefaultUI: true,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"), myOptions);

	var image = 'images/map_pin.png';
	var image = new google.maps.MarkerImage('../images/map_pin.png',
		new google.maps.Size(70, 58), // size
		new google.maps.Point(0,0), // origin
		new google.maps.Point(21, 52) // anchor
	);

	var markerLatLngSk = new google.maps.LatLng(-31.951241, 115.859884);
	var skMarker = new google.maps.Marker({
		position: markerLatLngSk,
		map: map,
		icon: image
	});

	var markerLatLngCz = new google.maps.LatLng(-31.951241, 115.859884);
	var czMarker = new google.maps.Marker({
		position: markerLatLngCz,
		map: map,
		icon: image
	});

	$(".address.sk").click(function() {
		map.panTo(screenLatLngSk);
		map.setZoom(16);
		return false;
	});

	$(".address.cz").click(function() {
		map.panTo(screenLatLngCz);
		map.setZoom(16);
		return false;
	});
}


function onResize()
{
	$(".section4").css({'min-height': $(window).height()+"px"});
}


$(function() {
	$(".menu ul a, a.contactUs, a.backToTop").click(function() {
		$("html, body").animate({scrollTop: $(".section"+$(this).data('section')).offset().top+"px"}, 500);
		return false;
	});

	$(".buttons .button").click(function() {
		$(this).parent().find(".button").removeClass("active");
		$(this).addClass("active");

		var tabs = $(this).parents(".wrap").find(".text");
		tabs.fadeOut();
		tabs.eq($(this).index()).stop().fadeIn();
	});

	$(".email").each(function() {
		var email = $(this).html().replace(' at ', '@');
		$(this).html('<a href="mailto:'+email+'">'+email+'</a>');
	});

	$(window).resize(onResize);
	onResize();

	initMap();
})