function CountryAPI(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.ip2country.info/ip?' + ip_address, false);
	xhr.send();

	if (xhr.status == 200) {
		var result = JSON.parse(xhr.responseText);
		return result;
	}
}

// var country = CountryAPI();
// console.log(country);
