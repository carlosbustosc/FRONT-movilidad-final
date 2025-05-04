// las rutas se mejas con express


//--importamos express para usar Router
const express  = require('express');
const usarRuta = express.Router();


//---importamos el controlador---//
const controladorRegistroVehiculo = require('../controladores/registrarVehiculo');


//crear rutas
usarRuta.post('/registrarVehiculos', controladorRegistroVehiculo.registrarVehiculo );
usarRuta.post('/traerUnVehiculo', controladorRegistroVehiculo.listarVehiculo );
usarRuta.post('/mostrarUnVehiculo', controladorRegistroVehiculo.mostrarUnVehiculo );


//exportamos ruta
module.exports = usarRuta;