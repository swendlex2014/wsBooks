function(){
	$('#nav-accordion').dcAccordion({
		eventType: 'click',
		autoClose: true,
		saveState: true,
		disableLink: true,
		speed: 'slow',
		showCount: false,
		autoExpand: true,
		classExpand: 'dcjq-current-parent'
	});
}