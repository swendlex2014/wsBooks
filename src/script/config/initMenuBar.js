function() {
	$('.fa-bars').click(function () {
		console.log("Toggle Clicked");
		if ($('#sidebar > ul').is(":visible") === true) {
			$('#main-content').css({
				'margin-left': '0px'
			});
			$('#sidebar').css({
				'margin-left': '-210px'
			});
			$('#sidebar > ul').hide();
			$("#container").addClass("sidebar-closed");
		} else {
			$('#main-content').css({
				'margin-left': '210px'
			});
			$('#sidebar > ul').show();
			$('#sidebar').css({
				'margin-left': '0'
			});
			$("#container").removeClass("sidebar-closed");
		}
	});
}