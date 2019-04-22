let texto:string = "texto";
let numero:number = 123;
let boleano:boolean = true;
let hoy:Date = new Date('2018-11-09');

let cualquierDato:any;
cualquierDato = texto;
cualquierDato = numero;
cualquierDato = boleano;
cualquierDato = hoy;

let spiderman = { //objeto
    nombre: "Peter",
    edad: 25
};

//------template literales---------// ASCII (Alt + 96)
let nombre:string = "Robinson";
let apellido:string = "Allendes";
let edad:number = 29;

//texto = "Hola, "+nombre+" "+apellido+"("+edad+")"; //sin template literal

//con template literal
texto = `hola, 
${nombre} ${apellido}(${edad})`;//tambien se puede hacer una salto de linea

console.log(texto);



//-----parametros(obligatorios, opcionales o por defecto)-----//

function activar(quien:string, //parametro obligatorio(debe ir al principio)
                objeto:string="batiseñal", //parametro por defecto, se usara si no se envia
                momento?:string){ //parametro opcional, no podemos enviar el opcional sin enviar el por defecto o obligatorio primero
    let mensaje:string;

    if(momento){
        mensaje = `${quien} activó la ${objeto} en la ${momento}`;
    }else{
        mensaje = `${quien} activó la ${objeto}`;
    }
    
    console.log(mensaje);
}

activar("Gordon","alarma");


//-------funciones de fecha (ES6)-------//

let miFuncion = function(a:string){
    return a;
}

let miFuncionF = (a:string) => a;

let miFuncion2 = function(a:number, b:number){
    return a+b;
}

let miFuncion2F = (a:number, b:number) => a+b;

let miFuncion3 = function(nombre:string){
    nombre = nombre.toLocaleUpperCase();
    return nombre;
}

//funcion de fecha con mas de una linea de codigo
let miFuncion3F = (nombre:string) => {
    nombre = nombre.toLocaleUpperCase();
    return nombre;
}



let hulk = {//obj hulk
    nombre: "hulk",
    smash(){//funcion
        setTimeout( () => console.log(this.nombre+" smash!"), 1500);
        //el this. en una funcion de fecha no se ve afectado
    }
}

hulk.smash();


//---------Destructuracion-----------//
let avenger = {
    nombreA: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}

/*
let nombreA = avenger.nombreA;
let clave = avenger.clave;
let poder = avenger.poder;
*/

//se le puede dar una alias(seria como una variable) y puede no tener el mismo orden que las propiedades del obj
let {nombreA, clave:alias, poder} = avenger;

console.log(nombreA, alias, poder);

//destructuracion con arreglos
let avengers:string[] = ["Thor","Steve","Tony"];
//la destructuracion de un array debe ser secuencial, si solo se necesita algunos datos las demas posiciones del array deben indicarse con ,
let [thor, , ironman] = avengers;

console.log(thor, ironman);



//------Promesas ES6-------//
let promes1 = new Promise( function(resolve, reject){
    setTimeout(() => {
        console.log("Promesa Terminada");
        if(true){
            //termina bien
        resolve();
        }else{
            //termina mal
            //reject();
        }
    }, 1500);
});

//.then recibe 2 funciones como parametros(resolve, reject)
promes1.then(function(){
    console.log("Ejecutarme cuando se termine bien!");
}, function(){
    console.error("Ejecutarme cuando se termine mal!");
});
























