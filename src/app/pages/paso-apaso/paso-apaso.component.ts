import { Component, OnInit } from '@angular/core';
import { MovilidadService } from '../../servicios/movilidad.service';


//----------usar Ruta-------//
import { Router } from "@angular/router"


//-------volver pantalla------//
import { Location } from "@angular/common"

@Component({
  selector: 'app-paso-apaso',
  templateUrl: './paso-apaso.component.html',
  styleUrls: ['./paso-apaso.component.css']
})


export class PasoApasoComponent implements OnInit{
  
   datosPasoApaso:any = []

  constructor( private conectarServicio:MovilidadService, private usarRuta:Router, private volverPantalla:Location  ){

  }

  ngOnInit(): void {
      

    this.datosPasoApaso = this.conectarServicio.getPasoApaso()
  }


  verContenido( posicion:number){
        
    console.log(posicion);

    window.scrollTo(0,0);

    this.usarRuta.navigate(['/internaPaso', posicion]);
  }


    
  volver(){
      
    this.volverPantalla.back();
  }

}
