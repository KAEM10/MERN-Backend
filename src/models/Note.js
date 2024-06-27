// Importa Schema y model desde mongoose para definir y crear el modelo de datos
const {Schema, model} = require('mongoose');

// Define el esquema de la colección de notas
const noteSchema = new Schema({
    title: String, // Campo de tipo String para el título de la nota
    content: {
        type: String,    // Campo de tipo String para el contenido de la nota
        required: true   // Campo obligatorio
    },
    author: String, // Campo de tipo String para el autor de la nota
    date: {
        type: Date,        // Campo de tipo Date para la fecha de la nota
        default: Date.now  // Valor por defecto: fecha y hora actuales
    }
},{
    timestamps: true // Añade automáticamente campos de timestamps (createdAt y updatedAt) al esquema
});

// Exporta el modelo 'Note' basado en el esquema noteSchema
module.exports = model('Note', noteSchema);
