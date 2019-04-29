/* -------------------------------------------------------- */
/* manejo de errores */
try{
    console.log('hola');
    /* dispara un error y fuerzo el catch */
    throw 'que mal';
}catch(e){
    console.log('Error de catch', e);
}finally{
    console.log('El finally siempre se realiza');   
}

try {
    /* en el throw se pueden enviar lo que sea obj, funciones, etc */
    throw new Error('Error tipo 1');
    console.log('Esta parte nunca se ejecuta');
} catch (error) {
    console.log(error.message);
}


try {
    throw function(){
        console.log('funcion anonima');
    }
    console.log('Esta parte nunca se ejecuta');
} catch (error) {
    error();
}

try {
    throw 1; /* n numero */
} catch (e) {
    registroError(e);
}

function registroError(e){
    var ahora = new Date();
    console.log('Se registro un error tipo:', e, 'a las:', ahora.getTime());
}
/* -------------------------------------------------------- */



/* -------------------------------------------------------- */
/* prototipo Bind() de una funcion */

var carro = {
    modelo:'corsa',
    marca:'chevrolet',
    color:'azul',
    imprimir:function(){
        return this.marca + '-' + this.modelo;
    }
}

console.log(carro.imprimir());

var logCarro = function(arg1, arg2){
    /* este this apunta a window, aqui no estaria la funcion imprimir */
    console.log('Carro:', this.imprimir());
    console.log('Arguments:', arg1, arg2);
}

/* con el bind cambiamos o setiamos a donde apunta el this, en este caso de indicamos que apunte al obj carro */
var nuevaFuncion = logCarro.bind(carro);

nuevaFuncion(1, 2);
/* -------------------------------------------------------- */



/* -------------------------------------------------------- */
/* if en una linea */

var a = 10, b = 20;

/* esto es una desicion en una linea */
var d = (a > b)? a : b;

/* tambien podemos hacer esto, con los () al final de la funcion la estamos invocando en el momento y d recibe el return de la funcion*/
var c = (a > b)? function(){
    console.log('A es mayor a B');
    return a;
}(): function(){
    console.log('B es mayor a A');
    return b;
}();

console.log(c);
/* -------------------------------------------------------- */



/* -------------------------------------------------------- */
/* switch */
var mes = 1;

switch(mes){
    /* aqui se pueden poner funiones igual que retornen el valor a evaluar */
    case (5>1)? 1 :40 :
        console.log('Enero');
        break;
    case 2 :
        console.log('Febrero');
        break;
    default:
        console.log('Otro mes');
}
/* -------------------------------------------------------- */



/* -------------------------------------------------------- */


























