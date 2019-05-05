/* funciones de flecha en es6 */

var miFuncion1 = function(valor) {
    return valor;
}

let miFuncion2 = valor => valor;

console.log(miFuncion1(15));
console.log(miFuncion2(15));


var sumar1 = function(num1, num2){
    return num1 + num2;
}

let sumar2 = (num1, num2) => num1 + num2;

console.log(sumar1(15,15));
console.log(sumar2(15,15));


var saludar1 = function(){
    return 'hola';
}

let saludar2 = () => 'hola';

console.log(saludar1());
console.log(saludar2());


var saludarPersona1 = function(nombre){
    var saludo = 'hola, '+nombre;
    return saludo;
}

let saludarPersona2 = (nombre) => {
    let saludo = `hola, ${nombre}`;
    return saludo;
}

console.log(saludarPersona1('robinson'));
console.log(saludarPersona2('robinson'));


var obtenerLibro1 = function(id){
    return {
        id:id,
        nombre:'Harry Potter'
    }
}

let obtenerLibro2 = id => ({id:id, nombre:'Harry Potter'})

console.log(obtenerLibro1(15));
console.log(obtenerLibro2(15));


/* funciones anonimas de fecha */
/* es5 */
var salida1 = function(nombre){
    return 'hola '+nombre;
}('robinson');
console.log(salida1);

/* es6, debe ir si o si con parentesis */
let salida2 = (nombre => `hola ${nombre}`)('robinson');
console.log(salida2);


/* las funciones de fecha no tienen el obj arguments, lo que hacen es buscar en el contenedor mas cercano */

function ejemplo(x,y){
    /* funcion de fecha anonima */
    ((a,b) => {
        console.log(arguments[1]);
    })();
}

ejemplo(10,20);

