 const sumar =(num1,num2)=>{
 	return parseInt(num1) +  parseInt(num2);
 }
  const restar =(num1,num2)=>{
 	return parseInt(num1) -  parseInt(num2);
 }
  const dividir =(num1,num2)=>{
 	return parseInt(num1) /  parseInt(num2);
 }
  const multiplicar =(num1,num2)=>{
 	return parseInt(num1) *  parseInt(num2);
 }
 
 alert("¿que operacion deseas realizar?");
 let operacion = prompt("1: suma, 2: resta , 3: dividir , 4: multiplicacion");

 if(operacion == 1  ){
 	let numero1 = prompt(" primer número  para sumar");
 	let numero2 = prompt (" segundo número  para sumar");
 	let resultado = sumar(numero1,numero2)
 	alert(`tu resultado es ${resultado}`)

 }
 else if(operacion == 2  ){
 	let numero1 = prompt(" primer número  para restar");
 	let numero2 = prompt (" segundo número  para restar");
 	let resultado = restar(numero1,numero2);
 	alert(`tu resultado es ${resultado}`)

 }
 else if(operacion == 3 ){
 	let numero1 = prompt(" primer número  para dividir");
 	let numero2 = prompt (" segundo número  para dividir");
 	let resultado = dividir(numero1,numero2);
 	alert(`tu resultado es ${resultado}`)

 }
 else if(operacion == 4 ){
 	let numero1 = prompt(" primer número  para multiplicar");
 	let numero2 = prompt (" segundo número  para multiplicar");
 	let resultado = multiplicar(numero1,numero2);
 	alert(`tu resultado es ${resultado}`)
 }
 else{
 	alert("tu respuesta no es correcta")

 }
 

