//requestHandler, manejador de peticiones
//req, request - peticion del usuario
//res, response - respuesta del servidor

/**El codigo en nodeJS es asincrono, este no espera a que 
 * las instrucciones o metodos terminen */

//callbacks, esto es dificil de mantener
function requestHandler(req, res) {
    /*El segundo parametro es un callback, el cual
    espera por la respuesta y nos devuelve un err o en
    este caso un usuario de bd*/
    User.findById(req.userId, function(err, user) {
        if (err) {
            return res.send(err);
        } else {
            Tasks.findById(user.taskId, function(err, tasks) {
                if (err) {
                    return res.send(err);
                } else {
                    //es importante ver la documentacion para saber que nos devuelve cada funcion, en este caso save
                    tasks.completed = true;
                    tasks.save(function(err) {
                        if (err) {
                            return res.send(err);
                        } else {
                            return res.send('Task Completed');
                        }
                    });
                }
            });
        }
    });
}