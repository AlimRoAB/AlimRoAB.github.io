document.getElementById("id_business").innerHTML = "Buseiness level version: 2017.11.16.3";

addEventListener("deviceorientation", on_device_orientation);
addEventListener("devicemotion", on_device_motion);


function on_device_orientation(e){

	document.getElementById("z").innerHTML = "gyro z = " + e.alpha;
	document.getElementById("x").innerHTML = "gyro x = " + e.beta;
	document.getElementById("y").innerHTML = "gyro y = " + e.gamma;




								 }
	//-------------------------------
function on_device_motion(e){
	
	document.getElementById("acc_x").innerHTML = "acc_x" + e.acceleration.x;
	document.getElementById("acc_y").innerHTML = "acc_y" + e.acceleration.y;
	document.getElementById("acc_z").innerHTML = "acc_z" + e.acceleration.z;
	
	
}