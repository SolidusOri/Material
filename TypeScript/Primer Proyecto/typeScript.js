"use strict";
function holaMundo(nombre) {
    return "hola mundo " + nombre;
}
var nombre = "Robinson Allendes";
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);
//Variables con tipado fuerte
var direccion = "villanova #1587";
var telefono = 999795037;
var lenguajes = ["Java", "JavaScript"];
etiqueta.innerHTML = direccion + " " + telefono + " " + lenguajes;
//Funciones con tipado fuerte
function devuleveString(texto) {
    return texto;
}
console.log(devuleveString("soy texto"));
//let y var
var a = 1;
var b = 2;
if (a == 1) {
    var a_1 = 5; //funciona dentro del ambito del if
    var b = 6;
    console.log(a_1 + " " + b);
}
console.log(a + " " + b);
