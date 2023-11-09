import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-admin-portafolio',
  templateUrl: './admin-portafolio.component.html',
  styleUrls: ['./admin-portafolio.component.css']

})

export class AdminPortafolioComponent {
  Profesionales: any;

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerListadoDeProfesionales().subscribe(respuesta => {
      console.log(respuesta);
      this.Profesionales = respuesta;
    });
  }
  borrarRegistro(id: any, iControl: any) {
    //console.log(id);
    //console.log(iControl);
    //con el consfirm mandamos un alert de confirmcion para proceder al borrado
    if (window.confirm("¿Desea borra el registro?")) {
      this.crudService.BorrarProfesional(id).subscribe(respuesta => {
        //si todo sale bien enviara una respuesta en la que aprovechamos para borrar la linea de la lista tambien
        this.Profesionales.splice(iControl, 1); //donde el 1 es el primer regisro que retorna
      });
    }

  }
}