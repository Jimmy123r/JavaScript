var tp = " 100 minutos de hacer trabajos prácticos";
var estudio = " 100 minutos de estudio";
var trabajo = " 240 minutos de trabajo";
var homeWork = " 30 minutos de cosas de la casa";
var descanso = " 10 minutos de descanso";


console.log("TAREAS")


for (let i = 0; i < 14; i++) {
	if (i == 0) {
		console.group("semana 1");
	}


	console.groupCollapsed("dia " + (i + 1));
	console.log(trabajo);
	console.log(descanso);
	console.log(estudio);
	console.log(tp);	
	console.log(homeWork);
	console.groupEnd();
	if (i == 7) {
		console.groupEnd();
		console.groupCollapsed("semana 2")
	}
}

console.groupEnd();
console.groupEnd();
