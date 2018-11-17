$(document).ready(function () {

	var nav_visivel = false;

	$("#menu").click(function () {
		if (nav_visivel) {
			$("nav").stop().animate({ width: "0" }, 500);
			$(".nav_item").stop().animate({ width: "0" }, 500);
			nav_visivel = false;
		} else {
			$("nav").stop().animate({ width: "100%" }, 500);
			$(".nav_item").stop().animate({ width: "100%" }, 500);
			nav_visivel = true;
		}
	});

	$(window).resize(function () {
		var viewportWidth = $(window).width();

		if (viewportWidth > 600) {
			$("nav").css({ width: "260px" }, 500);
			$(".nav_item").css({ width: "100%" }, 500);
			$(".ativo").css({ width: "270px" }, 500);
			nav_visivel = true;
		} else {
			$("nav").css({ width: "0" }, 500);
			$(".nav_item").css({ width: "0" }, 500);
			nav_visivel = false;
		}
	});
});