var Jugador = function(nombre, pais, edad, altura, peso, manoDiestra, tipoJugador, ranking, potenciaDiestra, potenciaReves, presicionDiestra, presicionReves, saque, juegoMalla, pelotasCortas, remate, carrera){
    this.nombre = nombre;
    this.pais = pais;
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
    this.manoDiestra = manoDiestra;
    this.tipoJugador = tipoJugador;
    this.ranking = ranking;
    this.puntosHabilidad = 30; /* puntos a repartir */
    this.potenciaDiestra = potenciaDiestra;
    this.potenciaReves = potenciaReves;
    this.presicionDiestra = presicionDiestra;
    this.presicionReves = presicionReves;
    this.saque = saque;
    this.juegoMalla = juegoMalla;
    this.pelotasCortas = pelotasCortas;
    this.remate = remate;
    this.carrera = carrera;
}

Jugador.prototype.ficha = function(){
    console.log('Ficha tecnica:');
    for(pro in this){
        if(!this.hasOwnProperty(pro)){
            continue;
        }
        console.log(pro, ':', this[pro]);
    }
}

function crearJugador(){
    var player = new Jugador();

    player.nombre = prompt('Indica un nombre');
    player.pais = prompt('Indica tu Pais');
    player.edad = prompt('Indica tu Edad');
    player.altura = prompt('Indica tu Altura');
    player.peso = prompt('Indica tu Peso');
    player.manoDiestra = prompt('Indica tu Mano Diestra');
    player.tipoJugador = prompt('Indica tu tipo de Juego (Fondo o Malla)');
    
    return player;
}

function asignaPuntosHabilidad(jugador){
    var entrada = 0;
    var continuar = true;
    var puntos = 0;
    if(jugador.puntosHabilidad > 0){
        do{
            entrada = prompt('Tienes '+jugador.puntosHabilidad+' puntos de habilidad disponibles para asignar\nIndica el numero de la opción:\n1 - Potencia Mano Diestra 2 - Potencia Reves\n3 - Presicion Mano Diestra 4 - Presicion Reves\n5 - Tiro de Saque 6 - Juego cerca de la Malla\n7 - Pelotas Cortas 8 - Remate\n9 - Carrera (Velocidad)');
            puntos = prompt('Indica la cantidad de puntos a asignar');
            
            switch(entrada){
                case 1 : 
                jugador.potenciaDiestra += puntos;
                jugador.puntosHabilidad = jugador.puntosHabilidad - puntos;
                break;
            }
            continuar = prompt('Deseas seguir asignando puntos? si/no') === 'si'? true : false;
        } while(continuar);
    }else{
        console.log('No tienes puntos disponibles para asignar');
    }
}


var jugador1 = new Jugador();

