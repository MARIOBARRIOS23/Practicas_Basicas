/**
 * Exercise 1:
 * We want to check if a string is empty.
 * If a string is not empty, we want to print
 * out the first character of that string.
 * If a string is empty, print out a text saying
 * "This string is empty" 
 */

let cadena = prompt("Introduce la cadena");

function checkEmptyString(cadena) {
  if (cadena == ""){
    console.log("Esta cadena esta vacía");
  }else{
    console.log(cadena.substr(0,1));
  }
}
checkEmptyString(cadena);



/**
 * Exercise 2:
 * We want to compare two strings and check if
 * they are the same - case insensitive.
 * Return a boolean - true if the two strings are
 * the same, and false if they are not 
 */
let cad1 = prompt("Introduce la primera cadena");
let cad2 = prompt("Introduce la segunda cadena");

function checkTwoStringsSame(cad1, cad2) {
  if (cad1 === cad2){
    console.log(true);
  }else{
    console.log(false);
  }
}

checkTwoStringsSame(cad1, cad2);