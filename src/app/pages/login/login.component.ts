import { Component } from '@angular/core';

// usar location para volver
import { Location } from "@angular/common"


//---usar FormGroup----//
import { FormGroup, FormBuilder } from '@angular/forms';


//---importar VAlidator para las validaciones----//
import {  Validators } from '@angular/forms' 


//-------conectar servicios-----------//
import { MovilidadService } from 'src/app/servicios/movilidad.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  datosLogin:FormGroup

  constructor( private location: Location, private fb:FormBuilder, private conectarServicio:MovilidadService ){
    
    this.datosLogin = this.fb.group({
  
      numDocumento: ["", Validators.required ],
      pass: ["", Validators.required ]

    })

  }
  



  //------validacion visual--------//
  get numCedula(){

    return this.datosLogin.controls['numDocumento'].invalid && this.datosLogin.controls['numDocumento'].touched;
  
  }

  get pass(){

    return this.datosLogin.controls['pass'].invalid && this.datosLogin.controls['pass'].touched;
  
  }

  
  ingresar(){
      
    if( this.datosLogin.invalid ){

      Object.values( this.datosLogin.controls ).forEach( campos => {
        
        campos.markAsTouched();

      })
    
    }else{
        
      //console.log( this.datosLogin.value )

      this.conectarServicio.loginUsuario( this.datosLogin.value )

    }

  }





  volver(){
    
    this.location.back();
  }

}



