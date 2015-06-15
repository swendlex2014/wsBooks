function(book, cb){
	$.get(options.serv + "indexes/" + book, function(data, status){
		cb(data, status);
	})
}