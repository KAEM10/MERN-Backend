// Importa el objeto Router de Express para definir las rutas
const {Router} = require('express');
// Crea una instancia del router
const router = Router();

// Importa las funciones del controlador de usuarios
const {getUsers, createUser, deleteUser} = require('../controllers/users.controller');

// Define la ruta para obtener todos los usuarios y crear un nuevo usuario
router.route('/')
    .get(getUsers)    // Maneja las solicitudes GET para obtener todos los usuarios
    .post(createUser); // Maneja las solicitudes POST para crear un nuevo usuario

// Define la ruta para eliminar un usuario por su ID
router.route('/:id')
    .delete(deleteUser); // Maneja las solicitudes DELETE para eliminar un usuario por su ID

// Exporta el router para que pueda ser utilizado en otros archivos
module.exports = router;
