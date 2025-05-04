//----importamos mongoose---//
const mongoose = require('mongoose');

//creamos la conexion
const conexionDB = async () => {
    
    try{
        
        mongoose.connect('mongodb://localhost:27017/movilidadVial');
        console.log("se conecto correctamente");

    }
    
    catch(error){

        console.log("no se pudo conectar a la base de datos " + error);

    }
}

module.exports = {
    
    conexionDB
}