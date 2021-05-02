const { authJwt } = require("../middleware");
const controller = require("../controllers/task.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // endpoint para lista de tareas
    app.get(
        "/api/task",
        [authJwt.verifyToken],
        controller.getTasks
    );

    // endpoint para una tarea
    app.get(
        "/api/task/:id",
        [authJwt.verifyToken],
        controller.getTask
    );

    // endpoint para crear una tarea 
    app.post(
        "/api/task/create",
        authJwt.verifyToken,
        controller.taskCreate
    );

    // endpoint para actualizar una tarea
    app.put(
        "/api/task/:id/edit",
        [authJwt.verifyToken],
        controller.taskEdit
    )

    // endpoint para eliminar una tarea
    app.delete(
        "/api/task/:id",
        [authJwt.verifyToken],
        controller.taskDelete
    )
};