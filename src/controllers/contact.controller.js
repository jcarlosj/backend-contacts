const { insertContact, getAllContacts, deleteContactById, updateContactById, getContactById } = require("../services/contact.service");

async function getContacts( req, res ) {

    try {
        const data = await getAllContacts();

        res.status( 200 ).json({
            ok: true,
            data
        });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener todos los contactos'
        })
    }
}

async function getContact( req, res ) {
    const data_id = req.params.id;

    try {
        const data = await getContactById( data_id );

        res.status( 200 ).json({ ok: true, data });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ ok: false, msg: 'Error al obtener un contacto por ID' })
    }
}

async function setContact( req, res ) {
    const data_id = req.params.id;   // Obtener el ID de la ruta
    const inputData = req.body;         // Obtener el body del Request

    try {
        const data = await updateContactById( data_id, inputData );  // Vincula al Servicio para actualizar contacto

        res.status( 206 ).json({
            ok: true,
            data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ ok: false, msg: 'Error al actualizar contacto por ID' })
    }
}

async function createContact( req, res ) {
    const inputData = req.body;

    try {
        const data = await insertContact( inputData );    
        
        res.status( 201 ).json({ 
            ok: true,
            data 
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al crear contacto'
        })
    }
}

async function removeContact( req, res ) {
    const data_id = req.params.id;

    try {
        const data = await deleteContactById( data_id );
        
        res.status( 200 ).json({ 
            ok: true, 
            data 
        });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al eliminar un contacto por ID'
        })
    }
}


module.exports = {
    getContacts,
    getContact,
    setContact,
    setContact,
    createContact,
    removeContact
}