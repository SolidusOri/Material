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
    numero: 10,
    texto: 'nuevo texto',
    objHijo: {
        numero2: 20,
        texto2: 'nuevo texto 2'
    }
};
/* -------------------------------------------------------------- */



/* -------------------------------------------------------------- */
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

/* uso de la referencia al obj en memoria, de esta forma es mas claro el codigo, en este caso la variable edificio hace referencia al mismo espacio de memoria */
var edificio = persona.direccion.edificio;
edificio.piso = 11;
console.log(persona);

/* notacion de [] , esto nos puede servir para usar el campo como parametro*/
var campo = 'edad';
console.log(persona[campo]);
/* ------------------------------------------------------------- */



/* ------------------------------------------------------------- */
/* funciones, todas funciones retornan algo en javascript, las funciones son objetos, una  buena practica es que las funciones vayan en el principio del codigo */
var a = 30;

function primeraFuncion() {
    //var a = 20;
    console.log(a);
}

/* esto mostraria 30 en consola, al invocar la funcion javascript busca a en el ambito de la funcione, si no la encuentra busca a en el obj global */
primeraFuncion();

/* al hacer esto obtenemos el contenido de la funcion, obtenemos el objeto */
var miFuncion = primeraFuncion;
console.log(miFuncion);
miFuncion();

/* pamametros, pueden ser objetos, variables primitivas, otras funciones */
function imprimir(nombre, apellido) {
    /* de esta forma pordemos comprobar si se esta recibiendo un valor para apellido */
    apellido = apellido || 'xxx';
    console.log(nombre + " " + apellido);
}
/* variable anonima es aquella que no esta explicitamente en el codigo, en este caso 'juan' */
/* como solo estamos mandando el nombre lo que saldra por consola sera undefined, esto porque al crear la funcion javascript crea la variable apellido y le asigna el valor de undefined  */
imprimir('juan');
imprimir('juan', 'Perez');


/* aqui se puede ver como el parametro que es un variable hace referencia al mismo objeto creado */
function imprimir2(parametro) {
    console.log(parametro.nombre + " " + parametro.apellido);
    parametro.nombre = 'pedro';
}

var per = {
    nombre: 'maria',
    apellido: 'perez'
}

imprimir2(per);
/* aqui se ve afectado el objeto 'per' porque se modifico su propiedad nombre dentro de la funcion, esto porque la variable 'parametro' hace referencia al mismo espacio de memoria, para evitar esto tendriamos que crear variable locales para las propiedades dentro de las funcione*/
console.log(per);


/* funcion como parametro, esto es un obj */
function imprimir3(fn) {
    fn();
}

imprimir3(function() {
    console.log('funcion anonima');
});

/* retorno de las funciones, estas siempre retornan algo*/
function obtenerAleatorio() {
    return Math.random(); /* retorna un numero entre 0 y 1 sin contar el 1 */
}

function obtenerNombre() {
    return 'Juan';
}

