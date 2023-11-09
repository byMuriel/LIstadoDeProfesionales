import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
//Importamos el servicio que hemos creado para agregar los datos
import { CrudService } from 'src/app/service/crud.service';
//queremos redireccionar a las listas una vez agueguemos un profesional
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-profesional',
  templateUrl: './agregar-profesional.component.html',
  styleUrls: ['./agregar-profesional.component.css']
})

export class AgregarProfesionalComponent {
  formularioProfesionales: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private CrudService: CrudService,
    private ruteador: Router
  ) {
    this.formularioProfesionales = this.formulario.group({
      id: [''],
      nombre: [''],
      correo: ['']
    })
  }

  enviarDatos(): any {
    //aqui le pasamos los datos servicio crudService especificamente al metodo AgregarProfesional con (this.formularioProfesionales.value) y es importante el metodo suscribe para hacer la isercion
    this.CrudService.AgregarProfesional(this.formularioProfesionales.value).subscribe(respuesta => {
      this.ruteador.navigateByUrl('/admin-portafolio');
    });
    //ahora volvemos a la lista de empleados del admin

  }
}