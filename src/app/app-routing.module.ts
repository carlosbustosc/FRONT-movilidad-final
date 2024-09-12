import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar Componentes
import { HomeComponent } from './pages/home/home.component'; 
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component'; 
import { ImpuestoComponent } from './pages/impuesto/impuesto.component';
import { RegistroVehiculoComponent } from './pages/registro-vehiculo/registro-vehiculo.component';
import { InternaServiciosComponent } from './pages/interna-servicios/interna-servicios.component';

import { TarifasComponent } from './pages/tarifas/tarifas.component';


const routes: Routes = [

  { path:"home", component: HomeComponent },
  { path:"registro", component:RegistroComponent },
  { path:"login", component: LoginComponent },
  { path:"impuesto", component: ImpuestoComponent },
  { path:"registroVehiculo", component: RegistroVehiculoComponent },
  { path:"interna", component: InternaServiciosComponent},
  { path:"tarifas", component: TarifasComponent },
  { path:"**", pathMatch:"full", redirectTo:"home" }
 
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
