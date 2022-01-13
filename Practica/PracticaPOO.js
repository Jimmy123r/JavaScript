class animal{
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de
		color ${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>");

	}
}

const perro = new animal("perro",5,"marron");
const pajaro = new animal("pajaro",1,"verde");
const gato = new animal("gato",2,"negro");


perro.verInfo();
pajaro.verInfo();
gato.verInfo();
