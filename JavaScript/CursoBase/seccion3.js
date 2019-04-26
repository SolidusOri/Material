/* arreglos, los arreglos en java script no estan limitados a un tipo de dato, estos pueden tener string, numeros, objetos y funciones al mismo tiempo,en definitiva son arreglos de objetos */

var arr = [5, 4, 3, 2, 1]; //new Array(); es lo mismo
console.log(arr);
console.log(arr[0], arr[4]);

arr.reverse(); /* da vuelta el arreglo */
console.log(arr);

/*  recorre el arreglo y realiza una tarea en cada posicion*/
arr = arr.map(function(elem) {
    elem *= elem;
    return elem;
});
console.log(arr);

/* implicitamente mandamos el parametro a sqrt */
arr = arr.map(Math.sqrt);
console.log(arr);

/* hace un string con el arreglo separado por defecto por coma si no se indica un parametro  */
arr = arr.join("|");
console.log(arr);

arr = arr.split("|"); /* regresa un arreglo separando un string por el parametro */
console.log(arr);

/* ingresa un valor en la ultima posicion del arreglo */
arr.push("6");
console.log(arr);

/* ingresa un valor en la primera posicion del arreglo */
arr.unshift("0");
console.log(arr);

/* pone la representacion textual del arrglo, lo separa por comas, es similar al join, este es mas rapido */
console.log(arr.toString());

/* elimina el ultimo elemento del arreglo y regresa el elemento */
var elimine = arr.pop();
console.log(arr, elimine);

/* 1er parametro, posicion en la queremos trabajar */
/* 2do parametro, cantidad a eliminar, 0 en caso de no querer eliminar */
/* 3ra a N parametros, ingresa valores al arreglo */
arr.splice(1, 1, "10", "20"); /* esta eliminando y ingresando al mismo tiempo */
console.log(arr);

/* tajada, es como una cortada de pastel */
/* la primera posicion es desde donde quiero cortar y la segunda hasta donde quiero cortar sin incluir ese numero, no es la cantidad, si las posiciones son iguales retorna un arreglo vacio */
arr = arr.slice(1, 3);
console.log(arr);


var array = [
    true,
    {
        nombre: 'Robinson',
        apellido: 'Allendes'
    },
    function() {
        console.log('Vivo en un arreglo');
    },
    function(persona) {
        console.log(persona.nombre);
    },
    [
        "Robinson",
        "Denisse",
        "Agata", [
            "Juan",
            "Pedro",
            function() {
                console.log(this);
            }
        ]
    ]
];

console.log(array);
console.log(array[1].nombre + " " + array[1].apellido);
array[2](); /*en esta posicion hay una funcion y la puedo ejecutar con ()*/
array[3](array[1]); /* ejecutamosla funcion mandando como parametro un objeto que esta en la posicion 1 del arreglo */
console.log(array[4][2]); /* la posicion 4 retorna un arreglo */
console.log(array[4][3][0]); /* aqui pasa lo mismo */

var array2 = array[4][3]; /* trabajamos con la referencia */
array2[1] = "Pedra!!";
console.log(array2);
console.log(array);

array2[2](); /* al ejecutar esta funcion this retorna o apunta al mismo arreglo */

/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/* argumentos, esto es un prototipo y viene siempre como parametro en todas funciones, es un arreglo que se llena con los parametros indicados cuando se invoca la funcion */

function miFuncion() {
    /* aqui podemos validar los parametros usando el obj arguments */
    console.log(arguments.length > 5);
    console.log(arguments);
}

miFuncion(10, 20, 30, 40);
/* ------------------------------------------------------------------------- */




/* ------------------------------------------------------------------------- */
/*  sobrecarga de operadores, (es la creacion de varias funciones con el mismo nombre pero con diferentes parametros)*/
function crearProducto(nombre, precio) {
    nombre = nombre || 'sin nombre';
    precio = precio || 0;
    console.log('Producto: ', nombre, precio);
}

function crearProducto100(nombre) {
    crearProducto(nombre, 100);
}

function crearProductoCamisa(precio) {
    crearProducto('Camisa', precio);
}

crearProducto();
crearProducto('Lapiz');
crearProducto(100); /* esto no sirve, los 100 se van al parametro nombre */

crearProducto100('Corrector');
crearProductoCamisa(150);
/* ----------------------------------------------------------------------- */




/* ----------------------------------------------------------------------- */
/* polimorfismo */
function determinaDato(a) {
    if (a === undefined) {
        console.log('A es undefined... no se que hacer');
    } else if (typeof a === 'number') {
        console.log('A es un numero');
    } else if (typeof a === 'string') {
        console.log('A es un texto');
    } else if (typeof a === 'object') {
        console.log('A es un objeto.. pero puede ser cualquier cosa');
        if (a instanceof Number) {
            console.log('A es un objeto numero');
        }
    }
}

