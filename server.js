// express
const express = require('express');
const app = express();
const cors = require("cors");
// database
const db = require('./models');
//Sync Database
db.sequelize.sync().then(function () {
    console.log('Todo correcto')
}).catch(function (err) {
    console.log(err, "Error con la actualizacion de la bd")
});

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
//  middleware para analizar contenido de url 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// puerto del servidor
const HTTP_PORT = process.env.PORT || 8080;

// iniciar servidor 
app.listen(HTTP_PORT, () => {
    console.log(`Servidor corriendo en el puerto ${HTTP_PORT}`);
});

// root endpoint
app.get("/", (req, res, next) => {
    res.json({ "message": "OK" })
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/task.routes')(app);

// respuesta por defecto a otros request
app.use(function (req, res) {
    res.status(404);
})