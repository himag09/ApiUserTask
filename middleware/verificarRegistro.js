const db = require("../models");
const User = db.user;

checkEmailDuplicado = (req, res, next) => {
    // Email
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Error! Email ya está en uso"
        });
        return;
      }
      next();
    });
};


const verificarRegistro = {
    checkEmailDuplicado: checkEmailDuplicado
};

module.exports = verificarRegistro;