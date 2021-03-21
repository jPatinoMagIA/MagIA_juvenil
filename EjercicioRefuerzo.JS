//--------------------Semana 1-------------------

/*Juan quiere vender sus dulces, pero necesita venderlos aún si no está presente,  
por  lo  que  compró  una  máquina  expendedora  y  nos  pide ayuda para que implementemos su funcionamiento.
Necesitamos diseñar un programa que con 2 datos (el código del dulce a comprar 
y el dinero que vamos a meter en la máquina para pagar) logre decidir si entregar el dulce o no. */

//Disponemos de las siguientes variables: Chocolate, Paleta, Chicle y Galleta:

var codigoChoc = "xc23";
var precioChoc = 12.50;
var codigoPalet = "c4f2";
var precioPalet = 5.75;
var codigoChi = "gt74";
var precioChi = 4.25;
var codigoGalle = "l3k8";
var precioGalle = 9.10;
var dineroIngre = 0;
var devolucion = 0;

const prompt = require ( 'prompt-sync' )();

var producto = prompt ("Hola querido cliente, seleccione el producto que desea: ");
console.log ( producto );

switch ( producto ) {
    case "xc23":
        dineroIngre = prompt ( "Por favor ingrese el dinero: " );
        if ( dineroIngre == precioChoc ){
            console.log ( "Muchas gracias por su compra de chocolate, espero que tenga un buen día." );
        }
        else if ( dineroIngre > precioChoc ){
            devolucion = dineroIngre - precioChoc;
            console.log ( "Muchas gracias por su compra de chocolate, espero que tenga un buen día. Aquí tiene su cambio que fue de: " 
            + devolucion );
        }
        else {
            console.log ( "El dinero ingresado es insuficiente para la compra de su producto, inténtelo de nuevo." );
        };
        break;
    case "c4f2":
        dineroIngre = prompt ( "Por favor ingrese el dinero: " );
        if ( dineroIngre == precioPalet ){
            console.log ( "Muchas gracias por su compra de paleta, espero que tenga un buen día." );
        }
        else if ( dineroIngre > precioPalet ){
            devolucion = dineroIngre - precioPalet;
            console.log ( "Muchas gracias por su compra de paleta, espero que tenga un buen día. Aquí tiene su cambio que fue de: " 
            + devolucion );
        }
        else {
            console.log ( "El dinero ingresado es insuficiente para la compra de su producto, inténtelo de nuevo." );
        };
        break;
    case "gt74":
        dineroIngre = prompt ( "Por favor ingrese el dinero: " );
        if ( dineroIngre == precioChi ){
            console.log ( "Muchas gracias por su compra de chicle, espero que tenga un buen día." );
        }
        else if ( dineroIngre > precioChoc ){
            devolucion = dineroIngre - precioChi;
            console.log ( "Muchas gracias por su compra de chicle, espero que tenga un buen día. Aquí tiene su cambio que fue de: " 
            + devolucion );
        }
        else {
            console.log ( "El dinero ingresado es insuficiente para la compra de su producto, inténtelo de nuevo." );
        };
        break;
    case "l3k8":
        dineroIngre = prompt ( "Por favor ingrese el dinero: " );
        if ( dineroIngre == precioGalle ){
            console.log ( "Muchas gracias por su compra de galleta, espero que tenga un buen día." );
        }
        else if ( dineroIngre > precioGalle ){
            devolucion = dineroIngre - precioGalle;
            console.log ( "Muchas gracias por su compra de galleta, espero que tenga un buen día. Aquí tiene su cambio que fue de: " 
            + devolucion );
        }
        else {
            console.log ( "El dinero ingresado es insuficiente para la compra de su producto, inténtelo de nuevo." );
        };
        break;
    default: {
        console.log ( "El código ingresado es incorrecto, compruebe su producto." );
    };
};