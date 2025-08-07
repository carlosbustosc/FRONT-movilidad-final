import { Component, OnInit } from '@angular/core';

//location para volver
import { Location } from "@angular/common" 


/*---conectar servicio---*/
import { MovilidadService } from 'src/app/servicios/movilidad.service';

//---traemos la interfaz---//
import { interfaceVehiculos } from 'src/app/modelos/vehiculos.interface';

//----insertar form group-----//
import { FormGroup, FormBuilder, Validators } from "@angular/forms"


@Component({
  selector: 'app-registro-vehiculo',
  templateUrl: './registro-vehiculo.component.html',
  styleUrls: ['./registro-vehiculo.component.css']
})
export class RegistroVehiculoComponent implements OnInit {
  
  registroVehiculo:FormGroup;
  
  vehiculos:interfaceVehiculos[] = []

  constructor(private location: Location, private conectarServicio:MovilidadService, private fb:FormBuilder){
    
    this.registroVehiculo = this.fb.group({

      numeroCedula    : ["", Validators.required ],
      nombrePersona   : ["", Validators.required ],
      marcaVehiculo   : ["", Validators.required ],
      modeloVechiculo : ["", Validators.required ],
      placa           : ["", Validators.required ],
      precio          : ["", Validators.required ]

    })

  }

  
  //---validaciones visuales----//
  get numeroCedula(){
    
    return this.registroVehiculo.controls['numeroCedula'].invalid && this.registroVehiculo.controls['numeroCedula'].touched
  }


  get nombrePersona(){

    return this.registroVehiculo.controls['nombrePersona'].invalid && this.registroVehiculo.controls['nombrePersona'].touched;
  }


  get marcaVehiculo(){

    return this.registroVehiculo.controls['marcaVehiculo'].invalid && this.registroVehiculo.controls['marcaVehiculo'].touched;

  }

  get modeloVechiculo(){

    return this.registroVehiculo.controls['modeloVechiculo'].invalid && this.registroVehiculo.controls['modeloVechiculo'].touched;

  }

  get placa(){

    return this.registroVehiculo.controls['placa'].invalid && this.registroVehiculo.controls['placa'].touched;

  }

  get precio(){

    return this.registroVehiculo.controls['precio'].invalid && this.registroVehiculo.controls['precio'].touched;

  }

    


  ngOnInit(): void {
    
    this.vehiculos = this.conectarServicio.getMarcasVehiculos();
  
  }


  volver(){
    
    this.location.back();

  }


  registrar(){
  
      if( this.registroVehiculo.invalid ){
        
        Object.values( this.registroVehiculo.controls ).forEach( campos => {
        
          campos.markAsTouched();

        })

      }else{
        
        this.conectarServicio.registrarVehiculo( this.registroVehiculo.value )
          .subscribe( resp => {

            alert("Se ha registrado correctamente");

            this.registroVehiculo.reset()
            
            //console.log(resp)
          
          }, (err) => {
            
            alert(err.error.mensaje)
          
          })
   
      }

  }

}
