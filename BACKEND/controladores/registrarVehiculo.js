
//---traemos el modelo---//
const modeloRegistroVehiculo = require('../modelos/registrarVehiculo');


//importamos validator para la validacion
const validator = require('validator');




//controlador
const registrarVehiculo = (req, resp) => {

   const datosFront = req.body;

  try{

    const numeroCedula    =  validator.isEmpty( datosFront.numeroCedula );
    const nombrePersona   =  validator.isEmpty( datosFront.nombrePersona );
    const marcaVehiculo   =  validator.isEmpty( datosFront.marcaVehiculo );
    const modeloVechiculo =  validator.isEmpty( datosFront.placa );
    const placa           =  validator.isEmpty( datosFront.placa );
    const precio          =  validator.isEmpty( datosFront.precio );


    if( numeroCedula || nombrePersona || marcaVehiculo || modeloVechiculo || placa || precio){

        return resp.status(400).json({

            status:"error",
            mensaje:"Uno de los campos esta vacio"
        })
    }

  }catch(error){    

        return resp.status(400).json({

            mensaje:"hubo un error , puede que algun campo no exista, y no haya sido enviado",
            error:error
        })
            
    
  }

  //comprobar si el registro existe
  modeloRegistroVehiculo.find({

    $or:[ { placa : datosFront.placa} ]
  
  }).then( respDB => {

    if( respDB.length > 0 ){

        return resp.status(400).json({
            status:"error",
            mensaje:"El vehiculo con esta placa ya existe"
        })
   
    }
  


    // si no existe en DB
    const registroNuevo = modeloRegistroVehiculo(datosFront);
    registroNuevo.save()
            .then( registroNuevo => {
                
                return resp.status(200).json({
                    status:"success",
                    mensaje:"se ha registrado correctamente",
                    registroNuevo
                })
            })

})

 

}


const listarVehiculo = (req, resp) => {

    const datosFront = req.body;
   

    try{
        
        const NumDocumento = validator.isEmpty( datosFront.documento );

        if( NumDocumento ){

            return resp.status(400).json({
                status:"error",
                mensaje:"El dato no fue enviado"
            })

        }

    }catch(error){
        
        return resp.status(400).json({
            status:"Error",
            mensaje:"fallo algo en el envio de datos"
        })
    }

    //-------buscamos en la base de datos-------//
    modeloRegistroVehiculo.find( { numeroCedula:datosFront.documento } )
            .then( respVehiculo => {
                if( !respVehiculo ){

                    return resp.status(400).json({
                        status:"Error",
                        mensaje:"No hay vehiculos registrados a tu nombre"
                    })
                }


                return resp.status(200).json({
                    status:"sucesss",
                    mensaje:"Se han encontrado el (los) siguiente(s) vehiculo a su nombre",
                    respVehiculo

                })
            })

}



const mostrarUnVehiculo = ( req, resp ) => {

    const datosFront = req.body;

    console.log( datosFront.matricula )

    try{
        
        const placa = validator.isEmpty( datosFront.matricula );

        if( placa ){

            return resp.status(400).json({
                status:error,
                mensaje:"por favor ingrese la placa"
            })
        }

    }catch(error){

            return resp.status(400).json({
                error:error,
                mensaje:"Debe diligenciar el campo"
            }) 

    }

    //----filtrar uno / por placa----//
    modeloRegistroVehiculo.findOne( { placa : datosFront.matricula } )
            .then( resultadoDB => {

                if( !resultadoDB ){

                    return resp.status(400).json({
                        status:"error",
                        mensaje:"No se encontrol vehiculo para la placa: " + datosFront.matricula + " pruebe con mayusculas"
                    })
                }
                console.log(resultadoDB)


                // existe el vehiculo
                return resp.status(200).json({
                    status:"sucess",
                    mensaje:"Se ha encontrado su vehiculo",
                    resultadoDB
                })
            }) 
}


module.exports = {

    registrarVehiculo,
    listarVehiculo,
    mostrarUnVehiculo
}