import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importamos las dependencias que nos permitiran manejar los formularios e interactuar
//con las API y para poder acceder a su utilizacion los debemos declarar tambien 
//en el imports de  @NgModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './build/cabecera/cabecera.component';
import { FooterComponent } from './build/footer/footer.component';
import { PortafolioComponent } from './build/portafolio/portafolio.component';
import { LoUltimoComponent } from './build/lo-ultimo/lo-ultimo.component';
import { ContactoComponent } from './build/contacto/contacto.component';
import { InicioComponent } from './build/inicio/inicio.component';
import { AgregarProfesionalComponent } from './build/agregar-profesional/agregar-profesional.component';
import { EditarProfesionalComponent } from './build/editar-profesional/editar-profesional.component';
import { AdminPortafolioComponent } from './build/admin-portafolio/admin-portafolio.component';
import { SistemaComponent } from './build/sistema/sistema.component';
import { AdminNoticiasComponent } from './build/admin-noticias/admin-noticias.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    PortafolioComponent,
    LoUltimoComponent,
    ContactoComponent,
    InicioComponent,
    AgregarProfesionalComponent,
    EditarProfesionalComponent,
    AdminPortafolioComponent,
    SistemaComponent,
    AdminNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
