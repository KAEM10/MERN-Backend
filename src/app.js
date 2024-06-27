// Importa la biblioteca express para crear el servidor web
const express = require('express');
// Importa la biblioteca cors para permitir solicitudes entre diferentes dominios
const cors = require('cors');
// Crea una instancia de la aplicación express
const app = express();

// Configuraciones
// Establece el puerto en el que el servidor escuchará las solicitudes. 
// Utiliza el puerto definido en la variable de entorno PORT o, en su defecto, 
// el puerto 4000
app.set('port', process.env.PORT || 4000);

// Middlewares
// Habilita CORS para permitir solicitudes desde otros orígenes
app.use(cors());
// Habilita la capacidad de recibir y procesar datos en formato JSON en las solicitudes
app.use(express.json());

// Rutas
// Define la ruta '/api/users' y asocia las rutas definidas en el archivo './routes/users'
app.use('/api/users', require('./routes/users'));
// Define la ruta '/api/notes' y asocia las rutas definidas en el archivo './routes/notes'
app.use('/api/notes', require('./routes/notes'));

// Exporta la aplicación para que pueda ser utilizada en otros archivos
module.exports = app;
