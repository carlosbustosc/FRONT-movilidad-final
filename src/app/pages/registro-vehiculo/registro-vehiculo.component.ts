import { Component, OnInit } from '@angular/core';

//location para volver
import { Location } from "@angular/common" 


/*---conectar servicio---*/
import { MovilidadService } from 'src/app/servicios/movilidad.service';

//---traemos la interfaz---//
import { interfaceVehiculos } from 'src/app/modelos/vehiculos.interface';

@Component({
  selector: 'app-registro-vehiculo',
  templateUrl: './registro-vehiculo.component.html',
  styleUrls: ['./registro-vehiculo.component.css']
})
export class RegistroVehiculoComponent implements OnInit {
  
  constructor(private location: Location, private conectarServicio:MovilidadService){

  }
    
    vehiculos:interfaceVehiculos[] = []

  ngOnInit(): void {
    
    this.vehiculos = this.conectarServicio.getMarcasVehiculos() ;
  
  }


  volver(){
    
    this.location.back();

  }

}
