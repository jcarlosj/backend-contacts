const mongoose = require( 'mongoose' );

async function dbConnection() {
    const { DB_TYPE, DB_PROTOCOL_LOCAL, DB_USER, DB_PASS, DB_CLUSTER, DB_NAME, DB_OPTIONS, DB_HOST_LOCAL } = process.env;

    try {
        if ( DB_TYPE === 'local' ) {
            // Conexión local
            stringConnection = `${ DB_PROTOCOL_LOCAL }://${ DB_HOST_LOCAL }/${ DB_NAME }`;

        } else if ( DB_TYPE === 'atlas' ) {
            
            // Conexión a Atlas
            if ( !DB_USER || !DB_PASS || !DB_CLUSTER || !DB_NAME ) {
                throw new Error('Faltan una o más variables de entorno necesarias para la conexión a Atlas');
            }
            stringConnection = `mongodb+srv://${ DB_USER }:${ DB_PASS }@${ DB_CLUSTER }/${ DB_NAME }${ DB_OPTIONS ? `?${ DB_OPTIONS }` : '' }`;
        } else {
            throw new Error( 'DB_TYPE no está definido correctamente en el archivo .env' );
        }

        await mongoose.connect( stringConnection, {} );
        console.log( `Base de datos "${ process.env.DB_NAME }" inicializada exitosamente en Mongo "${ DB_TYPE }"` );
    } 
    catch (error) {
        console.error( 'Error al conectar a la base de datos:', error.message );
        console.error( 'Detalles del error:', error );
        //throw new Error( 'Error al inicializar la base de datos' );
    }
}

module.exports = {
    dbConnection
};