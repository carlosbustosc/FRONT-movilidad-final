import { Component, OnInit} from '@angular/core';

/*---conectar servicios---*/
import { MovilidadService } from '../../servicios/movilidad.service';

//-----importar FormGroup-----//
import { FormGroup, FormBuilder, Validators } from "@angular/forms"


@Component({

  selector: 'app-interna-servicios',
  templateUrl: './interna-servicios.component.html',
  styleUrls: ['./interna-servicios.component.css']

})

export class InternaServiciosComponent implements OnInit{
  
  //pantallas
  pantallaBienvenida = true;
  pantallaPerfil = false;
  pantallaCita = false;
  pantallaMiVehiculo = false;

  departamentos:any = []
  ciudades:any= [];
  

  //-----formulario-----//
  agendamientoCita:FormGroup

  constructor( private conectarServicios:MovilidadService, private fb:FormBuilder ){
    
   this.agendamientoCita = this.fb.group({

    numCedula    : ["", Validators.required ],
    nombre       : ["", Validators.required ],
    email        : ["", Validators.required ],
    fecha        : ["", Validators.required ],
    departamento : ["", Validators.required ],
    ciudad       : ["", Validators.required ],
    mensaje      : ["", Validators.required ]

   })
  
}


  //---------validaciones visuales---------//
  get numCedula(){

    return this.agendamientoCita.controls['numCedula'].invalid && this.agendamientoCita.controls['numCedula'].touched;
  }

  get nombre(){

    return this.agendamientoCita.controls['nombre'].invalid && this.agendamientoCita.controls['nombre'].touched;

  }

  get email(){

    return this.agendamientoCita.controls['email'].invalid && this.agendamientoCita.controls['email'].touched;
  }
  get fecha(){

    return this.agendamientoCita.controls['fecha'].invalid && this.agendamientoCita.controls['fecha'].touched;

  }

  get departamento(){

    return this.agendamientoCita.controls['departamento'].invalid && this.agendamientoCita.controls['departamento'].touched;

  }
  
  get ciudad(){

    return this.agendamientoCita.controls['ciudad'].invalid && this.agendamientoCita.controls['ciudad'].touched;

  }
  
  get mensaje(){
     
    return this.agendamientoCita.controls['mensaje'].invalid && this.agendamientoCita.controls['mensaje'].touched;
    
  }


  ngOnInit(): void {
    
     this.conectarServicios.getDepartamentos()
       .subscribe( resp => {
          
        this.departamentos = resp;
       
       })
      

  }
  
  miPerfil(){
  
  //pantallas
  this.pantallaBienvenida = false;
  this.pantallaPerfil = true;
  this.pantallaCita = false;
  this.pantallaMiVehiculo = false;

  }

  agendarCita(){
  
    //pantallas
  this.pantallaBienvenida = false;
  this.pantallaPerfil = false;
  this.pantallaCita = true;
  this.pantallaMiVehiculo = false;

  }

  miVehiculo(){
  
     //pantallas
  this.pantallaBienvenida = false;
  this.pantallaPerfil = false;
  this.pantallaCita = false;
  this.pantallaMiVehiculo = true;

  }


  //perfil
  valorDepartamentoPerfil(evento:any){
  
    let valueOption = evento.target as HTMLSelectElement;
    let valorFinal  = valueOption.value; //es el value del departamento

    console.log(valorFinal);
    
     this.departamentos[valorFinal].ciudades //obtenemos las ciudades
     this.ciudades = this.departamentos[valorFinal].ciudades; //ciudades listas para el *ngFor

  }


  //Agendar cita
  valorDepartamento(evento:any){
  
    let valueOption = evento.target as HTMLSelectElement;
    let valorFinal  = valueOption.value; //es el value del departamento

    console.log(valorFinal);
    
     this.departamentos[valorFinal].ciudades //obtenemos las ciudades
     this.ciudades = this.departamentos[valorFinal].ciudades; //ciudades listas para el *ngFor

  }




  //--------Agendar Cita---------//
  agendarCitaPersona(){
      
    console.log(this.agendamientoCita)
      if( this.agendamientoCita.invalid ){

        Object.values( this.agendamientoCita.controls ).forEach( campos => {
          
          campos.markAsTouched();

        })

      }else{

        this.conectarServicios.AgendarCita( this.agendamientoCita.value )
      
      }
  }

}
