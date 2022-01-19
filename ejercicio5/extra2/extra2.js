
class App{
	constructor(descargas, puntuacion, peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada= false;
		this.instalada = false;

	}	
	instalar(){
		if(this.instalada == false){
			this.instalada = true;
			alert("app instalada correctamente");

		}
	}
	desinstalar(){
		if(this.instalada == true){
			this.instalada = false;
			alert("app desinstalada correctamente");

		}
	}
	abrir(){
		if(this.iniciada = false && this.instalada == true){
			this.iniciada = true;
			alert("app encendida");

		}
	}
	cerrar(){
		if(this.iniciada == true && this.instalada == true){
			this.iniciada = false;
			alert("app cerrada");

		}
	}
	appInfo(){
		return`
		Descargas : <b>${this.descargas}</b><br>
		puntuacion: <b>${this.puntuacion}</b><br>
		peso: <b>${this.peso}</b><br>
		
		`
	}
}

app1 = new App("6.00","3 estrellas","900mb");
app2 = new App("17.000","7 estrellas","400mb");
app3 = new App("18.000","2 estrellas","500mb");
app4 = new App("16.000","1 estrellas","600mb");
app5 = new App("20.000","4 estrellas","700mb");
app6 = new App("100.000","3 estrellas","800mb");
app7 = new App("12.000","4 estrellas","200mb");

document.write(`
	${app1.appInfo()}<br>
	${app2.appInfo()}<br>
	${app3.appInfo()}<br>
	${app4.appInfo()}<br>
	${app5.appInfo()}<br>
	${app6.appInfo()}<br>
	${app7.appInfo()}<br>
	`

	);




























