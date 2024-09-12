import { Component, OnInit} from '@angular/core';

/*---conectar servicios---*/
import { MovilidadService } from '../../servicios/movilidad.service';



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

  constructor( private conectarServicios:MovilidadService ){
  

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

}
