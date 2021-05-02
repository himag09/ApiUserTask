const { verificarRegistro } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    // endpoint para registro
    app.post(
        "/api/auth/signup",
        [
            verificarRegistro.checkEmailDuplicado
        ],
        controller.signup
    );
    
    // endpoint para loguearse
    app.post("/api/auth/signin", controller.signin);
};