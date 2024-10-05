//-------importar Schema , model de mongoose------//
const { Schema, model } = require('mongoose');


const modelAgendarCita = Schema({

    numCedula    : String,
    nombre       : String,
    email        : String,
    fecha        : String,
    departamento : String,
    ciudad       : String,
    mensaje      : String,
    fechaPublicacion : {
        type: Date,
        default:Date.now
    }

})

module.exports = model('agendarCita.js', modelAgendarCita, 'citas');