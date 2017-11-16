document.getElementById("id_business").innerHTML = "Buseiness level version: 2017.11.16.2";

addEventListener("deviceorientation", on_device_orientation);


function on_device_orientation(e){

	document.getElementById("z").innerHTML = "z = " + e.alpha;
	document.getElementById("x").innerHTML = "x = " + e.beta;
	document.getElementById("y").innerHTML = "y = " + e.gamma;




								 }