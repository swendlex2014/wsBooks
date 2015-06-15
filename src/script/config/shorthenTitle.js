function(input){
	if (input.length > 25){
		var index = 16 + input.substring(16).indexOf(" ");
		if (index < 16)
			index = input.lastIndexOf(" ");
		return input.substring(0, index) + "..."
	}
	return input;
}