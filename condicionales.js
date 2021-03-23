//Sesión 5 del Módulo 2
//Estructuras de control parte 2 - SWITCH

//Número que queremos separarlo en centenas, decenas y unidades
var numeroCompleto = 738;

//Condicional if que controla que el número ingresado esté entre 100 y 999
if( numeroCompleto <= 999 && numeroCompleto > 99){
  //Obtenemos primero las centenas al dividir el número original entre 100
  //Para que unicamente nos quedemos con el número que representa a las centenas,
  //utilizamos la instrucción "parseInt()" para quitar los decimales.
  var centenas = parseInt( numeroCompleto / 100 );
  var decenas = parseInt( (numeroCompleto % 100) / 10 );
  var unidades = (numeroCompleto % 100) - (decenas*10);
  console.log( "El valor final es: " + unidades + decenas + centenas );
}
//Si no se encuentra entre 100 y 999, devolverá un mensaje que nos dirá que debemos ingresar un número de 3 cifras
else{
    console.log( "Ingresa un número de 3 cifras" );
}


//Condicional Switch
//Utilizar un condicional switch, si el nombre de la variables conSwitch es "Luis",
//debemos usar un if para asegurarnos que sea mayor de edad ( tener 18 o más años )
//Si es mayor de edad, mostrar un mensaje que nos diga "Felicidades eres mayor de edad".

//Variable que guarda el nombre (Si lo deseas guarda tu propio nombre)
var conSwitch = "Luis";
//Variable que guarda el nombre de la persona
var edad = 18;

//Condicional Switch
switch( conSwitch ){
    //Según lo requerimos podemos poner los casos necesarios,
    //tomando en cuenta que dependiendo del valor dentro del 
    //switch será el resultado que obtendremos
    
    //El primer caso es si en vez de un nombre, guardamos un valor
    case 2:
        console.log( "El valor ingresado es: 2" );
        //Para salir del condicional switch y no ejecutar otro
        //código, utilizamos break.
        break;
    case 6:
        console.log( "El valor ingresado es: 6" );
        //Para salir del condicional switch y no ejecutar otro
        //código, utilizamos break.
        break;
    //En este caso, si tenemos el nombre "Luis", entrará en el bloque 
    //de código y verificará si la edad es igual o mayor a 18
    case "Luis":
        console.log( "Hola Luis" );
        //Utilizamos if para asegurarnos que su edad es mayor o igual a 18
        if( edad >= 18 ){
           console.log( "Felicidades eres mayor de edad" );     
        }
        //Para salir del condicional switch y no ejecutar otro
        //código, utilizamos break.
        break;
    default:
        //Mostramos un mensaje si el número no es correcto
        console.log( "El valor ingresado es distinto" );
        //Para salir del condicional switch y no ejecutar otro
        //código, utilizamos break.
        break;
}

// parseInt() 
var decimal = 8.23;
var string = "8";
var string2 = "2.45";
console.log(parseInt(decimal));
console.log(parseInt(string));
console.log(parseInt(string2));
