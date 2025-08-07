import { Component } from '@angular/core';

// usar location para volver
import { Location } from "@angular/common"


//---usar FormGroup----//
import { FormGroup, FormBuilder } from '@angular/forms';


//---importar VAlidator para las validaciones----//
import {  Validators } from '@angular/forms' 


//-------conectar servicios-----------//
import { MovilidadService } from 'src/app/servicios/movilidad.service';


//---importar Router----//
import { Router } from "@angular/router"



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  datosLogin:FormGroup

  constructor( private location: Location, private fb:FormBuilder, private conectarServicio:MovilidadService, private usarRuta: Router ){
    
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
          .subscribe(resp => {
  
       

            console.log(resp);

            setTimeout( () => {
                this.usarRuta.navigate(['/interna']);
            }, 2000)

            //ingreso a la interna
            localStorage.setItem('cedula', resp.respUnRegistro.numeroCedula );
            localStorage.setItem('nombre', resp.respUnRegistro.nombre);
            localStorage.setItem('correo', resp.respUnRegistro.correo);
  

            
           

          
          }, (error) => {

            console.log(error.error.mensaje);
            
            if(error.error.mensaje == "No existe el usuario con este documento"){

              alert("El usuario no existe")
            }

            if(error.error.mensaje == "la contraseña no es correcta"){

              alert("la contraseña es incorrecta");
            
            }
          
          })

    }

  }





  volver(){
    
    this.location.back();
  }

}



