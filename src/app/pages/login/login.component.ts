import { Component } from '@angular/core';

// usar location para volver
import { Location } from "@angular/common"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor( private location: Location){

  }
  


  volver(){
    
    this.location.back();
  }

}



