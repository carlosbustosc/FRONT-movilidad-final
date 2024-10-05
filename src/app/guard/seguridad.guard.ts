import { inject } from '@angular/core';

import { CanActivateFn } from '@angular/router';


//----importamos servicios---//
import { MovilidadService } from '../servicios/movilidad.service';


//---importar router----//
import { Router } from "@angular/router"


export const seguridadGuard: CanActivateFn = (route, state) => {
  
  const conectarServicio = inject(MovilidadService);
  const usarRuta = inject(Router)

  if( conectarServicio.validarIngreso() ){
  
    return true;//dejelo entrar
  
  }else{
    
    usarRuta.navigate(['/login']);
    return false;//no lo deje entrar
   
  }

  
      
};
