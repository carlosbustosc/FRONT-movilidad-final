import { Component, OnInit } from '@angular/core';

// conectar servicios
import { MovilidadService } from 'src/app/servicios/movilidad.service';

//volver de pantalla location
import { Location } from "@angular/common"

@Component({
  selector: 'app-impuesto',
  templateUrl: './impuesto.component.html',
  styleUrls: ['./impuesto.component.css']
})
export class ImpuestoComponent implements OnInit  {
    
  /*---etiquetas html--*/
  marcaSelec:any;
  departamentSelect:any;
  precioImpuesto:any;
  /*---etiquetas html--*/

  todasLasMarcasVehiculos:any
  departamentos:any

  mostrarResultadoImpuesto = false;
  btnImpuesto = true;

  selectDefault = true;

  btnPlaca = true;
  
  placa:any;


  selectedMarca:any = null;
  depatamentoInicial:any = null
  resetiarPrecio:any



  constructor( private location: Location, private conectarServicio: MovilidadService ){}
  
  ngOnInit(): void {
      
    //departamentos
    this.conectarServicio.getDepartamentos()
    .subscribe( resp => {
      console.log(resp)

      this.departamentos = resp
    
    })




    //marcas carros
    this.todasLasMarcasVehiculos = this.conectarServicio.getMarcasVehiculos();
    console.log(this.todasLasMarcasVehiculos)
      

    //precio auto
  
  }
  

  marcaSeleccionada( evento: any){
    
    this.mostrarResultadoImpuesto = false;

    const marca     = evento.target as HTMLSelectElement;
    this.marcaSelec = marca.value;

    console.log(this.marcaSelec)

  }
  



  departamentoSeleccionado( evento:any ){
    
    this.mostrarResultadoImpuesto = false;
    
    const departamento = evento.target as HTMLSelectElement;
    this.departamentSelect = departamento.value

  }
  

  precioCarro( evento:any ){  
      
     this.mostrarResultadoImpuesto = false;

      const ingresarAinput = evento.target as HTMLInputElement;
      const valorAuto = ingresarAinput.value;

      console.log(valorAuto)
        
      const entero = parseInt(valorAuto, 10);

      this.calcular( entero )
           
  }


  calcular(entero:any){
    if( (entero > 0) && (entero <=  54057000) ){
         
      let total = entero * 0.015
      this.precioImpuesto = total.toLocaleString('es-ES');

      console.log(this.precioImpuesto)
     
    }

    else if( (entero >  54057000) && (entero < 121625000) ){
      
      let total = entero * 0.025
      this.precioImpuesto = total.toLocaleString('es-ES')

    }

    else if(entero >  121625000 ){
        
      let total = entero * 0.035
      this.precioImpuesto = total.toLocaleString('es-ES')
    
    }
  }
    
  
  verPantallaImpuesto(){


    if(this.marcaSelec == null){
      
      alert("falta la marca")
    
    }else if( this.departamentSelect == null){
      
      alert("falta el departamento")
    
    }else if(this.precioImpuesto == null){

      alert("falta el precio");
    
    }else{
  
      this.btnImpuesto = false;
      this.mostrarResultadoImpuesto = true;
    }
  
  }
  

  OtraBusqueda(){
    
    this.mostrarResultadoImpuesto = false;
    this.btnImpuesto = true;



    this.selectedMarca = null; // Reinicia el valor del select marca
    this.depatamentoInicial = null // Reiniciar valor departamento
    this.resetiarPrecio = ""
  
    this.placa = ""
  }

  volver(){
  
    this.location.back();
    
  }





  consultarPorPlaca(){
    
    this.conectarServicio.consultarPlaca( this.placa )
      
    .subscribe(  ( resp:any )  => {
        console.log(resp);
        
        //ejecutar precio funcion impuesto
        this.calcular( resp.resultadoDB.precio );
        this.btnImpuesto = false;
        this.mostrarResultadoImpuesto = true;
        

        this.marcaSelec = resp.resultadoDB.marcaVehiculo + " " + resp.resultadoDB.modeloVechiculo
        
        
      
      }, (error => {
        
        alert(error.error.mensaje);

      }))
    //servicio de consulta
  }

}
