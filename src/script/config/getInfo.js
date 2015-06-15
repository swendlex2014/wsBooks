function(book, cb){
	$.get(options.serv + "info/" + book, function(data, status){
		cb(data, status);
	})
}