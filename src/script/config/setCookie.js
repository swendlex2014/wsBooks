function(cname, cvalue, hours) {
	var d = new Date();
	d.setTime(d.getTime() + (1*hours*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}