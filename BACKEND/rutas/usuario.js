//------importamos express-----//
const express = require('express');
const usarRuta = express.Router();


//---importar controlador----//
const usuarios = require('../controladores/usuarios');


//creamos la ruta
usarRuta.post('/registarUsuario', usuarios.registrarUsuario );
usarRuta.post('/loginUsuarios', usuarios.loginUsuarios );
usarRuta.post('/unUsuario', usuarios.listarUsuarios );
usarRuta.put('/actualizarUsuario', usuarios.ActulizarUsuario );



//exportamos la ruta
module.exports = usarRuta;