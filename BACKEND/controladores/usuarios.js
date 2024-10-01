
// importamos el modelo
const modeloUsuarios = require('../modelos/usuarios');

// traemos Validator para validar
const validator = require('validator');

//bcryp para cifrar contraseña
const bcrypt = require('bcrypt');

//---importar token----//
const Token = require('../token/TokenUsuario')




const registrarUsuario = (req, resp) => {

  
    const datosFront = req.body;


try{
    //validar campos
    let tipoDocumento   = validator.isEmpty( datosFront.tipoDocumento );
    let numCedula       = validator.isEmpty( datosFront.numeroCedula );
    let fecha           = validator.isEmpty( datosFront.fecha );
    let nombre          = validator.isEmpty( datosFront.nombre );
    let genero          = validator.isEmpty( datosFront.genero );
    let correo          = validator.isEmpty( datosFront.correo );
    let pass            = validator.isEmpty( datosFront.pass );
    let fechaExpedicion = validator.isEmpty( datosFront.fechaExpedicion );
    let apellido        = validator.isEmpty( datosFront.apellido );
    let RH              = validator.isEmpty( datosFront.RH );
    let grupoSanguineo  = validator.isEmpty( datosFront.grupoSanguineo );
    let departamento    = validator.isEmpty( datosFront.departamento );
    let ciudad          = validator.isEmpty( datosFront.ciudad );

 

        if( tipoDocumento || numCedula || fecha || nombre || genero || correo || pass || fechaExpedicion || apellido || RH || grupoSanguineo || departamento || ciudad){

                return resp.status(400).json({
                    status: "error",
                    mensaje: "Alguno de los campos esta vacio"
                })

        }

    }catch(error){

        return resp.status(400).json({
            succes: "error",
            mensaje: "falta algun campo que no se envio"
        })

    }


    //console.log(datosFront)


    modeloUsuarios.find({

        $or:[
            {  numeroCedula:datosFront.numeroCedula }
        ]
     }).then( respDatos => {
            
            if( respDatos.length > 0){

                return resp.status(400).json({
                    status:"error",
                    mensaje:"Ya existe un usuario con este numero de documento"
                })
            }


            //cifrar contraseña
            bcrypt.hash( datosFront.pass, 10, (error, resultadoCifado) => {

                datosFront.pass = resultadoCifado
                
                //insertamos los datos en el modelo
                let modeloGuardar = new modeloUsuarios( datosFront );
                modeloGuardar.save()
                            .then( respGuardado => {

                                return resp.status(200).json({
                                    status:"success",
                                    mensaje:"Se ha registrado correctamente",
                                    respGuardado
                                })
                            })
                            .catch( error => {
                                return resp.status(400).json({ error:error })
                            })

            })


                            
     })

}



const loginUsuarios = (req, resp) => {


    const datosFront = req.body;

    try{

        let numDocumento = validator.isEmpty( datosFront.numDocumento );
        let pass = validator.isEmpty( datosFront.pass );

        if( numDocumento || pass ){

            return resp.status(400).json({
                status:"error",
                mensaje: "Alguno de los campos esta vacio"
            })
        }

    }catch(error){

        return resp.status(400).json({
            status:"error",
            mensaje:"Algun campo del frontend no fue enviado o hubo un error"
        })
    }


    //entramos a la coleccion y verificamos si existe el correo
    modeloUsuarios.findOne( {  numeroCedula:datosFront.numDocumento } )
        .then( respUnRegistro => {
            
            if( !respUnRegistro ){

                return resp.status(400).json({
                    mensaje:"No existe el usuario con este documento"
                })
            }

            //si existe la cedula , ahora validar contraseña
            const password = bcrypt.compareSync( datosFront.pass, respUnRegistro.pass );// true o false
            
            if(!password){
                
                return resp.status(400).json({
                    mensaje:"la contraseña no es correcta"
                })
            }

            //generar token
            let generarToken = Token.tokenUsuarios( respUnRegistro );

            
            //retornamos usuario
            return resp.status(200).json({
                status:"success",
                mensaje:"se ha validado correctamente",
                respUnRegistro,
                generarToken
            })

        })

}




module.exports = {

    registrarUsuario,
    loginUsuarios
}