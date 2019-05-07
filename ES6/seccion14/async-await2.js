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

const getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No se encontro el empleado con el id ${id}`);
    } else {
        return empleadoDB; //resolve implicito
    }

};

const getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.idEmpleado === empleado.id);

    if (!salarioDB) {
        throw new Error(`El empleado ${empleado.nombre} no tiene un salario`);
    } else {
        return {
            idEmple: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
};

/* al tener el async esto retorna una promesa */
const getInformacion = async(id) => {

    const empleado = await getEmpleado(id);
    const resp = await getSalario(empleado);

    return `${empleado.nombre} tiene un salario de ${resp.salario}`;
}

/* en el then obtenemos la resolucion de la promesa */
getInformacion(1).then(console.log);