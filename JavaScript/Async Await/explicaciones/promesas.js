//promesas

function requestHandler(req, res) {
    //then solo recibe lo bueno
    User.findById(req.userId)
        .then(function(userBD) {
            //usamos return para realizar otra consulta a la base y manejarla con otra promesa
            return Tasks.findById(userBD.taskId);
        })
        .then(function(tasksBD) {
            tasksBD.completed = true;
            return tasksBD.save();
        })
        .then(function() {
            res.send('Tasks completed');
        })
        .catch(function(errs) {
            res.send(errs);
        })
}