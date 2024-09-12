import { Component, OnInit } from '@angular/core';

//conectar servicios
import { MovilidadService } from "../../servicios/movilidad.service"

//usar ruta
import { Router } from "@angular/router"

//location para volver
import { Location } from "@angular/common"


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {
  
  departamentos:any = [];
  ciudades:any = [];


  constructor(private locacion: Location, private usarRuta: Router, private conectarServicio:MovilidadService ){

  }

  ngOnInit(): void {
    
    this.conectarServicio.getDepartamentos()
        .subscribe( resp => {

          this.departamentos = resp;
          console.log(this.departamentos)
        })

  }


  volver(){
  
    this.locacion.back();

  }


  valorDepartamentoRegistro(evento:any){
  
    let valueOption = evento.target as HTMLSelectElement;
    let valorFinal  = valueOption.value; //es el value del departamento

    console.log(valorFinal);
    
     this.departamentos[valorFinal].ciudades //obtenemos las ciudades
     this.ciudades = this.departamentos[valorFinal].ciudades; //ciudades listas para el *ngFor
     
  }

}
