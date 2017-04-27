function cambiarGato(){
	var contenedor = document.getElementById("contenedor-gatos");
	var numRandom = Math.floor(Math.random() * res.data.length);

	contenedor.innerHTML = '<img src="' + res.data[numRandom].images.downsized.url + '">';
}

function masTarea(){

	
}

function obtenerEmail(){
	var input = document.getElementById("email");

	var contEmail = document.getElementsByClassName("email-list");

	contEmail[0].innerHTML += input.value +"<br>";

	input.value = "";
}

cambiarGato();