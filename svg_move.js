 document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.11.15.1"; 


var circle = document.getElementById("id_circle");
var circle2 = document.getElementById("id_circle2");
circle.addEventListener("touchmove", on_touch_move);
circle2.addEventListener("touchmove", on_touch_move);
var svg = document.getElementById("id_svg");
var rect_svg = svg.getBoundingClientRect(); 

function on_touch_move(e)
{
	e.preverentDefault();
	var touches = e.changedTouches;

	for (var i = 0; i < touches.length; i++){
	var circle = touches[i].target;
	circle.setAttribute("cx" , touches[i].pageX - rect_svg.letf);
	circle.setAttribute("cy" , touches[i].pageX - rect_svg.top);
	
	}
}