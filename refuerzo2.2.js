const prompt = require("prompt-sync")();
const alpha1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
const alpha2 = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var choise = prompt("1 Encriptar | 2 Desencriptar : ")


if(choise == 1){
    encryp();
} else if(choise == 2){
    desencryp();
}



function encryp(){ 
    var msn = prompt("Ingresa el mensaje a encriptar: ");
    const arrayMsn =[...msn.toUpperCase()];
    for(var i = 0; i <= alpha1.length; i++){
  
        if(alpha1.includes(arrayMsn[i])){
        let resultado = alpha1.findIndex(elemento => elemento == arrayMsn[i]);
        console.log(alpha2[resultado]);
        }
        else if (alpha2.includes(arrayMsn[i])){
            let resultado = alpha2.findIndex(elemento => elemento == arrayMsn[i]);
            console.log(alpha1[resultado]);     
        }
    }
};
function desencryp(){
    var msn = prompt("Ingresa el mensaje a Desencriptar: ");
    const arrayMsn =[...msn.toUpperCase()]; 
    
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