var b = new Number(3);
determinaDato(b);
/* --------------------------------------------------------------------- */




/* --------------------------------------------------------------------- */
/* Cuidado con el contexto de las funciones */
function crearFunciones() {
    var lista = [];
    var num = 1;

    for (var num = 1; num <= 5; num++) {
        lista.push(
            /* function anonima que se ejecuta en el momento */
            (function(num) {
                return function() {
                    console.log(num);
                }
            })(num)
        );
    }

    return lista;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]();
funciones[4]();
/* --------------------------------------------------------------------- */




/* --------------------------------------------------------------------- */
/* obj Number */
var a = 10;
var b = new Number(10);
console.log(a === b); /* comparo valor y obj */
console.log(a == b); /* comparo solo valor */

a = 10.456789;
console.log(a.toFixed(2)); /* 10.46 */

console.log(a.toString()); /* valor textual de a */

console.log(a.toPrecision(4));

/* ----------------------------------------------------------------------- */




/* ----------------------------------------------------------------------- */
/* Boolean */

var x = true;
var y = false;

/* al no indicar un valor como parametro el boolean se inicia en false, si indicamos un texto este se inicia como true, 1 es true 0 es false */
var z = new Boolean(); /* esto es false */

if (z) {
    console.log("Hola");
}

/* hay que tener cuidado con esto porque el onj z al no revibir parametro es un objeto boolean con un valor primitivo de false, al poner la z en el if lo que se evalua es que si z es un objeto, no se esta evaluando el valor primitivo del obj z para evaluar el valor esta el z.valueOf() */
/* ------------------------------------------------------------------------ */




/* ------------------------------------------------------------------------ */
/* obj string */
var nomMujer = 'juana';
var miNom = new String('Robinson Allendes');
console.log(miNom); /* este obj tiene propiedades con la posicion y el valor de cada caracter del texto */

console.log(miNom.toUpperCase());
console.log(miNom.toLowerCase());

/* el parametro es un string no un caracter, se puede poner una palabra */
var i = miNom.indexOf('o'); /* regresa la posicion de la primera o del texto */
console.log(i);
i = miNom.lastIndexOf('o');
console.log(i); /* regresa la posicion de la ultima o del texto */

var nombre = miNom.substr(0, miNom.indexOf(' ')); /* corta hasta el espacio */
console.log(nombre);

var split = miNom.split(' '); /* al no indicar parametro crea un arreglo con el texto */
console.log(split);
console.log(split.length);
/* ------------------------------------------------------------------------- */




/* ------------------------------------------------------------------------- */
/* Obj Date */
var g = new Date(); /* fecha actual */
var h = new Date(); /* constructor de fecha en milisegundos */
var j = new Date(1988, 10, 15, 23, 59, 59, 999); /* define la fecha completa */


var e = new Date().getTime();

for (var m = 0; m < 10; m++) {
    console.log('Hola');
}

var f = new Date().getTime();

var time = f - e;
console.log('tiempo en milisegundos ', time);
console.log('tiempo en segundos ', time / 1000);

console.log(j.getFullYear());
console.log(j.getTime());


/* manejo de fechas, sumas, restas */
var fecha = new Date(2019, 3, 26);
console.log(fecha);

/* set dias, esta para los demas, si no pasamos en los dias del mes pasa al siguiente mes */
fecha.setDate(10);
console.log(fecha);

/* modificamos el prototipo , creamos un proto*/
Date.prototype.sumarDias = function(dias) {
    this.setDate(this.getDate() + dias);
    return this;
}

console.log(fecha);
console.log(fecha.sumarDias(10)); /* este prototipo sumaria los dias */

/* ---------------------------------------------------------------------- */




/* ---------------------------------------------------------------------- */
/* Math */

/* en javascript no hay constantes */
var PI = Math.PI;

console.log(PI);

var num1 = 10.456789;
console.log(num1);

/* se podria crear un prototipo para esto */
console.log(Math.round(num1 * 100) / 100); /* num1 * 100 para obtener los 2 decimales, en javascript el raound solo recibe el numero a redondear, dividido por 100 para tener el valor con decimal */

console.log(Math.floor(num1)); /* quita todos los decimales */

function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomEntre(5, 10)); /* esto popria ser un protoripo */

console.log(Math.sqrt(4)); /* raiz cuadrada */

console.log(Math.pow(5, 3)); /* 5*5*5 */

/* ----------------------------------------------------------------------- */



/* ----------------------------------------------------------------------- */
/* expleciones regulares */