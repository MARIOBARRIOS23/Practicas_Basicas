/*Programa realiza una comparacion de los precios de articulos y te muestra los dos productos mas baratos*/

let number1 = parseInt(prompt("Ingrese valor de primer articulo"));
let number2 = parseInt(prompt("Ingrese valor de segundo articulo"));
let number3 = parseInt(prompt("Ingrese valor de tercer articulo"));


function comparaPrecio(number1, number2, number3) {
    
if(number1>number2 && number1>number3){
    alert("Los articulos que puede adquirir son el dos con un precio de: "+ number2 + " y el tres con un precio de: "+ number3);
}else if(number2>number1 && number2>number3){
    alert("Los articulos que puede adquirir son el uno con un precio de: "+ number1 + " y el tres con un precio de: "+ number3);
}else if(number3>number1 && number3>number2){
    alert("Los articulos que puede adquirir son el uno con un precio de: "+ number1 + " y el dos con un precio de: "+ number2);
}
}

comparaPrecio(number1, number2, number3);

