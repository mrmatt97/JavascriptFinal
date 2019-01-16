function loadDoc() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			var message = this.response;
			var mesJson = JSON.parse(message);
			document.getElementById("demo").innerHTML = mesJson.message;
		}
	};
	xhttp.open("GET", "https://api.myjson.com/bins/cf4fp", true);
	xhttp.send();
};