/*Programa que detecta el número mayor de 5 números ingresados*/


let number1 = parseInt(prompt("Ingrese el primer número"));
let number2 = parseInt(prompt("Ingrese el segundo número"));
let number3 = parseInt(prompt("Ingrese el tercer número"));
let number4 = parseInt(prompt("Ingrese el cuarto número"));
let number5 = parseInt(prompt("Ingrese el quinto número"));

function determinaMayor(number1, number2, number3, number4, number5) {

if(number1>number2 && number1>number3 && number1>number4 && number1>number5){
    alert("El primer número ingresado es el mayor: " + number1);
}else if(number2>number1 && number2>number3 && number2>number4 && number2>number5){
    alert("El segundo número ingresado es el mayor: " + number2);
}else if(number3>number1 && number3>number2 && number3>number4 && number3>number5){
    alert("El tercer número ingresado es el mayor: " + number3);
}else if(number4>number1 && number4>number2 && number4>number3 && number4>number5){
    alert("El cuarto número ingresado es el mayor:" + number4);
}else if(number5>number1 && number5>number2 && number5>number3 && number5>number4){
    alert("El quinto número ingresado es el mayor:" + number5);
}

}
determinaMayor(number1, number2, number3, number4, number5);