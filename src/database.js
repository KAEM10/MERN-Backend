// Importa la biblioteca mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

// Define la URI de conexión. Si existe una variable de entorno MONGODB_URI, 
// la utiliza; de lo contrario, usa una URI por defecto para una base de datos local
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest';

// Conecta a la base de datos MongoDB utilizando la URI definida
mongoose.connect(URI, {});

// Obtiene el objeto de conexión para manejar eventos de la conexión
const connection = mongoose.connection;

// Establece un listener para el evento 'open' de la conexión y 
// muestra un mensaje en la consola cuando la conexión se ha establecido exitosamente
connection.once('open', () => { 
    console.log('DB is connected');
});
