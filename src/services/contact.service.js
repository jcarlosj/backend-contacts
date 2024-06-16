const UserModel = require("../models/Contact.model");


async function insertContact( newData ) {
    return await UserModel.create( newData );
}

async function getAllContacts() {
    return await UserModel.find();
}

async function getContactById( id ) {
    return await UserModel.findById( id );
    //return await UserModel.find({ _id: id });
}

async function deleteContactById( id ) {
    return await UserModel.findOneAndDelete({ _id: id });
}

async function updateContactById( id, updateData ) {
    return await UserModel.findOneAndUpdate(
        { _id: id },        // Objeto para realizar la consulta y encontrar el documento a actualizar
        updateData,         // Datos que vamos a actualizar
        { new: true }       // Configura la respuesta de la consulta (Mostrar el cambio actual) 
    );
}


module.exports = {
    insertContact, 
    getAllContacts, 
    getContactById,
    deleteContactById, 
    updateContactById
}