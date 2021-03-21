//--------------------for--------------------

//Recuarda el Ctrl + C para evitar riesgos

var contador1 = 5;
var contador2 = 5;
var contador3 = 10;
var contador4 = 5;
var contador5 = 30;

for ( contador1; contador1 >= 0; contador1-- ){
    //console.log ( "Hola (for)" );
};

//--------------------while--------------------

while ( contador2 >= 0 ){
    //console.log ( "Hola (while)" );
    contador2--;
};

while ( contador3 < 20 ){
    //console.log ( "El número de iteración: " + contador3 );
    contador3++;
};

while ( contador4 < 10 && contador5 > 25 ){
    //console.log ( "Contador4: " + contador4 + " Contador5: " + contador5 );
    contador4++, contador5--;
};

//--------------------do while--------------------

var condicion1 = "Hola";
var condicion2 = 0;

do {
    //console.log ( "Entraste al ciclo do-while" );
    if ( condicion2 == 2 ){
        condicion1 = "Adiós";
    }
    condicion2++;
}while ( condicion1 == "Hola")

var condicion3 = 25;

do{
    //console.log ( "Valor: " + condicion3 );
    condicion3 -= 5;
}while ( condicion3 >= 5 );

//--------------------Ejercicio--------------------

/* Crear un programa que lea tantos números como se quiera hasta que se reciba
un 0 y se mostrará un resultado, el cual es la suma de todos los números ingresados. */

const prompt = require ( 'prompt-sync' )();
var recibeNumero;
var suma = 0;

/* do{
    recibeNumero = prompt ( "Dame un número a sumar: " );
    var suma += parseInt ( recibeNumero );
} while ( recibreNumero != 0 );

console.log ( "La suma total es: " + suma ); 

recibeNumero = prompt ( "Dame un número a sumar: " );*/

while ( recibeNumero != 0 ){
    recibeNumero = prompt ( "Dime tu número a sumar: " );
    suma += parseInt ( recibeNumero );
};

console.log ( "La suma total corresponde a: " + suma );