function obtenerBolean() {
    if (obtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

if (obtenerBolean()) {
    console.log('Es mayor que 0.5');
} else {
    console.log('Es menor que 0.5');
}

function crearPersona(nombre, apellido) {
    /* retorno anonimo */
    return {
        nombre: nombre,
        apellido: apellido
    };
}

var obj2 = crearPersona('Robinson', 'Allendes');
console.log(obj2);


function crearFuncion() {
    return function(autor) {
        console.log('Me crearon: ' + autor);
        return function() {
            console.log('Segunda funcion');
        }
    }
}

var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion('Robinson');
segundaFuncion();


/* las funciones son objetos, le podemos agregar propiedades y  tambien metodos */
function x() {
    console.log('Funcion X');
}

x();

x.nombre = 'Pedro';
x.direccion = {
    pais: 'Chile',
    ciudad: 'Santiago',
    edificio: {
        piso: '8vo',
        nombre: 'Principal'
    }
};

console.log(x.direccion.edificio.piso);

/* ------------------------------------------------------------- */



/* ------------------------------------------------------------- */
/* this */
var user = {
    nombre: 'robinson',
    apellido: 'allendes',
    imprimir: function() {
        console.log(this);
    },
    direccion: {
        pais: 'chile',
        obtenerPais: function() {
            console.log(this);
            var self = this;
            var nuevaDireccion = function() {
                /* este this es window, si queremos tener acceso al pais debemos crear una variable fuera donde indicaremos la referencia al this */
                console.log(this);
                console.log('La direccion es en ' + self.pais);
            }
            nuevaDireccion();
        }
    }
};

user.imprimir();
user.direccion.obtenerPais();
/* ------------------------------------------------------------- */



/* ------------------------------------------------------------- */
/* palabra new */
var juan = {};
console.log(juan);

/* la mayuscula simula que esto es una clase */
function Persona() {
    this.nombre = 'Robinson';
    this.apellido = 'Allendes';
    this.edad = 30;
    this.imprimirPersona = function() {
        return this.nombre + " " + this.apellido + "(" + this.edad + ")";
    }
}

/* esto simula una clase, pero no lo es, estamos invocando la funcion Persona */
var pablo = new Persona();
console.log(pablo);
console.log(pablo.imprimirPersona());
/* ------------------------------------------------------------------- */



/* ------------------------------------------------------------------- */
/* rpg */
function Jugador(nombre) {
    this.nombre = nombre;
    this.hp = 100;
    this.mp = 100;

    this.curar = function(objetivo) {
        if (this.mp >= 40) {
            this.mp -= 40;
            objetivo.hp += 20;
        } else {
            console.info(this.nombre + "no tiene mp");
        }
        this.estado(objetivo);
    }

    this.golpe = function(objetivo) {
        if (objetivo.hp > 40) {
            objetivo.hp -= 40;
        } else {
            objetivo.hp = 0;
            console.error(objetivo.nombre + " murio!!");
        }
        this.estado(objetivo);
    }

    this.estado = function(objetivo) {
        console.info(this);
        console.info(objetivo);
    }

}

var cloud = new Jugador('Cloud');
var sefirof = new Jugador('Sefirof');

console.log(cloud);
console.log(sefirof);

sefirof.golpe(cloud);
/* ------------------------------------------------------------------ */



/* ------------------------------------------------------------------ */
/* prototypos, son funciones o propiedades que commparten los objetos de un tipo, por ejemplo si tengo 1000 objetos de tipo persona en memoria podria crear el prototype imprimirInfo la cuel es una funcion, esta solo esta una vez en memoria y no en cada uno de mis objetos persona */
function Musico() {
    this.nombre = "Robinson";
    this.edad = 30;
}

Musico.prototype.imprimirInfo = function() {
    console.log(this.nombre + "(" + this.edad + ")");
}

var robinson = new Musico();
robinson.imprimirInfo();
/* ------------------------------------------------------------------ */



/* ------------------------------------------------------------------ */
/* funciones anonimas */
(function() {
    var y = 10;
    console.log(y);

    function cambiarValor() {
        y = 20;
    }
    cambiarValor();
    console.log(y);
})();
/* aqui al final invovamos a la funcion con (), al hacer esto la variable y ya no se encuentra en el objeto global window */

/* ejemplo */
function ejecutarFuncion(fn) {
    if (fn() === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(
    ejecutarFuncion(function() {
        console.log('Funcion anonima ejecutada');
        return 1;
    })
);
/* la funcion ejecutarFuncion recibe una funcion por parametro, la funcion que se recibe por parametro es anonima, esta a su vez retorna 1, este retorno es evaluado por el if haciendo que a su vez la funcion ejecutarFuncion retorne true o false */
/* ----------------------------------------------------------------- */



/* ----------------------------------------------------------------- */
/* tyoeOf me dice de que tipo es, instanceOf me sirve para comparar objetos retornando true o false */
function identifica(param) {
    if (typeof param == "function") {
        param();
    } else {
        console.log(param instanceof Deportista);
        console.log(param);
    }
}

function Deportista() {

}
var nico = new Deportista();

identifica(function() { console.log('soy anonima'); });
identifica({});
identifica(nico);
identifica(1);
identifica('1');

/* ejemplo */
function Player() {
    nom : 'robin'
}

var yo = new Player();

console.log(yo instanceof Player);
console.log(typeof yo == "object");