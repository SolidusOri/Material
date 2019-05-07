let empleados = [{
        id: 1,
        nombre: 'robinson'
    },
    {
        id: 2,
        nombre: 'denisse'
    },
    {
        id: 3,
        nombre: 'agata'
    }
];

let salarios = [{
        idEmpleado: 1,
        salario: 2000
    },
    {
        idEmpleado: 2,
        salario: 3000
    }
];

/* aqui ya no recibimos el callback */
const getEmpleado = (id) => {

    /* estas tienen una especie de callback implicitos que son el resolve(todo bien) y reject(hubo un error) */
    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el empleado con el id ${id}`);
        } else {
            /* en este caso ya no necesitamos mandar el null */
            resolve(empleadoDB);
        }

    });

};

const getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.idEmpleado === empleado.id);

        if (!salarioDB) {
            reject(`No existe un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                idEmple: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
};


/* getEmpleado retorna promesa */
getEmpleado(1).then(empleado => { //el then es el resolve que se ejecuta cuando todo salio bien
        getSalario(empleado).then(resp => {
            console.log(resp);
        });
    })
    .catch(err => { //el catch es el reject que se ejecuta cuando algo salio mal, este catsh recibe el reject de cualquier promesa que falle
        console.log(err);
    });


getEmpleado(2).then(empleado => {
        return getSalario(empleado); //getSalario retorna una promesa
    })
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    });


/* esto es lo mismo, pero esta mas dificil de leer */
getEmpleado(3)
    .then(getSalario)
    .then(console.log)
    .catch(console.log)