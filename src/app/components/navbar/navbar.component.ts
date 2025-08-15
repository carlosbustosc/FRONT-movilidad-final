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
  num:any= 0;


  txtMenu:string = "Toque el logo para ver el menu"



  constructor(){

  }



  ngOnInit(): void {

     if (window.innerWidth < 768) {
          
          this.mostrarMenuPrincipal = false;
      }
      
    
    if( localStorage.getItem('Token') ){
        
      this.botonLogin  = false;
      this.botonPerfil = true;
    }

  }





  mostrarMenu(){


      if (window.innerWidth < 768) {
          
        if( this.num == 0){
            
          this.mostrarMenuPrincipal = true;
          this.num = 1;
          console.log(this.num)

          this.txtMenu = "Toque el logo para esconder el menu"

        }else{
          
          this.mostrarMenuPrincipal = false;
          this.num = 0
          console.log( this.num )

          this.txtMenu = "Toque el logo para ver el menu"

        }
          
      }

  }

}
