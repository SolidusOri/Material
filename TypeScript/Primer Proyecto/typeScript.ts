
function holaMundo(nombre:string) {
    return "hola mundo "+nombre;
}

var nombre = "Robinson Allendes";

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);

//Variables con tipado fuerte
var direccion:string = "villanova #1587";
var telefono:number = 999795037;
var lenguajes:Array<string> = ["Java","JavaScript"];
etiqueta.innerHTML = direccion+" "+telefono+" "+lenguajes;

//Funciones con tipado fuerte
function devuleveString(texto:string):string{
    return texto;
}
console.log(devuleveString("soy texto"));

//let y var
var a = 1;
var b = 2;
if(a == 1){
    let a = 5; //funciona dentro del ambito del if
    var b = 6;
    console.log(a+" "+b);
}
console.log(a+" "+b);
