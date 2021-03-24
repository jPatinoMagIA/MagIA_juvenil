//Creamos Arrays con los datos proporcionados 
var sCodigoProduct =["xc23", "c4f2", "gt74", "l3k8"];
var sNameProduct =["Chocolate", "Paleta", "Chicle", "Galleta"];
var nPrecios =[12.50, 5.75, 4.25, 9.10];

//Llamamos funcion prompt para pedir codigo de producto
const prompt = require("prompt-sync")();
var compra =prompt("Porfavor, ingresa un codigo de producto: ");

//Devolver precio y nombre del producto 
if(compra.includes("xc23")){
    console.log("El precio de " + sNameProduct[0] + " es: " + nPrecios[0]);
} 
else if (compra.includes("c4f2")){
    console.log("El precio de " + sNameProduct[1] + " es: " + nPrecios[1]);
} 
else if (compra.includes("gt74")){
    console.log("El precio de " + sNameProduct[2] + " es: " + nPrecios[2]);
} 
else if (compra.includes("l3k8")){
    console.log("El precio de " + sNameProduct[3] + " es: " + nPrecios[3]);
}
else (console.log("Ingresa un código valido"));

//Llamamos prompt para pedir dinero para la compra
//Evaluamos de nuevo código producto para llamar su función 
if(compra.includes("xc23")){
    var cash =prompt("Ingresa el efectivo -> ");
    venta1();
} 
else if (compra.includes("c4f2")){
    var cash =prompt("Ingresa el efectivo -> ");
    venta2();
} 
else if (compra.includes("gt74")){
    var cash =prompt("Ingresa el efectivo -> ");
    venta3();
} 
else if (compra.includes("l3k8")){
    var cash =prompt("Ingresa el efectivo -> ");
    venta4();
};


//Declaracion de funcion que evalua dinero ingresado y otorga venta-cambio o rechazo. 
function venta1 (){
    if(cash > nPrecios[0]){
        console.log("¡Compra exitosa de " + sNameProduct[0] + "! Recoge " + (parseInt(cash) - nPrecios[0]) + " de cambio.")
    }
    else if (cash == nPrecios[0]){
        console.log("¡Compra exitosa de " + sNameProduct[0] + " !");
    }
    else (console.log("Dinero insuficiente para su compra"));
};

function venta2 (){
    if(cash > nPrecios[1]){
        console.log("¡Compra exitosa de " + sNameProduct[1] + "! Recoge " + (parseInt(cash) - nPrecios[1]) + " de cambio.")
    }
    else if (cash == nPrecios[1]){
        console.log("¡Compra exitosa!");
    }
    else (console.log("Dinero insuficiente para su compra"));
};
function venta3 (){
    if(cash > nPrecios[2]){
        console.log("¡Compra exitosa de " + sNameProduct[2] + "! Recoge " + (parseInt(cash) - nPrecios[2]) + " de cambio.")
    }
    else if (cash == nPrecios[2]){
        console.log("¡Compra exitosa!");
    }
    else (console.log("Dinero insuficiente para su compra"));
};
function venta4 (){
    if(cash > nPrecios[3]){
        console.log("¡Compra exitosa de " + sNameProduct[3] + "! Recoge " + (parseInt(cash) - nPrecios[3]) + " de cambio.")
    }
    else if (cash == nPrecios[3]){
        console.log("¡Compra exitosa!");
    }
    else (console.log("Dinero insuficiente para su compra"));
};