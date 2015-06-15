function(data, info) {
	if (data === undefined || info === undefined)
		return [];
	var pars = [];
	var summary = false;
	for (var w = 0; w < data.length; w++) {
		var paragraph = data[w];
		var result = "<" + paragraph.c + ">";
		if (paragraph.c === "h3")
			result = "<" + paragraph.c + ' class="entry-title">';
		if (paragraph.c === "p" && !summary){
			result = "<" + paragraph.c + ' class="entry-summary">';
			summary = true;
		}
		var stop = 20;	
		var n = 0;
		while(n < paragraph.p.length && stop > 0){
			var i = paragraph.p.substring(n).indexOf('“');
			if (i === -1){
				result += paragraph.p.substring(n);
				break;			
			}
			else {
				var j = paragraph.p.substring(i + n).indexOf('”');
				if (j > 100){
					result += (paragraph.p.substr(n, i - n) + "</p><blockquote>" + 
						paragraph.p.substr(n + i + 1, j - 1));
					n = j + i + n;
					var lenAfterQuote = 0;
					while (true){
						var iSpan = paragraph.p.substring(n + lenAfterQuote).indexOf("span class");
						if (iSpan > -1 && iSpan < 5) {
							lenAfterQuote += paragraph.p.substring(n).indexOf("span>") + 5;
						} else 
						break;
					}
					if (lenAfterQuote > 0) {
						if (paragraph.p.substr(n + lenAfterQuote-2, 5).indexOf("R. V.") > -1)
							lenAfterQuote += 6;
						result += (paragraph.p.substr(n + 1, lenAfterQuote) + "</blockquote><p>");
						n = lenAfterQuote + n + 1;
					} else
					result += "</blockquote><p>";

				} else {
					result += (paragraph.p.substr(n, i + j + 1));
					n = n + i + j + 1;
				}
			}
			--stop;
		}
		if (paragraph.r !== undefined){
			result += '<span class="passref">' + paragraph.r + "</span>";
		}
		result += "</" + paragraph.c + ">";
		if (paragraph.c === "h3"){
			if (info.a) result += '<info><i class="fa fa-user"></i><span class="author vcard"><span class="fn">' + info.a + '</span></span>';
			if (info.t) result += '<i class="fa fa-newspaper-o"></i><span>' + info.t + "</span>";
			result += '<i class="fa fa-clock-o"></i><time>' + 50+ "mins </time></info>";
		}
		pars.push(result);
	};
	return pars;
}