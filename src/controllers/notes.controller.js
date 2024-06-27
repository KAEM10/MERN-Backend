const notesCtrl = {}; // Objeto para almacenar los métodos del controlador

const noteModel = require('../models/Note'); // Importa el modelo de nota

// Obtiene todas las notas
notesCtrl.getNotes = async (req, res) => {
    const notes = await noteModel.find(); // Busca todas las notas en la base de datos
    res.json(notes); // Devuelve las notas como respuesta en formato JSON
}

// Crea una nueva nota
notesCtrl.createNote = async (req, res) => {
    const {title, content, date, author} = req.body; // Extrae los datos de la nota del cuerpo de la solicitud
    const newNote = new noteModel({ // Crea una nueva instancia del modelo de nota
        title,
        content,
        date,
        author
    });
    await newNote.save(); // Guarda la nueva nota en la base de datos
    res.json({message: 'Nota guardada'}); // Devuelve un mensaje de éxito en formato JSON
}

// Obtiene una nota específica por su ID
notesCtrl.getNote = async (req, res) => {
    const note = await noteModel.findById(req.params.id); // Busca una nota por su ID en la base de datos
    res.json(note); // Devuelve la nota encontrada en formato JSON
}

// Actualiza una nota existente
notesCtrl.updateNote = async (req, res) => {
    const { title, content, date, author } = req.body; // Extrae los datos actualizados de la nota del cuerpo de la solicitud
    const noteId = req.params.id; // Obtiene el ID de la nota a actualizar de los parámetros de la solicitud

    if (!noteId) { // Verifica si se proporcionó un ID de nota válido
        return res.status(400).json({ message: 'ID de la nota no proporcionado' }); // Devuelve un mensaje de error si no se proporcionó un ID válido
    }

    try {
        const updatedNote = await noteModel.findOneAndUpdate( // Busca y actualiza la nota en la base de datos
            { _id: noteId },
            { title, content, date, author },
            { new: true } // Devuelve la nota actualizada en lugar de la nota antes de la actualización
        );

        if (!updatedNote) { // Verifica si se encontró la nota a actualizar
            return res.status(404).json({ message: 'Nota no encontrada' }); // Devuelve un mensaje de error si la nota no se encontró
        }

        res.json({ message: 'Nota actualizada', updatedNote }); // Devuelve un mensaje de éxito y la nota actualizada en formato JSON
    } catch (error) {
        console.error(error); // Maneja errores de actualización de la nota
        res.status(500).json({ message: 'Error al actualizar la nota' }); // Devuelve un mensaje de error en caso de error interno del servidor
    }
}

// Elimina una nota existente por su ID
notesCtrl.deleteNote = async (req, res) => {
    await noteModel.findByIdAndDelete(req.params.id); // Busca y elimina una nota por su ID en la base de datos
    res.json({message: 'Nota eliminada'}); // Devuelve un mensaje de éxito en formato JSON
}

module.exports = notesCtrl; // Exporta el objeto de controlador de notas para ser utilizado por otros archivos
