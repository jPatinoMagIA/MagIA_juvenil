//Este es un ejercicio de refuerzo academico, NO constituye un metodo verdadero de encriptación//
//REFUERZO 2 -> Crear programa que esconda un mensaje ingresado por prompt
//Esta es una modificación elaborada por otro programador para que el ejercicio coincida con lo requerido 

//Declaración de variables
const prompt = require("prompt-sync")();
const alpha1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m"];
const alpha2 = ["n","o","p","q","r","s","t","u","v","w","x","y","z"];
var choise = prompt("1 Encriptar | 2 Desencriptar : ")

//Condicional para llamar Encriptar o Desencriptar
if(choise == 1){
    encryp();
} else if(choise == 2){
    desencryp();
} else(console.log("Número invalido."));
//Declaración de funciones
function encryp(){ 
    var msn = prompt("Ingresa el mensaje a encriptar: ");
    if(msn == msn.toLowerCase ()){
        const arrayMsn =[...msn]; //Esta línea convierte el string en Array
        for(var i = 0; i <= alpha1.length; i++){
    
            if(alpha1.includes(arrayMsn[i])){
            let resultado = alpha1.findIndex(elemento => elemento == arrayMsn[i]); //.findIndex busca elemento y retorna su index 
            console.log(alpha2[resultado]); //Muestra el resultado en el index del Array contrario para ocultar MSN
            }
            else if (alpha2.includes(arrayMsn[i])){ //Else if continua buscando en otra mitad del alfabeto 
                let resultado = alpha2.findIndex(elemento => elemento == arrayMsn[i]);
                console.log(alpha1[resultado]);     
            }
        }
    }
    else {
        console.log ( "ERROR: El mensaje ingresado no está en minúsculas, por favor vuelve a ingresarlo" )
    }
};
function desencryp(){ //Para desocultar solo se invierten los valores 
    var msn = prompt("Ingresa el mensaje a Desencriptar: ");
    if(msn == msn.toLowerCase ()){
        const arrayMsn =[...msn]; 
        
        for(var i = 0; i <= alpha1.length; i++){
    
            if(alpha2.includes(arrayMsn[i])){
            let resultado = alpha2.findIndex(elemento => elemento == arrayMsn[i]);
            console.log(alpha1[resultado]);
            }
            else if (alpha1.includes(arrayMsn[i])){
                let resultado = alpha1.findIndex(elemento => elemento == arrayMsn[i]);
                console.log(alpha2[resultado]);     
            }
        }
    }
    else {
        console.log ( "ERROR: El mensaje ingresado no está en minúsculas, por favor vuelve a ingresarlo" )
    }
}
//Este es un ejercicio de refuerzo academico, NO constituye un metodo verdadero de encriptación//
