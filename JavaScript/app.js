
/* undefind a nivel de obj no es lo mismo que null, esto lo podemos revisar con el ===, este operador iguala a nivel de obj, si hacemos esta comparacion el resultado sera false */

/* Ctrl + z   activa el ajuste del texto a la ventana */

/* javaScript es sincrono, debe terminar de ejecutar una tarea para comenzar otra, las tareas o funciones caen a un stack o pila de tareas donde esperan a que el motor de javascript termine la tarea que esta ejecutando */

/* tipos primitivos */
var num = 10;
var str = 'texto';
var bol = true;
var und = undefined;
var nul = null;
/* en javascript hacer esto es valido */
num = str;
console.log(num);

/* objects */
var obj = {
    numero:10,
    texto:'nuevo texto',
    objHijo:{
        numero2:20,
        texto2:'nuevo texto 2'
    }
};

/* notacion de . y referencia a los objetos */
var persona = {
    nombre: 'robinson',
    apellido: 'allendes',
    edad: 30,
    direccion: {
        pais: 'chile',
        ciudad: 'santiago',
        edificio: {
            nombre: 'edificio principal',
            ubicacion: 'av. london 8294'
        }
    }
};
/* agregamos una propiedad */
persona.direccion.zipcode = 55561;
console.log(persona.direccion.zipcode);

/* uso de la referencia al obj en memoria, de esta forma es mas claro el codigo */
var edificio = persona.direccion.edificio;
edificio.piso = 11;
console.log(persona);

/* notacion de [] , esto nos puede servir para usar el campo como parametro*/
var campo = 'edad';
console.log(persona[campo]);





