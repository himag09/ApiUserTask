const db = require("../models");

// tarea sola
exports.getTask = (req, res) => {
    var id = parseInt(req.params.id)
    return db.Task.findOne({
        where: { id: id }
    })
        .then((user) => res.status(200).send(user))
        .catch(err => {
            res.status(500).send({ mensaje: err.message });
        });

}

// lista de tareas
exports.getTasks = (req, res) => {
    var id = req.userId
    // console.log(id);
    db.Task.findAll({
        where: { userId: id }
        // ,
        // include: [{
        //     model: db.Task
        // }]
    })
        .then((user) => res.status(200).send(user))
        .catch(err => {
            res.status(500).send({ mensaje: err.message });
        });
}
//  crear tarea
exports.taskCreate = (req, res) => {
    // var id = req.userId
    var errors = []
    if (!req.body.titulo) {
        errors.push("Titulo no especificado");
    }
    if (!req.body.descripcion) {
        errors.push("Descripcion no especificado");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    const data = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        userId: req.userId,
    }
    return db.Task.create(data)
        .then((task) => res.status(200).send(task))
        .catch((err) => {
            return res.status(400).send(err.message);
        })
}
// actualizar tarea
exports.taskEdit = (req, res) => {
    var id = parseInt(req.params.id)
    return db.Task.findOne({
        where: { id: id }
    })
        .then((task) => {
            if (!task) {
                return res.status(404).send({
                    message: 'Tarea no encontrada',
                });
            }
            const data = {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion
            }
            return task.update(data)
                .then(() => res.send(task))
                .catch((err) => {
                    res.status(400).send(err)
                })
        })
}
// eliminar tarea 
exports.taskDelete = (req, res) => {
    var id = parseInt(req.params.id)
    return db.Task.findByPk(id)
        .then((task) => task.destroy())
        .then(() => res.send({ id }))
        .catch((err) => {
            res.status(400).send(err)
        })
}
