// Importa Schema y model desde mongoose para definir y crear el modelo de datos
const {Schema, model} = require('mongoose');

// Define el esquema de la colección de usuarios
const userSchema = new Schema({
    username: {
        type: String,    // Campo de tipo String para el nombre de usuario
        required: true,  // Campo obligatorio
        trim: true,      // Elimina espacios en blanco al inicio y al final del valor
        unique: true     // Garantiza que el valor sea único en la colección
    }
},{
    timestamps: true // Añade automáticamente campos de timestamps (createdAt y updatedAt) al esquema
});

// Exporta el modelo 'User' basado en el esquema userSchema
module.exports = model('User', userSchema);
