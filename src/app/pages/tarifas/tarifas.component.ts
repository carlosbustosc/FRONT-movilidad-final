import { Component, OnInit } from '@angular/core';

/*---traer servicios---*/
import { MovilidadService } from 'src/app/servicios/movilidad.service';

//---traemos la interfaz
import { tarifasInterface } from '../../modelos/vehiculos.interface';

//---location para volver
import { Location } from "@angular/common"

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {
    
  tarifas:tarifasInterface[] = []

  constructor( private conectarServicios:MovilidadService, private location:Location ){ }

  ngOnInit(): void {
      
    this.tarifas = this.conectarServicios.getTarifas();
    console.log(this.tarifas)
  }

  volver(){
    
    this.location.back();
  }
}
