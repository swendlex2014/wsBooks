function(book, id, cb){
	$.get(options.serv + book + '/' + id, function(data, status){
		cb(data, status);
	})
}