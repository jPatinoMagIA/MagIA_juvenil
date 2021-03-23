/*
// Arreglos
var edades = [12,24,15,34];
console.log(edades[1]);
var nombres = ["andres", "maria", "juan", "diego"];
// Agrega o modifica elementos del ARRAY según su indice 
nombres[0] = "alex";
nombres[4] = "juanita";
console.log(nombres[4]);
// .pop(); borra elementos del fin del Array 
nombres.pop(); 
console.log(nombres);
// delete nombreArray[indice]; Borra el elemento indicado del Array
delete nombres[0];
console.log(nombres);
// nombreArray.push(elemento); Agrega un elemento al final del Array
nombres.push("alex");
console.log(nombres);
// nombreArray.length Cuenta los elementos del Array
console.log( "Cantidad de elementos en el Array es: " + nombres.length );
*/
//EJERCICIO programa que lee 5 calificaciones y devuelve el promedio 

const prompt = require("prompt-sync")();
var ratings = [];
ratings[0] = prompt("1 rating is: ");
ratings[1] = prompt("2 rating is: ");
ratings[2] = prompt("3 rating is: ");
ratings[3] = prompt("4 rating is: ");
ratings[4] = prompt("5 rating is: ");

var average = (parseInt(ratings[0]) + parseInt(ratings[1]) +parseInt(ratings[2]) +parseInt(ratings[3]) +parseInt(ratings[4]))/ 5;
console.log(average); 

// .concat 
var array1 =["Hola ", "Maria ","¿como estas? "];
var array2 =["Tienes un ", "Nuevo mensaje"];
console.log(array1.concat(array2));
