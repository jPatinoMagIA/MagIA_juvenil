//OOP   
// Objetos
var celphone = {
    color: "black",
    peso: "75g",
    ram: "4gb",
    rom: "125gb",
    procesador: "snapDragon 252",
    bateria: "5000ma",
    camFront: "16mpx",
    camBack: "45mpx"
}
//console.log(celphone.color);

//Class plantilla para la creación de objetos
class galleta{
    constructor(tamaño, sabor, forma, precio){
        this.tamaño = tamaño; 
        this.forma = forma;
        this.sabor = sabor;
        this.precio = precio;
    }
}

var galletaObjeto = new galleta("5cm", "fresa", "redonda", "$1.000"); 
console.log(galletaObjeto.precio);


