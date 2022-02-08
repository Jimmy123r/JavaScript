class Calculadora{
	constructor(){

	}
 sumar(num1,num2){
 	return parseInt(num1) +  parseInt(num2);
 }

  restar(num1,num2){
 	return parseInt(num1) -  parseInt(num2);
 }

  dividir (num1,num2){
 	return parseInt(num1) /  parseInt(num2);
 }

  multiplicar(num1,num2){
 	return parseInt(num1) *  parseInt(num2);
 }

 potenciar(num,exp){
 	let numero = num;
 	for (var i = 1; i < exp; i++) {
 		numero = numero * num;
 	}
 		return num**exp;
 }
 raizCuadrada(num){
 	return Math.sqrt(num);

 }
 raizCubica(num){
 	return Math.cbrt(num);

 }

 }


 const calculadora =  new Calculadora();

 alert("¿que operacion deseas realizar?");
 let operacion = prompt("1: suma, 2: resta , 3: dividir , 4: multiplicacion, 5: potenciación, 6: raiz cuadrada , 7 :raiz Cubica  ");

 if(operacion == 1  ){
 	let numero1 = prompt(" primer número  para sumar");
 	let numero2 = prompt (" segundo número  para sumar");
 	let resultado = calculadora.sumar(numero1,numero2)
 	alert(`tu resultado es ${resultado}`)

 }

 else if(operacion == 2  ){
 	let numero1 = prompt(" primer número  para restar");
 	let numero2 = prompt (" segundo número  para restar");
 	let resultado = calculadora.restar(numero1,numero2);
 	alert(`tu resultado es ${resultado}`)

 }

 else if(operacion == 3 ){
 	let numero1 = prompt(" primer número  para dividir");
 	let numero2 = prompt (" segundo número  para dividir");
 	let resultado = calculadora.dividir(numero1,numero2);
 	alert(`tu resultado es ${resultado}`)

 }

 else if(operacion == 4 ){
 	let numero1 = prompt(" primer número  para multiplicar");
 	let numero2 = prompt (" segundo número  para multiplicar");
 	let resultado = calculadora.multiplicar(numero1,numero2);
 	alert(`tu resultado es ${resultado}`)
 }

 else if(operacion == 5 ){
 	let numero1 = prompt(" primer número  para potenciar");
 	let numero2 = prompt (" exponente");
 	let resultado = calculadora.potenciar(numero1,numero2);
 	alert(`tu resultado es ${resultado}`)
 }
  else if(operacion == 6 ){
 	let numero1 = prompt(" conocer la raiz Cuadrada de:  ");
 	let resultado = calculadora.raizCuadrada(numero1);
 	alert(`tu resultado es ${resultado}`)
 }
   else if(operacion == 7){
 	let numero1 = prompt(" conocer la raiz cubica de :");
 	let resultado = calculadora.raizCubica(numero1);
 	alert(`tu resultado es ${resultado}`)
 }
 else{
 	alert("tu respuesta no es correcta");

 }








