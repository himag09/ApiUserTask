const db = require("../models");
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// registro
exports.signup = (req, res) => {
    
    // Save User to Database
    var errors = []
    if (!req.body.email) {
        errors.push("Email no especificado");
    }
    if (!req.body.nombre) {
        errors.push("Nombre no especificado");
    }
    if (!req.body.password) {
        errors.push("Password no especificado");
    }
    if (!req.body.celular) {
        errors.push("Celular no especificado");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    db.User.create({
        nombre: req.body.nombre,
        celular: req.body.celular,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then((user) => res.status(200).send(user))
        .catch(err => {
            res.status(500).send({ mensaje: err.message });
        });
};
// login
exports.signin = (req, res) => {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ mensaje: "Usiario no encontrado." });
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Contraseña incorrecta"
                });
            }
            // firmar token
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 horas
            });
            res.status(200).send({
                id: user.id,
                nombre: user.nombre,
                celular: user.celular,
                email: user.email,
                accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};