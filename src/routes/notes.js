// Importa el objeto Router de Express para definir las rutas
const {Router} = require('express');
// Crea una instancia del router
const router = Router();

// Importa las funciones del controlador de notas
const {getNotes, createNote, getNote, updateNote, deleteNote} = require('../controllers/notes.controller');

// Define la ruta para obtener todas las notas y crear una nueva nota
router.route('/')
    .get(getNotes)     // Maneja las solicitudes GET para obtener todas las notas
    .post(createNote); // Maneja las solicitudes POST para crear una nueva nota

// Define la ruta para obtener, actualizar y eliminar una nota por su ID
router.route('/:id')
    .get(getNote)       // Maneja las solicitudes GET para obtener una nota específica por su ID
    .put(updateNote)    // Maneja las solicitudes PUT para actualizar una nota específica por su ID
    .delete(deleteNote);// Maneja las solicitudes DELETE para eliminar una nota específica por su ID

// Exporta el router para que pueda ser utilizado en otros archivos
module.exports = router;
