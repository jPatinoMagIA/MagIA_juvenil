/*
// Ciclos - while 
var contador1 = 5;
var contador2 = 30;

while(contador1 > 0 && contador2 > 25) {
    console.log("Contador 1: " + contador1 + " Contador 2: " + contador2);
    contador1 -= 1;
    contador2 += 1;
}
/*
// Ciclo do ... while
do{ 
    INTRUCCIONES
} while (expresion);


//EJERCICIO Recibir números hasta recibir un 0, devolver la suma de los # ingresados.

const prompt = require("prompt-sync")();
var recibeNumero;
var suma = 0; 

do{ 
    var recibeNumero = prompt("Dame un número a sumar ");
    var suma = suma + parseInt(recibeNumero);
} while (recibeNumero != 0); 
console.log("La suma total es: " + suma); 
*/
//Ejercicio 2. Igual al anterior pero con WHILE
const prompt = require("prompt-sync")();
var recibeNumero;
var itinera = 2;
var suma = 0;
while (recibeNumero != 0 && itinera < 50){
    var recibeNumero = prompt("Dame un número a sumar ");
    itinera +=1;
    var suma = suma + parseInt(recibeNumero); 
}
console.log("La suma total es: " + suma);

