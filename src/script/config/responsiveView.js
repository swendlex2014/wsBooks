function() {
	var wSize = $(window).width();
	if (wSize <= 768 && $('#sidebar > ul').is(":visible") === true) {
		$('.fa-bars').click();
	}

	else if (wSize > 768 && $('#sidebar > ul').is(":visible") !== true) {
		$('.fa-bars').click();
	}
}