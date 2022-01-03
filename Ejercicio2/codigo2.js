let gratis = false;

const validarcliente = tiempo=>{
	let edad = prompt ("¿cual es tu edad?")
	if(edad >= 18){
		if ( tiempo >= 2 && tiempo < 7 && gratis == false){
			alert(`podes pasar gratis porque son ${tiempo}:00hs`);
			
		}else{
			alert(`podes pasar porque son ${tiempo}:00hr pero tenes que pagar la entrada`);
		}

	}
	else{
		alert("no podes pasar porque sos menor de edad jaja");
	}

}

validarcliente(23)
validarcliente(24)
validarcliente(0.2)
validarcliente(0.6)
validarcliente(1)
validarcliente(2);
validarcliente(2.4);
validarcliente(3);
