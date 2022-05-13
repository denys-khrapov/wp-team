// Custom Scripts
// Custom scripts
$(document).ready(function () {
	$(".nav-burger").click(function (event) {
		$(".nav-burger, .nav-menu").toggleClass("active");
		$("body").toggleClass("locked");
	});
	$(".header-body__cross").click(function (event) {
		$(".header").removeClass("active");
	});
});


