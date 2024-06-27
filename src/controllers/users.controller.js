const usersCtrl = {}; // Objeto para almacenar los métodos del controlador de usuarios

const userModel = require('../models/User'); // Importa el modelo de usuario

// Obtiene todos los usuarios
usersCtrl.getUsers = async (req, res) => {
    const users = await userModel.find(); // Busca todos los usuarios en la base de datos
    res.json(users); // Devuelve los usuarios como respuesta en formato JSON
}

// Crea un nuevo usuario
usersCtrl.createUser = async (req, res) => {
    const {username} = req.body; // Extrae el nombre de usuario del cuerpo de la solicitud
    const newUser = new userModel({username}); // Crea una nueva instancia del modelo de usuario con el nombre de usuario proporcionado
    await newUser.save(); // Guarda el nuevo usuario en la base de datos
    res.json({message: 'Usuario guardado'}); // Devuelve un mensaje de éxito en formato JSON
}

// Elimina un usuario existente por su ID
usersCtrl.deleteUser = async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id); // Busca y elimina un usuario por su ID en la base de datos
    res.json({message: 'Usuario eliminado'}); // Devuelve un mensaje de éxito en formato JSON
}

module.exports = usersCtrl; // Exporta el objeto de controlador de usuarios para ser utilizado por otros archivos
