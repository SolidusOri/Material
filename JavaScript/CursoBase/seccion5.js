/* ------------------------------------------------------- */
/* while */
var i = 1;
while(i <= 10){
    /* el continue hace que se salte esa iteracion */
    if(i === 5){
        i++;
        continue;
    }
    /* el break termina el ciclo */
    if(i === 9){
        break;
    }
    console.log('hola', i);
    i++;
}

/* ------------------------------------------------------- */



/* ------------------------------------------------------- */
/* for */
var Persona = function(){
    this.nombre = 'Robinson'
    this.apellido = 'Allendes'
    this.edad = 30
}

var robin = new Persona();

Persona.prototype.direccion = 'Cerro Navia';

for(prop in robin){
    /* pregunta si la propiedad es un prototipo */
    if(!robin.hasOwnProperty(prop)){
        continue;
    }
    console.log(prop, ':', robin[prop]);
}

/* esto recupera el indice, no el valor */
for(index in [1,2,3,4,5,6,7,8,9,10]){
    console.log(index);
}

/* esto recupera el obj */
[1,2,3,4,5,6,true,false,9,10].forEach(function(value){
    console.log(value);
});
/* ------------------------------------------------------- */



/* ------------------------------------------------------- */
/* rotulacion de los ciclos */
for_principal:
for(var i=1; i<=5; i++){
    console.log('i',i);
    for_secundario:
    for(var j=1; j<=5; j++){
        console.log('j',j);
        for(var x=1; x<=5; x++){
            console.log('x',x);
            break for_principal;
        }
    }
}
/* ------------------------------------------------------- */



/* ------------------------------------------------------- */
/* funciones de tiempo */

/* funcion para realizar una accion despues de un tiempo indicado en milisegundos */
setTimeout(function(){
    console.log('pasaron 2 segundos');
}, 2000); /* timepo en milisegundos */


/* funcion para repetir una accion cada una cantidad de tiempo indicada en milisegundos */

var segundo = 0;

var intervalo = setInterval(function(){
    segundo++;
    console.log('segundo', segundo);

    /* si no se limpia el intervalo esto se realizara de forma infinita */
    if(segundo === 5){
        clearInterval(intervalo);
        console.log('se limpia el intervalo');
    }

}, 1000);
/* -------------------------------------------------------- */




/* -------------------------------------------------------- */























