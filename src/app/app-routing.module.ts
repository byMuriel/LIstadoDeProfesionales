import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Aqui importo los componentes que he creado para poder enrutarlos luego
import { InicioComponent } from './build/inicio/inicio.component';
import { LoUltimoComponent } from './build/lo-ultimo/lo-ultimo.component';
import { ContactoComponent } from './build/contacto/contacto.component';
import { PortafolioComponent } from './build/portafolio/portafolio.component';
import { AgregarProfesionalComponent } from './build/agregar-profesional/agregar-profesional.component';
import { EditarProfesionalComponent } from './build/editar-profesional/editar-profesional.component';
import { AdminPortafolioComponent } from './build/admin-portafolio/admin-portafolio.component';
import { AdminNoticiasComponent } from './build/admin-noticias/admin-noticias.component';
import { SistemaComponent } from './build/sistema/sistema.component';

//Este es un array donde añadimos las rutas como objetos con key path y component
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },//revisar si da error
  { path: '', component: InicioComponent },
  { path: 'lo-ultimo', component: LoUltimoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'agregar-profesional', component: AgregarProfesionalComponent },
  { path: 'editar-profesional/:id', component: EditarProfesionalComponent },
  { path: 'admin-portafolio', component: AdminPortafolioComponent },
  { path: 'admin-noticias', component: AdminNoticiasComponent },
  { path: 'sistema', component: SistemaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }