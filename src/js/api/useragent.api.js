function UserAgentAPI(){
  var ua = encodeURIComponent(navigator.userAgent).replace(/%20/g,'+');
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://useragentapi.com/api/v3/json/80b44940/'+ua, false);
	xhr.send();

	if (xhr.status == 200) {
		var result = JSON.parse(xhr.responseText);
		return result;
	}
}

// var UserAgent = UserAgentAPI();
// console.log(UserAgent.data);
