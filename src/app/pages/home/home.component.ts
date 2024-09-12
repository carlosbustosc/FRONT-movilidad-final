import { Component, OnInit } from '@angular/core';


/*----importar servicios-----*/
import { MovilidadService } from 'src/app/servicios/movilidad.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    secciones:any = []

    constructor(private conectarServicio:MovilidadService ){}

    ngOnInit(){
      
        this. secciones = this.conectarServicio.getSeccioneHome()

    }

}
