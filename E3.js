/**
 * 
 *  Create a function that takes in 2 inputs (using prompt)
 *  and goes through the 5 arithmetic operators (+, -, /, *,
 *  %). The expected output on the console is:
 * `The sum is x` -> x is the calculated sum
 * `The subtraction is y` -> y is the calculated difference
 * `The multiplication is z` -> z is the calculated multiplication
 * `The division is w` -> w is the calculated division
 * `The remainder is q` -> q is the calculated remainder
 */
let numero1 = parseInt(prompt("Introduce el primer número"));
let numero2 = parseInt(prompt("Introduce el segundo número"));

function mathematicOperations() {
suma = numero1 + numero2;
resta = numero1 - numero2;
multi = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;

console.log("La suma es x -> " + suma);
console.log("La resta es y -> " + resta);
console.log("La multiplicación es z -> " + multi);
console.log("La división es w -> " + division);
console.log("El residuo es q -> " + residuo);
}

mathematicOperations(numero1, numero2);