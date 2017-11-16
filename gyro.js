document.getElementById("id_business").innerHTML = "Buseiness level version: 2017.11.16.0";

addEventListener("deviceorientation0", on_device_orientation);


function on_device_orientation(e){

	document.getElementById("z").innerHTML = e.alpha;
	document.getElementById("x").innerHTML = e.beta;
	document.getElementById("y").innerHTML = e.gamma;




								 }