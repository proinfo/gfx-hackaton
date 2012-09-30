function changeClass(rotator){
	if(document.getElementById(rotator).className == "block")
		
		document.getElementById(rotator).className += " rotated";
	else
		document.getElementById(rotator).className = "block";
}