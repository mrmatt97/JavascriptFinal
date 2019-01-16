"use strict";

function loadDoc() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {

			var message = this.response;
			var mesJson = JSON.parse(message);
			document.getElementById("demo").innerHTML = mesJson.message;
		}
	};
	xhttp.open("GET", "https://api.myjson.com/bins/cf4fp", true);
	xhttp.send();
};
'use strict';

// var name = prompt ('Code-Name','');
// var color = prompt ('Secret Color?','');
// document.write("<CENTER><FONT FACE=ARIAdl,TIMES NEW ROMAN COLOR="+color+" SIZE=5>Welcome Back Agent - "+name+"!</FONT><HR NOSHADE WIDTH=450></CENTER><P>");

var form = document.getElementById('contact');

form.addEventListener('submit', validateForm);

function validateForm(event) {
	event.preventDefault();
	var isValid = true;
	var patientNameValue = document.getElementById('patientName').value;
	var patientLastNameValue = document.getElementById('lastName').value;

	var emailValue = document.getElementById('email').value;

	if (patientNameValue === 0) {
		isValid = false;
		document.getElementById('firstNameRequied').innerHTML = "Please enter a valid firstlast name * ";
	}
	if (patientNameValue.indexOf(" ") !== -1) {
		isValid = false;
		document.getElementById('firstNameRequied').innerHTML = "Please enter a valid firstlast name * ";
	}
	if (!isNaN(patientNameValue)) {
		isValid = false;
		document.getElementById('firstNameRequied').innerHTML = "Please enter a valid firstlast name * ";
	}

	if (patientLastNameValue === 0) {
		isValid = false;
		document.getElementById('lastNameRequied').innerHTML = "Please enter a valid last name * ";
	}
	if (patientLastNameValue.indexOf(" ") !== -1) {
		isValid = false;
		document.getElementById('lastNameRequied').innerHTML = "Please enter a valid last name * ";
	}
	if (!isNaN(patientLastNameValue)) {
		isValid = false;
		document.getElementById('lastNameRequied').innerHTML = "Please enter a valid last name * ";
	}

	if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1) {
		document.getElementById('emailCheck').innerHTML = "Please enter a valid Email * ";
		isValid = false;
	}
	if (emailValue.length < 5) {
		document.getElementById('emailCheck').innerHTML = "Please enter a valid Email * ";
		isValid = false;
	}
};
'use strict';

function openModal() {
	document.getElementById('myModal').style.display = "block";
}

function closeModal() {
	document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
};