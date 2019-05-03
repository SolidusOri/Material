/* Window es el objeto global en el navegador, en este quedaria la variable mensaje
 */
var mensaje = 'hola numdo';


/* let define el ambito de vida de la variable, en este caso aunque el flujo del programa entre al if la variable texto del if solo existe ahi, en ese scope
 */
let texto = 'hola';
if (true) {
    let texto = 'que tal';
}
console.log(texto);

/* Es buena practica que el nombre de la constante sea en mayuscula, esta debe inicializarse en el momento que se declara
 */
const IMPUESTO_SV = 15.25;

//nuevas funciones ES6 (startsWith(), endsWith(), includes())

var saludo = 'Hola Mundo';
//desde la posicion 0 corta 1
console.log(saludo.substr(0, 1) === 'h'); /* false */

/* Retorna true o false indicando si el string comienza con el string entregado por parametro, tambien admite un segundo argumento el cual seria el inicio para la validacion*/
console.log(saludo.startsWith('Ho'));
console.log(saludo.startsWith('Mun', 5));

/* Su contraparte seria endsWith que revisa si el strign termina con el string entregado por parametro, en este caso con el segundo argumento le digo cual es la posicion donde termina el string*/
console.log(saludo.endsWith('do'));
console.log(saludo.endsWith('la', 4));

/* En metodo includes nos permite saber si el string incluye el string entregado por parametro, similar al metodo indexOf pero este nos retorna un booleano, en este caso con el segundo armento seria la posicion de inicio para que comience a buscar*/
console.log(saludo.includes('la'));
console.log(saludo.includes('a', 5));

/* En ES6 se agrego la funcion repeat, lo que hace es retornar un string segun la cantidad de veces que se indica en el parametro*/
let palabra = 'hola';
console.log(palabra.repeat(2));
console.log('0'.repeat(10));

/**Utilidad */
const ESPACIOS = 12;
let nombres = ['Robinson', 'Denisse', 'Agata'];
let telefonos = [12478965, 78547555, 98634856];

//rellena con espacios el nombre hasta llegar a 12 caracteres
for (let i in nombres) {
    let diferencia = ESPACIOS - nombres[i].length;
    console.log(nombres[i] + " ".repeat(diferencia) + "|" + telefonos[i]);
}

let usuarios = [
    { 'nombre': 'Robinson', 'telefono': 43232133 },
    { 'nombre': 'Denisse', 'telefono': 34324323 },
    { 'nombre': 'Agata', 'telefono': 34244323 }
];

console.log(usuarios);
for (o in usuarios) {
    let diferencia = ESPACIOS - usuarios[o].nombre.length;
    console.log(usuarios[o].nombre + "/".repeat(diferencia));
}

/* Template literales (alt + 96),  */
let nombre = 'Maria';
let apellido = 'Perez';
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto2);

function dameNombre() {
    return 'Maria Perez'
}
//${codigo javascript valido}
let nombreCompleto3 = `El nombre completo es ${dameNombre()} ${1+2}`;
console.log(nombreCompleto3);

/* Con los templetes literales no rompemos el string con la mezcla de comillas simples y dobles como se ve en la clase el h1, el salto de linea es literal xd, este salto de linea es contado como caracter al ver el largo del string */
let multilinea = `<h1 class="algunaClase">titulo</h1>
<p>parrafo</p>
I'm robinson`;
console.log(multilinea);
/* -------------------------------------------------------------------- */




/* -------------------------------------------------------------------- */
/** Toda funcion en javascript retorna algo, y toda funcion aunque no tenga parametros explicitos siempre recibe algo, esto llega a un objeto llamado arguments */

//se puede renombrar lo que viene en el arguments
function etiqueta(literales, ...substituciones) {

    let resultado = '';

    //console.log(arguments);
    console.log(literales);
    console.log(substituciones);

    for (let i = 0; i < substituciones.length; i++) {
        resultado += literales[i] + substituciones[i];
        //resultado += substituciones[i];
    }

    return resultado;
}

let unidades = 5,
    costo_unitario = 10;

/* la funcion etiqueta(tags) evalua el templete literal y lo puede cambiar antes de la construccion del texto */
let mensaje2 = etiqueta `${unidades} uni. de lapices cuestan $${unidades*costo_unitario} pesos.`;

console.log(mensaje2);
/* --------------------------------------------------------------------- */




/* ------------------------------------------------------------------------- */
//valores en crudo en mensaje4

/* el valor en crudo muestra el texto tal cual como es, con todos los caracteres, en este caso el raw es un tags y solo funciona con los templetes literales*/
let mensaje3 = `hola \nmundo\\`;
let mensaje4 = String.raw `hola \nmundo\\`;

console.log(mensaje3);
console.log(mensaje4);
/* ------------------------------------------------------------------------- */




/* ------------------------------------------------------------------------- */
/* Parametros por defecto, opcionales */

/* en es6 se puede indicar un valor por defecto en caso de que el parametro no venga, estos parametros opcionales deben ir al final, esto parametros por defecto pueden ser funciones, objetos, etc, tanto explicitos como explicitos */
function saludos(mensaje = 'mensaje defecto', tiempo = 2000, fn = fnDefecto) {

    /* en ES5 habia que validar de estas formas */
    //mensaje = mensaje || 'Hola Mundo';
    //mensaje = (typeof mensaje !== 'undefined') ? mensaje : 'Hola Mundo';

    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);

    fn();
}

function fnDefecto() {
    console.log('Soy una funcion por defecto');
}

saludos();

/* arguments es afectado cuando las funciones tienen parametros opcionales, en este caso arguments es un arreglo vacio */
function sumar(a = 1, b = 2) {
    console.log(arguments);
}

sumar();