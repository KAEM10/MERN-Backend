// Carga las variables de entorno desde un archivo .env
require('dotenv').config();
// Importa la aplicación Express desde el archivo app.js
const app = require('./app');
// Importa la configuración de la base de datos desde el archivo database.js
require('./database');

// Función principal que inicia el servidor
async function main() {
    // Espera a que la aplicación Express escuche en el puerto configurado
    await app.listen(app.get('port'));
    // Muestra un mensaje en la consola indicando en qué puerto está escuchando el servidor
    console.log('Server on port', app.get('port'));
}

// Llama a la función principal para iniciar el servidor
main();
