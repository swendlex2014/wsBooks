function(){
	$( document ).ready(function() {
		responsiveView();
		$.slidebars();
		initScrollbar();
		// initNavigation();
		initMenuBar();
		initSidebarPanel();
		console.log("Page Loaded");
	});
	$(window).on('resize', responsiveView);
}