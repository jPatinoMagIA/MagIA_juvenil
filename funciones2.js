//---EJERCICIO 1----
// Función que obtenga el precio de un producto y calcule el costo total más envío 
//solo si el producto vale MENOR o igual a 300us 
const prompt = require("prompt-sync")();
var precio = prompt("¿Cuál es el valor del producto SIN envío?");
calculaPrecio(precio); // JS mueve las llamadas a funciones al principio del ambito por lo que se pueden llamar funciones 
                        //antes de declararlas
function calculaPrecio () {
    if(precio > 300){
        console.log("Factura");
        console.log("El precio del producto es " + precio);
        console.log("El costo de envio es: " + 0);
        console.log("Total a pagar: " + precio);
    } else if (precio <= 300){
        console.log("Factura");
        console.log("El precio del producto es " + precio);
        console.log("El costo de envio es: " + 15);
        var precioTotal = parseInt(precio) + 15;
        console.log("Total a pagar: " + precioTotal);      
    }
}


