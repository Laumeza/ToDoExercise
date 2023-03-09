const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const userRoutes = require('./routes/user.routes');
const toDoRoutes = require('./routes/toDo.routes');

initModels();

const app = express();

app.use(cors());
app.use(morgan());
app.use(express.json());

const PORT = 1602;

db.authenticate()
    .then(() => {
        console.log('Base de Datos conectada');
    })
    .catch((error) => console.log(error));

db.sync({ alter: true }) // ? alter, permite alterar los atributos
    .then(() => {
        console.log('Base de datos sincronizada')
    })
    .catch((error) => console.log(error));

app.use(userRoutes);
app.use(toDoRoutes);

app.get('/', (req, res) =>{
    res.send('Welcome to my toDo API');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// - un endpoint para crear usuarios
// - un endpoint para que un usuario pueda crear tareas ( Cuando un usuario crea una tarea debe seleccionarse la categoria a la que esta pertenece)
// - un endpoint para obtener todas las tareas de un usuario incluidas sus categorias
// - un endpoint para que un usuario cambiar el status de una tarea (pendiente a completada) por defecto una tarea se crea con el status pendiente
// - un endpoint que permita eliminar tareas