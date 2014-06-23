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

	$("#menuList a").on('click', function (ev) {
		var target = ev.currentTarget,
			currentInfo = $(target).attr('data-link');

		$('html, body').animate({
			scrollTop: parseInt($("#" + currentInfo).offset().top)
		}, 2000);

	});
});