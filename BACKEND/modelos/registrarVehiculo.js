//-----importamos mongoose Schema y model----//

const { Schema, model } = require('mongoose');

const registroVehiculoModel = Schema({

    numeroCedula    : String,
    nombrePersona   : String,
    marcaVehiculo   : String,
    modeloVechiculo : String,
    placa           : String,
    precio          : String,
    fechaRegistro : {
        type:Date,
        default:Date.now
    }

})

module.exports = model('registrarVehiculo', registroVehiculoModel, 'registroVehiculo');