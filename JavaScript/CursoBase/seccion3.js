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