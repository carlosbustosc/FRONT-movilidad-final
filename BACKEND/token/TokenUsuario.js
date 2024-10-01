//---importar jwt que genera el token----//
const jwt    = require('jwt-simple');
const moment = require('moment');




const claveSecreta = "Ecoutores09"

const tokenUsuarios = ( respUnRegistro ) => {

    const datosUsuario = {

        tipoDocumento   : respUnRegistro.tipoDocumento,
        numeroCedula    : respUnRegistro.numeroCedula,
        fecha           : respUnRegistro.fecha,      
        nombre          : respUnRegistro.nombre,  
        genero          : respUnRegistro.genero,     
        correo          : respUnRegistro.correo,
        pass            : respUnRegistro.pass,       
        fechaExpedicion : respUnRegistro.fechaExpedicion,
        apellido        : respUnRegistro.apellido,      
        RH              : respUnRegistro.RH,       
        grupoSanguineo  : respUnRegistro.grupoSanguineo, 
        departamento    : respUnRegistro.departamento,
        ciudad          : respUnRegistro.ciudad,
        creacion        : moment().unix(),
        finalizacion    : moment().add(90, "days").unix
    }

    return jwt.encode(datosUsuario, claveSecreta);
}

module.exports = {

    tokenUsuarios
}