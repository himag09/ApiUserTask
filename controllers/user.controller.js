const db = require("../models");

exports.userBoard = (req, res) => {
    // id en token
    var id = req.userId
    console.log(id);

    db.User.findOne({
        where: { id: id }
    })
        .then((user) => res.status(200).send(user))
        .catch(err => {
            res.status(500).send({ mensaje: err.message });
        });
}