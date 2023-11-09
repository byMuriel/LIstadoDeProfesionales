import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
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
}