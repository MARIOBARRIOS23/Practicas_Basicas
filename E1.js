/*
 * Exercise #1
 * Create a function that takes in one number
 * and checks if the number is greater than  10. Print out to the console true if it is greater and false otherwise.
 */
let num = parseInt(prompt("Ingresa un número"));
function validaNumero(num) {
  if (num > 10) {
    console.log(true);
  } else {
    console.log(false);
  }
}
validaNumero(num);

/*
 * Exercise #2
 * Create a function that takes in one number
 * and checks if it is divisible by 4 or divisible by 9.
 * Print out to the console true if a number
 * if divisible by 4 or 9, and false if a
 * number is not divisible by either number.
 */
let nume = parseInt(prompt("Ingresa un número"));

function validaNumeroDiv(nume) {
  var resc = nume % 4;
  var resn = nume % 9;
  if (resc != 0 || resn != 1) {
    console.log(true);
    console.log(resc);
    console.log(resn);
  } else {
    console.log(false);
    console.log(resc);
    console.log(resn);
  }
}
validaNumeroDiv(nume);
