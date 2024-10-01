import { Component, Input } from '@angular/core';


/*---usar ruta---------*/
import { Router } from "@angular/router"


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
    
  @Input() seccionHijo:any
  @Input() indice:any

  constructor( private usarRuta: Router ){

  }


  abrirPagina( seccionHijo:any){
    
    console.log( seccionHijo.pagina )

    this.usarRuta.navigate( [seccionHijo.pagina] )

    window.scrollTo(0,0);
  
  }

}
