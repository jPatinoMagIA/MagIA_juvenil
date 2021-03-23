/*
//Declaración de funciones
function multiplica (primerOperando) {
    var resultado = primerOperando * 2;
    console.log("El resultado es: " + resultado);
}
multiplica( 10 ); 
multiplica( 8 ); 

//Función como expresión 

var resultado = function (primerOperando) {
    return primerOperando * 2; 
}
console.log(resultado(24));

function multiplica3(){
    var resultado3 = 2 * 2;
    console.log("El resultado es: " + resultado3); 
}
multiplica3();

//Otro ejemplo, funcion que evalua el porcentaje del operando1 en el operando2

function porcentaje (primerOperando, segundoOperando){
    var resultado = ((primerOperando * 100) / segundoOperando);
    console.log(resultado + " %");
}
porcentaje(8 , 800);
porcentaje(24 , 800);
porcentaje(74 , 800);
porcentaje(45 , 200);


//Funcion flecha 

const saludaPersona = (nombre) => console.log("Bienvenido " + nombre);
saludaPersona("Alexander");

const prompt = require("prompt-sync")();
var otroNombre = prompt("What is your name?");
const saluda2 = (otroNombre) => console.log("Welcome back " + otroNombre);
saluda2(otroNombre); 

//--EJERCICIO 1--
// Programa que reciba un # y retorne un texto que diga si el # es par o impar
function determina (numero){ 
    if((numero % 2) == 1){ 
        console.log("Este número es IMPAR")
}
    else if ((numero % 2) == 0) { 
        console.log("Este número es PAR")
    }
}
determina(3);
determina(45);
determina(24);
determina(36);

//---EJERCICIO 2---
//FUNCIÓN que determine si un texto introducido contien Mayusculas, Minusculas o ambas. 
function determinaTexto(texto){
    if(texto == texto.toUpperCase()){
        console.log("Este texto esta escrito en Mayuscula");
    } 
    else if(texto == texto.toLowerCase()){
        console.log("Este texto esta escrito en Minuscula");
    }
    else(console.log("Este texto contiene Minusculas y Mayusculas"));
}

determinaTexto("Hola Juanito como ESTAS?");
determinaTexto("hola como estas?");
determinaTexto("HOLAA COMO ESTAS?");
*/





