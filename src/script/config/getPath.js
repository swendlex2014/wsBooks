function(href){
	if (href.substr(href.length-1) == "/")
		href = href.substr(0, href.length-1);
	for (var i = 0; i < options.hosts.length; i++) {
		if (href.indexOf(options.hosts[i]) > -1){
			href = href.substr(options.hosts[i].length+1);
			var index = href.indexOf("/");
			if (index > -1){
				return [true, href.substr(0, index), href.substr(index + 1)];
			}
			else
				return [false, href];
		}
	};
	return href;
}