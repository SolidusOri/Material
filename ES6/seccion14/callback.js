/* callback, forma de hacer tareas a destiempo */

const getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Robinson',
        id
    };

    /* en este caso el callback espera a que llegue el usuario de base de datos */
    if (id === 20) {
        callback(`no existe el usuario con el id ${id}`);
    } else {
        callback(null, usuario);
    }
};

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});



/* ---------------------------------------------------- */