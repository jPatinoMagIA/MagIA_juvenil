// +=
var costo1 = 20;
var costo2 = 10;
costo1 += costo2;
console.log(costo1);
// *  // "/"
var costo3 = 50;
var costo4 = 10;
costo5 = costo4 * 100 / costo3;
console.log(costo5 + "%");
// ===
console.log(costo1 === costo2);
// >=
console.log(costo1 >= costo2);
// <=
console.log(costo1 <= costo2);
// !=
if (costo2 !== costo4) {
    console.log("condicional check")
}
else {console.log("no cumple")}

// && AND
if(costo4 == costo2 && costo1 < costo3){
    console.log("AND comprobado")
}

// || "OR"
if(costo4 == costo2 || costo1 > costo3){
    console.log("OR comprobado")
}

// if - else if - else 
if (costo2 !== costo4) {
    console.log("estas en IF")
}
else if(costo3 < costo1){
    console.log("estas en ELSE IF")
}
else(console.log("estas en ELSE"));

var lista = ["andres", "ana", "luis", "pedro", "antonio", "diego"];
console.log(lista.includes("andres")); 