function pacman(){
	var change= document.getElementById('change');
	if (change.className == "bx bx-game"){
		change.className = "bx bxs-game"
	}
	else{
		change.className = "bx bx-game"
	}
}
function anime(){
	var anim = document.getElementById('change');
	if (anim.className == "bx bx-game"){
		anim.className ='bx bx-game bx-spin'
	}
	if (anim.className == "bx bxs-game"){
		anim.className= 'bx bxs-game bx-spin'
	}
}
function game(){
	setTimeout("iniciar()",2000);
}
function iniciar(){
	var pac=document.getElementById('pacman');
	if (pac.className=="pacman"){
		pac.className= "pacman-oculto"
		setTimeout("game2()",1000)
		
	}
}
function game2(){
	var pac=document.getElementById("game");
	if (pac.className=="game1"){
		pac.className="game2"
	}
}