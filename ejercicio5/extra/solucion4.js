
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

class altaGama extends Celular{
	constructor(color,peso,tamaño,rdc,ram,rdce){
		super(color,peso,tamaño,rdc,ram);
		this.resolucionDeCamaraExtra = rdce;

	}
	grabarVideoLento(){
		alert("estas grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("vamos a iniciar un reconocimiento Facial");
	}
	infoAltaGama(){
		return this.mobileInfo() + `resolucion De Camara Extra : <b>${this.resolucionDeCamaraExtra}</b> <br>`;
	}

}


//celular1 = new Celular("rojo","150g","5","full hd","1GB");
//celular2 = new Celular("negro","155g","5.4","full hd","2GB");
//celular3 = new Celular("blanco","15046g","5.9","full hd","2GB");

//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();

celular1 = new altaGama("rojo","130g","5.2","4k","3GB","full hd");
celular2 = new altaGama("negro","142g","5.2","4k","4GB", "hd");


document.write(`
	${celular1.infoAltaGama()} <br>
	${celular2.infoAltaGama()} <br>
	`);