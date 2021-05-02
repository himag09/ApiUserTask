const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "Token no proporcionado"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "No tienes autorización"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken: verifyToken,

};
module.exports = authJwt;