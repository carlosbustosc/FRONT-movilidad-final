//------traemos el modelo------//
const modeloCita = require('../modelos/agendarCita');

//--importamos validator para validar---//
const validator = require('validator');



//registrar cita
const AgendarCita = (req, resp) => {

    const datosFront = req.body;

    try{

        const numCedula    = validator.isEmpty( datosFront.numCedula );
        const nombre       = validator.isEmpty( datosFront.nombre );
        const email        = validator.isEmpty( datosFront.email );
        const fecha        = validator.isEmpty(  datosFront.fecha );
        const departamento = validator.isEmpty( datosFront.departamento );
        const ciudad       = validator.isEmpty( datosFront.ciudad );
        const mensaje      = validator.isEmpty( datosFront.mensaje );

        if( numCedula || nombre || email || fecha || departamento || ciudad || mensaje ){

            return resp.status(400).json({
                status: "error",
                mensaje:"Alguno de los campo viene vacio"
            })
        }

    }catch(err){

        return resp.status(400).json({
            mensaje:"los datos estan imcompletos o surgio algun otro error",
            error: err
        })

    }


    //verificamos que no existe el registro
    modeloCita.find( {
        $and:[
            { numCedula : datosFront.numCedula },
            { fecha : datosFront.fecha },

        ]
    }).then( respDB => {

        if( respDB.length > 0 ){

            return resp.status(400).json({
                status:"error",
                mensaje:"Ya tiene una cita agendada para esta fecha"
            })
        }

        // si no exite se registra
        const nuevaCita = modeloCita( datosFront );

        nuevaCita.save()
            .then( nuevaCita => {
                
                return resp.status(200).json({
                    status:"error",
                    mensaje:"La cita se ha agendado correctamente"
                })
            })
        
    })


}


module.exports = {

    AgendarCita

}