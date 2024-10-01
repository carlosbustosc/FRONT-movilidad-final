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

import { ReactiveFormsModule } from '@angular/forms';

import { RegistroVehiculoComponent } from './pages/registro-vehiculo/registro-vehiculo.component';
import { InternaServiciosComponent } from './pages/interna-servicios/interna-servicios.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { PasoApasoComponent } from './pages/paso-apaso/paso-apaso.component';
import { InternaPasoComponent } from './pages/interna-paso/interna-paso.component'

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
    TarifasComponent,
    PasoApasoComponent,
    InternaPasoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
