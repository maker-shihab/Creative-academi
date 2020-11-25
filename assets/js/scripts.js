$(document).ready(function () {
	$('.our-expreance').owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		dots: true,
		nav: false
	});
	$(".logo-bars").click(function () {
		$(".menu ul").slideToggle(500);
	
		return false;
	  });
});
$(window).scroll(function () {
	var scrollValu = $(this).scrollTop();
  
	if (scrollValu > 400) {
	  $(".nav-area").addClass("sticky");
	} else {
	  $(".nav-area").removeClass("sticky");
	}
  });