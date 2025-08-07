import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  botonLogin:boolean = true;
  botonPerfil:boolean = false;
  

  mostrarMenuPrincipal = true;




  constructor(){

     if (window.innerWidth < 768) {
          
          this.mostrarMenuPrincipal = false;
      }

  }



  ngOnInit(): void {
    
    if( localStorage.getItem('Token') ){
        
      this.botonLogin  = false;
      this.botonPerfil = true;
    }

  }


  mostrarMenu(){
  

      if (window.innerWidth < 768) {
          
          this.mostrarMenuPrincipal = true;
      }

  }

}
