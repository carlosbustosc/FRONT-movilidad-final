

export interface interfaceVehiculos{

    id: number,
    Nombre: string,
    Slug: string

}



export interface tarifasInterface{

      tramite:string,
      concepto: string,
      distrito:string,
      MinTarnsporte: string,
      runt:string,
      total:string

}


export interface registroUsuario {

      tipoDocumento :string,  
      numeroCedula :string,
      fecha :string,        
      nombre:string,        
      genero :string,        
      correo:string,        
      pass:string,          
      pass2:string,          
      numCedula:string,       
      fechaExpedicion:string
      apellido:string,       
      RH:string,              
      grupoSanguineo:string, 
      departamento:string,    
      ciudad:string          

}


export interface Login {

      numDocumento: string,
      pass: string
}


export interface registroVehiculo {

      numeroCedula: string,
      nombrePersona: string,
      marcaVehiculo: string,
      modeloVechiculo: string,
      placa: string,
      precio: number
}


export interface agendarCita {

      numCedula    : string,
      nombre       : string,
      email        : string,
      fecha        : string,
      departamento : string,
      ciudad       : string,
      mensaje      : string
}

