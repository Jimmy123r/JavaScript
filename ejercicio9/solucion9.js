const  contenedor = document.querySelector(".flex-container");
const boton =document.querySelector(".send-button");
boton.value = boton.value.toUpperCase();

function crearLlave(nombre,modelo,precio){
	img = "<img class='llave-img'src='llave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}
const changeHidden = (number)=>{
	document.querySelector(".key-data").value = number;
}



let documentFragment = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
	let modelo_random = Math.round(Math.random()* 10000);
	let precio_random = Math.round(Math.random()* 10 + 30);
	let llave = crearLlave(`llave ${i}`,`modelo ${modelo_random}`,precio_random);
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{changeHidden(modelo_random)})
	div.tabIndex = i;
	div.classList.add(`item-${i}`,`flex-item`)
	div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
