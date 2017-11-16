document.getElementById("id_business").innerHTML = "Buseiness level version: 2017.11.16.5";

addEventListener("deviceorientation", on_device_orientation);
addEventListener("devicemotion", on_device_motion);


function on_device_orientation(e){

	document.getElementById("z").innerHTML = "gyro z = " + e.alpha;
	document.getElementById("x").innerHTML = "gyro x = " + e.beta;
	document.getElementById("y").innerHTML = "gyro y = " + e.gamma;




								 }
	//-------------------------------
function on_device_motion(e){
	
	document.getElementById("acc_x").innerHTML = "acc_x = " + Math.round(e.acceleration.x * 100) / 100;
	document.getElementById("acc_y").innerHTML = "acc_y = " + Math.round(e.acceleration.y * 100) / 100;
	document.getElementById("acc_z").innerHTML = "acc_z = " + Math.round(e.acceleration.z * 100) / 100;
	
	
	document.getElementById("accg_x").innerHTML = "accg_x = " + Math.round(e.accelerationIncludingGravity.x * 100) / 100;
	document.getElementById("accg_y").innerHTML = "accg_y = " + Math.round(e.accelerationIncludingGravity.y * 100) / 100;
	document.getElementById("accg_z").innerHTML = "accg_z = " + Math.round(e.accelerationIncludingGravity.z * 100) / 100;
	
	
}