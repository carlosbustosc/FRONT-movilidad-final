import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { RegistroComponent } from './pages/registro/registro.component';


//importar HTTP CLIENT MODULE
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './pages/login/login.component';
import { ImpuestoComponent } from './pages/impuesto/impuesto.component'


//importar formularios template
import { FormsModule } from "@angular/forms";
import { RegistroVehiculoComponent } from './pages/registro-vehiculo/registro-vehiculo.component';
import { InternaServiciosComponent } from './pages/interna-servicios/interna-servicios.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TarjetaComponent,
    RegistroComponent,
    LoginComponent,
    ImpuestoComponent,
    RegistroVehiculoComponent,
    InternaServiciosComponent,
    TarifasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
