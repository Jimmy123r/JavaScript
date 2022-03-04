const obtenerInformacion = (materia)=>{
	materias = {
		fisica:["perez","pepito","jimmy","maria"],
		programacion:["mosquito","eduarda","juan","pepito"],
		logica : ["eduardo","juan","pepito","jimmy","maria"],
		quimica : ["emiliano","juan","pepito","jimmy","maria"]
	}
	if(materias[materia] !== undefined){
		return [materias[materia],materia];
	}else{
		return materias;
	}
}



const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);

if (informacion !== false) {
	let profesor = informacion[0][0];
	let alumnos = informacion[0];
	alumnos.shift()
	document.write(`el profesor de <b>${informacion[1]}</b> es: <b style = "color: red">${profesor}</b><br/>
		los alumnos son : <b style = "color: blue">${alumnos}</b><br/><br/>	`);
}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for(info in informacion){
		if(informacion[info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push("  " +info);
		}
	}

	return `<b style = 'color:blue'>
	${alumno}</b> esta en <b> ${cantidadTotal} clases: <b style = 'color: green'>${clasesPresentes}</b><br><br>`;

}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("jimmy"));
document.write(cantidadDeClases("pepito"));
