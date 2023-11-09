import { Injectable } from '@angular/core';
//Importamos el client para comunicarnos con la api con ajax
import { HttpClient } from '@angular/common/http';
//Requerimos tambien un observable para monitoriar constantemente lo que ocurre con la info
import { Observable } from 'rxjs';
//Tambien importaremos el modelo que hemos creado con nombre profesional que contiene
//la estructura en typescript los datos que se van a enviar
import { Profesional } from './Profesional';
//import { AgregarProfesionalComponent } from '../build/agregar-profesional/agregar-profesional.component';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  //Declaramos la API
  //API: string = "http://localhost/PortafolioProfesionales/index.php";
  API: string = "http://localhost/PortafolioProfesionales/"; // es una api hecha con php crudo

  //en el constructor inyecto el modulo http
  constructor(private clienteHTTP: HttpClient) { }

  AgregarProfesional(datosProfesional: Profesional): Observable<any> {
    return this.clienteHTTP.post(this.API + "?insertar=1", datosProfesional);
  }
  ObtenerListadoDeProfesionales() {
    return this.clienteHTTP.get(this.API);
  }
  BorrarProfesional(id: any): Observable<any> {
    return this.clienteHTTP.get(this.API + "?borrar=" + id);
  }
  ObtenerProfesional(id: any): Observable<any> {
    return this.clienteHTTP.get(this.API + "?consultar=" + id);
  }
  EditarProfesional(id: any, datosProfesional: any): Observable<any> {
    return this.clienteHTTP.post(this.API + "?actualizar=" + id, datosProfesional);
  }
}