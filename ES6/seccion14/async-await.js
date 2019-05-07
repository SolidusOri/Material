/* Al poner la palabra async la funcion retorna una promesa */
/* const getNombre = async() => {
    return 'Robinson';
} */

/* aqui se puede ver como la funcion getNombre retorna una promesa que se puede manejar con el then */
/* getNombre().then(nombre => {
    console.log(nombre);
}); */



const getNombre = async() => {
    /* explicitamente retorno la promesa */
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Robinson');
        }, 3000);
    });
};

const saludo = async() => {
    /* el await solo puede ir acompañado del async, este ultimo puede ir solo */
    /* con await esperamos el resultado de la promesa para continuar la ejecucion del codigo */
    let nombre = await getNombre();
    return `Hola ${nombre}`;
};

saludo().then(mensaje => {
    console.log(mensaje);
});