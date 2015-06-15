(function(Ractive, $){
	var app = window.appConfig; 
	//  Socket connection to enable real-time communication with other clients
	// var socket = app.getSocket();
	// Initiaze Dynamic Data binding
	// For more info look into http://www.ractivejs.org/ Online	
	var ractive = new Ractive({
		el : '#wsRactive', 
		template : "#template",
		data: {
			index : app.shorthenTitle,
			process : app.createChapterView
		}
	});

	// Handler of Ractive functions
	ractive.on({
		updateChapter : updateChapter
	});

	function updateChapter(data){
		window.location.href = app.options.host + "/" + ractive.get('path')[1] + "/" + data.context.i;
		getChapter();
	}
	// Socket Handler
	// socket.on('toClient', function(data){
		// 	console.dir(data);
		// });

function getChapter(){
	var path = getPath(window.location.href);
	ractive.set('BookView', path[0])
	if (ractive.get('path.1') !== path[1]){
		app.getInfo(path[1], function(data, status){
			ractive.set('info', data);
		})
		app.getIndexex(path[1], function(data, status){
			ractive.set('indexes', data);
		})
	}
	if (path[0]){
		app.getChapter(path[1], path[2], function(data, status){
			ractive.set('chapter', data.p);
			ractive.set('extras', data.e);
			ractive.set('path', path);
			$("html, body").animate({ scrollTop: 0 }, "500");
			app.setCookie('session', path[2], 350);
			if ($(window).width() <= 768)
				$('.fa-bars').click();
		})
	}
}

(function() {
	app.initAll();
	getChapter();
})();

})(Ractive, $);