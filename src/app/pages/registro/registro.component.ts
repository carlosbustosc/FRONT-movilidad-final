import { Component, OnInit } from '@angular/core';

//conectar servicios
import { MovilidadService } from "../../servicios/movilidad.service"

//usar ruta
import { Router } from "@angular/router"

//location para volver
import { Location } from "@angular/common"

//insertarFormGroup
import { FormGroup, FormBuilder } from "@angular/forms"

// insertamos Validator para validaciones
import { Validators } from '@angular/forms'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {
  
  departamentos:any = [];
  ciudades:any = [];
  

  formularioRegistro:FormGroup;


  constructor(private locacion: Location, private usarRuta: Router, private conectarServicio:MovilidadService, private fb:FormBuilder ){

    //construir formulario
    this.formularioRegistro = this.fb.group({
        
      tipoDocumento :  ["" , Validators.required ],
      numeroCedula :   ["", Validators.required ],
      fecha :          ["", Validators.required ],
      nombre:          ["", Validators.required ],
      genero :         ["", Validators.required ],
      correo:          ["", Validators.required ],
      pass:            ["", Validators.required ],
      pass2:           ["", Validators.required ],
      numCedula:       ["", Validators.required ],
      fechaExpedicion: ["", Validators.required ],
      apellido:        ["", Validators.required ], 
      RH:              ["", Validators.required ],
      grupoSanguineo:  ["", Validators.required ],
      departamento:    ["", Validators.required ],
      ciudad:          ["", Validators.required ]
    })

  }


     //Validaciones visuales
   
     get tipoDocumento(){

      return this.formularioRegistro.controls['tipoDocumento'].invalid && this.formularioRegistro.controls['tipoDocumento'].touched;
     
    }
  
    get numeroCedula(){
  
      return this.formularioRegistro.controls['numeroCedula'].invalid && this.formularioRegistro.controls['numeroCedula'].touched;
  
    }
  
    get fecha(){
      
      return this.formularioRegistro.controls['fecha'].invalid &&  this.formularioRegistro.controls['fecha'].touched  
    }
  
    get nombre(){

      return this.formularioRegistro.controls['nombre'].invalid &&  this.formularioRegistro.controls['nombre'].touched  

    }

    get genero(){
      return this.formularioRegistro.controls['genero'].invalid &&  this.formularioRegistro.controls['genero'].touched  

    }

    get correo(){

      return this.formularioRegistro.controls['correo'].invalid && this.formularioRegistro.controls['correo'].touched
    }

    get pass1(){

      return this.formularioRegistro.controls['pass'].invalid && this.formularioRegistro.controls['pass'].touched;
    }

    get validarPass(){
        
      let pass1 = this.formularioRegistro.controls['pass'].value;
      let pass2 = this.formularioRegistro.controls['pass2'].value;
      
      if( pass1 === pass2 ){

        return false;

      }else{

        return true;
      }
        
    }

    get validarDocumento(){

      let numDocumento1 = this.formularioRegistro.controls['numeroCedula'].value;
      let numDocumento2 = this.formularioRegistro.controls['numCedula'].value;

      if( ( numDocumento1 != numDocumento2 ) && (this.formularioRegistro.controls['numCedula'].touched ) ){

        return true;
      
      }else{

        return false;
      }

    }
    

    get fechaExpedicion(){
  
      return this.formularioRegistro.controls['fechaExpedicion'].invalid && this.formularioRegistro.controls['fechaExpedicion'].touched;
    
    }

    get apellido(){

      return this.formularioRegistro.controls['apellido'].invalid && this.formularioRegistro.controls['apellido'].touched
    }

    get RH(){
      
      return this.formularioRegistro.controls['RH'].invalid && this.formularioRegistro.controls['RH'].touched
    }

    get grupoSanguineo(){

      return this.formularioRegistro.controls['grupoSanguineo'].invalid && this.formularioRegistro.controls['grupoSanguineo'].touched

    }

    get departamento(){

      return this.formularioRegistro.controls['departamento'].invalid && this.formularioRegistro.controls['departamento'].touched

    }

    get ciudad(){

      return this.formularioRegistro.controls['ciudad'].invalid && this.formularioRegistro.controls['ciudad'].touched

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
  
  



    



  registrarUsuario(){

    console.log( this.formularioRegistro )

    if( this.formularioRegistro.invalid ){
  
      Object.values( this.formularioRegistro.controls ).forEach( campos => {
          
        campos.markAsTouched();

      })

    }else{
        
      //console.log( this.formularioRegistro.value );
      this.conectarServicio.registrarUsuario( this.formularioRegistro.value )  

    }
  }


}
