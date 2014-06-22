$(function () {

	$(window).scroll(function () {
		var scrollWindow = $(window).scrollTop(),
			container = $(".header"),
			containerPosition = container.position().top;

		if (scrollWindow > containerPosition) {
			container.addClass("fixNav");
		} else {
			container.removeClass("fixNav");
		}

	});


});