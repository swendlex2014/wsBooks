function(){
	$("#sidebar").niceScroll({
		styler:"fb",
		cursorcolor:"#e8403f", 
		cursorwidth: '3',
		cursorborderradius: '10px', 
		background: '#404040', 
		spacebarenabled:false, 
		cursorborder: ''});
	$("html").niceScroll({
		styler:"fb",
		cursorcolor:"#e8403f",
		cursorwidth: '6',
		cursorborderradius: '10px',
		background: '#404040',
		spacebarenabled:false,
		cursorborder: '', zindex: '1000'});
}