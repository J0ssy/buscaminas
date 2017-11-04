//Arreglo con los elementos del tablero
var tableBombIt = [
					' ',
					'*',
					'1',
					' ',
					'/n',
					' ',
					' ',
					'*',
					'2',
					'/n',
					'1',
					'*',
					' ',
					' ',
					'/n',
					' ',
					'3',
					'*',
					' '
				  ];
//llamando al contenedor
var containerBombIt = document.getElementById('container-bomb-it');

//Área de juego
var bombIt = document.getElementById('bomb-it');

//Función que va a recibir el arreglo
function DrawGameZone(arr) {
	//Poner cada elemento en un div utilizando for
	for (var i = 0; i < tableBombIt.length; i++) {
		//Creamos div	
		var cell = document.createElement('div');
		//Salto de línea
		var enter = document.createElement('br');

		//Determinar con qué elementos crea un div
		if (arr[i] == '1' || arr[i] == '2' || arr[i] == '3') {
			//Añadiendo la clase correspondiente a los números
			cell.className = 'number';
			//Le pasamos el texto con el número al div
			cell.innerText = arr[i];
			//Evento de click para mostrar el número
			cell.onclick = showNumber;
		} else if (arr[i] == ' '){
			//Añadiendo clase para espacios vacíos
			cell.className = 'emptySpace';
			//Evento de click para el espacio vacío
			cell.onclick = changeColor;
		} else if (arr[i] == '*') {
			//Clase para la bomba
			cell.className = 'bomb';
			//Evento de click para la bomba
			cell.onclick = boom;
		} else {
			//Le asignamos el salto de línea y que continúe
			bombIt.appendChild(enter);			
			continue;
		}
		bombIt.appendChild(cell);
	}
	addBtnRestart();
}

//Función para mostrar el número
function showNumber() {
	this.className = 'number numberShow'
};

//Función para mostrar el espacio vacío
function changeColor () {
	this.style.backgroundColor = 'crimson';
};

//Función para la bomba
function boom () {
	//Eliminamos el tablero
	containerBombIt.removeChild(bombIt);
	//Añadimos gif Explosión
	containerBombIt.innerHTML = "<img src='https://media.giphy.com/media/ODU1I5zAgOwX6/giphy.gif' alt='BOOM'>";
	addBtnRestart();
}; 

//Creamos botón Restart
function addBtnRestart() {
	var btnRestart = document.createElement('button');
	btnRestart.innerText = 'Restart!';
	btnRestart.addEventListener('click', reStart);
	containerBombIt.appendChild(btnRestart);
}

//Función Restart
function reStart() {
	location.reload();
}


//Añadiendo array creado a la función
DrawGameZone(tableBombIt);

