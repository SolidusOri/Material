/* Problemas con los callbacks */

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

const getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe el empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

const getSalario = (empleado, callback) => {
    let respDB = salarios.find(salario => salario.idEmpleado === empleado.id);

    if (!respDB) {
        callback(`No existe un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            idEmple: empleado.id,
            nombre: empleado.nombre,
            salario: respDB.salario
        });
    }
};


/* Este es el problema de los callbacks, aqui la peticion se puede complicar aun mas, haciendo que el codigo se idente cada vez mas adentro, complicando mas la lectura */
getEmpleado(1, (err, empleado) => {

    if (err) { return console.log(err); }

    getSalario(empleado, (err, resp) => {

        if (err) { return console.log(err); }

        console.log(`El empleado ${resp.nombre} tiene un salario de ${resp.salario}`);

    });

});