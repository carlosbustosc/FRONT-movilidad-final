//----ejecutamos la conexion a la base de datos----//
const { conexionDB } = require('./conexion/conexion');
conexionDB();

//--------importamos express y lo inicializamos---//
const express     = require('express');
const usarExpress = express();


//-------configuramos datos de entrada JSON Y ENCODED----//
usarExpress.use( express.json() ); // alizar los datos que viene en JSON del front
usarExpress.use( express.urlencoded( { extended:true } ) ); // cuando los datos viene por URL


//---configuramos los CORS datos que vienen de otro dominio---//
const cors = require('cors');
usarExpress.use( cors() );


//--importamos las rutas---//
const rutaUsuarios = require('./rutas/usuario');
usarExpress.use( rutaUsuarios );



//------ejecutamos el servidor local----//
usarExpress.listen( 3000, () => {

    console.log("el servidor se ha ejecutado correctamente");
})