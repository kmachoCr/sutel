	/*  *************************  */
/*  Digital Source Labs, 2014  */
/*  version 1.0, Jun 20, 2014  */
/*  *************************  */



/*  =====  imports  =====  */
importJScripts("//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js");
importJScripts("//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js");



/*  =====  functions  =====  */


// imports js file in runtime
function importJScripts(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    eval(xhr.responseText);
}


// when the application is starting, should be execute this function
$(document).ready(function() {

	// carousel
	$('#mainCarousel').carousel({
		interval: 10000,
		pause: "hover",
		wrap: true
	});

	$('#sutelCarousel').carousel({
		interval: 10000,
		pause: "hover",
		wrap: true
	});


});