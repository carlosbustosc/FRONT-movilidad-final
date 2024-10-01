import { Component, OnInit } from '@angular/core';

//---recibir parametro---/
import { ActivatedRoute } from "@angular/router"

//-------conectar servicios---------//
import { MovilidadService } from 'src/app/servicios/movilidad.service';

//----location para volver----//
import { Location } from "@angular/common"

@Component({
  selector: 'app-interna-paso',
  templateUrl: './interna-paso.component.html',
  styleUrls: ['./interna-paso.component.css']
})
export class InternaPasoComponent implements OnInit{
  
  InformacionTarjetas:any;
  traerSoloUnaTarjeta:any;


  constructor(private recibirParametro:ActivatedRoute, private ConectarServicios:MovilidadService, private volverPantalla:Location ){
    
  
  }


  ngOnInit(): void {
      
     this.recibirParametro.params
       .subscribe( resp => {
        
        
        this.InformacionTarjetas = this.ConectarServicios.getPasoApaso();

        this.traerSoloUnaTarjeta = this.InformacionTarjetas[ resp['id'] ]

        console.log( this.traerSoloUnaTarjeta )

       })
  }


  volver(){
  
    this.volverPantalla.back();

  }
}
