boolean = false;

function menu(){
	if(boolean == false){
		document.getElementById("menu_smartphone").style.display = "block";
		boolean = true;
	}
	else {
		document.getElementById("menu_smartphone").style.display = "none";
		boolean = false;
	}

}