//----traemos el schema y model de mongoose---//
const { Schema, model, now } = require('mongoose');

const registroUsuario = Schema({

      tipoDocumento   :  String,
      numeroCedula    :  String,
      fecha           :  String,      
      nombre          :  String,  
      genero          :  String,     
      correo          :  String,
      pass            :  String,       
      fechaExpedicion :  String,
      apellido        :  String,      
      RH              :  String,       
      grupoSanguineo  :  String, 
      departamento    :  String,
      ciudad          :  String,
      fechaCreacion   : {
        type:Date,
        default: Date.now
      } 

})


module.exports = model("usuario.js", registroUsuario, "registroUsuarios");