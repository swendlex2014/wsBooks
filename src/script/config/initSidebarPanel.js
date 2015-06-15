function(){
	jQuery('#sidebar .sub-menu > a').click(function () {
		var o = ($(this).offset());
		diff = 250 - o.top;
		if(diff>0)
			$("#sidebar").scrollTo("-="+Math.abs(diff),500);
		else
			$("#sidebar").scrollTo("+="+Math.abs(diff),500);
	});
	jQuery('.panel .tools .fa-chevron-down').click(function () {
		var el = jQuery(this).parents(".panel").children(".panel-body");
		if (jQuery(this).hasClass("fa-chevron-down")) {
			jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
			el.slideUp(200);
		} else {
			jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
			el.slideDown(200);
		}
	});
	jQuery('.panel .tools .fa-times').click(function () {
		jQuery(this).parents(".panel").parent().remove();
	});
}