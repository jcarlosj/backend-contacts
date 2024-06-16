const express = require( 'express' );       // Importamos express
const app = express();                      // Invocamos express
const cors = require( 'cors' );

const { dbConnection } = require( './config/mongo.config' );  // Importamos la configuracion de Mongoose para MongoDB
const PORT = process.env.PORT

app.use( express.json() );
app.use( cors() ); 

/** Definimos las rutas disponibles */
app.get( '/', (req, res) => res.send( '<h1>Home</h1>' ));
app.use( '/api/contacts', require( './routes/contact.routes' ) );

// Invoca la configuracion de la base de datos para establecer la conexion
dbConnection();     

/** Lanzamos el servidor web */
app.listen( PORT, function() {
    console.log( `Server running on http://localhost:${PORT} ` );
});