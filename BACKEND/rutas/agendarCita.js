//-----importamos express para manejar el Router----//
const express  = require('express');
const usarRuta = express.Router();


//----importamos el controlador para usar la ruta--//
const agendarCita = require('../controladores/agendarCita');


//cremos rutas
usarRuta.post( '/agendarCita', agendarCita.AgendarCita );


//exportamos ruta
module.exports = usarRuta
