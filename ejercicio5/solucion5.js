
class Celular{
	constructor(color,peso,tamaño,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido =  false;
	}
	presionarBotonEncendido(){
		if(this.encendido == false){
			alert("celular encendido");
			this.encendido = true;
		}
		else{
			alert("celular apagado");
			this.encendido = false;
		}

	}
	reiniciar(){
		if(this.encendido == true){
			alert("reiniciando celular");

		}else{
			alert("el celular está apagado");
		}

	}
	tomarFoto(){
		alert(`foto tomada en una resolucion de : ${this.resolucionDePantalla}`);
	}
	grabarVideo(){
		alert(`video tomada en una resolucion de : ${this.resolucionDeCamara}`);
	}
	mobileInfo(){
		return`
			color: <b>${this.color}</b> <br>
			peso: <b>${this.peso}</b> <br>
			tamaño: <b>${this.tamaño}</b> <br>
			resolucion De Camara: <b>${this.resolucionDeCamara}</b> <br>
			memoria Ram: <b>${this.memoriaRam}</b> <br>
		`
	}
}


celular1 = new Celular("rojo","150g","5","full hd","1GB");
celular2 = new Celular("negro","155g","5.4","full hd","2GB");
celular3 = new Celular("blanco","15046g","5.9","full hd","2GB");

//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();


document.write(`
	${celular1.mobileInfo()} <br>
	${celular2.mobileInfo()} <br>
	${celular3.mobileInfo()} <br>
	`);
