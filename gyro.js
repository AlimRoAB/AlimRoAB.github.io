document.getElementById("id_business").innerHTML = "Buseiness level version: 2017.11.16.1";

addEventListener("deviceorientation", on_device_orientation);


function on_device_orientation(e){

	document.getElementById("z").innerHTML = e.alpha;
	document.getElementById("x").innerHTML = e.beta;
	document.getElementById("y").innerHTML = e.gamma;




								 }