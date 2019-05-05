/* -------------------------------------------------------- */
/* Parametros por defecto, opcionales */

/* en es6 se puede indicar un valor por defecto en caso de que el parametro no venga, estos parametros opcionales deben ir al final, estos parametros por defecto pueden ser funciones, objetos, etc, tanto explicitos como explicitos */
function saludo(mensaje = 'mensaje defecto', tiempo = 2000, fn = fnDefecto) {

    /* en ES5 habia que validar de estas formas si venia el parametro*/
    //mensaje = mensaje || 'Hola Mundo';
    //mensaje = (typeof mensaje !== 'undefined') ? mensaje : 'Hola Mundo';

    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);

    fn();
}

//saludo();

function fnDefecto() {
    console.log('Soy una funcion por defecto');
}

/* arguments es afectado cuando las funciones tienen parametros opcionales, en este caso arguments es un arreglo vacio */
function sumar(a = 1, b = 2) {
    console.log(arguments);
}

sumar();
/* ---------------------------------------------------------------- */




/* ---------------------------------------------------------------- */
/* parametro rest - resto, este siempre debe ser el ultimo parametro y solo puede ser uno por funcion, este se recibe como un arreglo y al invocar la funcion se le puede enviar muchos parametros opcionales */

function agregarAlumnos(arreglo, ...otros){
    /* ES6 */
    console.log('arreglo', arreglo);
    console.log('otros', otros);
    for(let i=0; i<otros.length; i++){
        arreglo.push(otros[i]);
    }
    return arreglo;

    /* ES5 */
    /* console.log(arguments);
    for(var i=1; i<arguments.length; i++){
        arguments[0].push(arguments[i]);
    }
    return arguments[0]; */
}

let arr = ['robinson'];
let arr_2 = agregarAlumnos(arr, 'denisse', 'agata', 'otro');
/* denisse, agata y otro son el parametro ...otros como arreglo */

console.log('retorno funcion', arr_2);
/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */
/* parametro spread, permite indicar un arreglo que sera separado y cada item enviado sera un argumento indeéndiente a la funcion */

let numeros = [0,2,3,9,6,40,20,300];

let max = Math.max(...numeros);

console.log(max);

/* otro uso para el spread */
/* en javascript todos los onjetos son pasados por referencia, esto se puede ser en el sigueinte caso */
let persona1 = {
    nombre: 'robinson',
    edad : 30
}

/* con spread hacemos que cada propiedad del obj persona1 se pase y cree un nuevo obj que seria persona2  */
//let persona2 = persona1;
let persona2 = {...persona1};

/* al hacer esto esperamos que solo cambie el nombre del obj persona2, pero esto obj apunta a la mismo espacio de memoria que el obj persona1, es decir son el mismo obj, una forma de hacer que este sea otro obj es con spread */
persona2.nombre = 'denisse';

console.log(persona1);
console.log(persona2);

/* tambien podriamos copiar propiedades de otros obj de esta forma*/
let obj1 = {
    nombre: 'juan'
};

let obj2 = {
    nombre: 'teresa',
    direccion: 'direcc',
    edad: 20
};

obj1 = {
    ...obj2,
    ...obj1
}

console.log(obj2);
console.log(obj1);
/* --------------------------------------------------------------- */



/* --------------------------------------------------------------- */
/* en ES5 las funciones se pueden llamar con new y sin el, cuando se usa el new la funcion con el this se retorna a si misma, pero cuando se hace sin el new retorna undefined, en este ejemplo se puede ver */
function Persona(nombre){
    this.nombre = nombre;
}

let per1 = new Persona('Robinson');
let per2 = Persona('Denisse');

console.log('Persona con new', per1);
console.log('Persona sin new', per2);

/* en ES6 esto se puede resolver validando con el new.target dentro se la funcion si se llamo con el new o sin el, de la siguiente forma */
function Jugador(nombre){
    if(typeof new.target !== 'undefined'){
        this.nombre = nombre;
    }else{
        throw new Error('Esta funcion debe ser llamada con la palabra new');
    }
}

let jug1 = new Jugador('Robinson');
let jug = Jugador.call(jug1, 'Denisse');




























