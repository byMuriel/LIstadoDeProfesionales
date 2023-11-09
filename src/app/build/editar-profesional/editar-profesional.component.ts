import { Component, OnInit } from '@angular/core';

//FormGroup, FormBuilder me ayudan a recolectar la informacion y en este caso gestionar los controles del ususario
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-profesional',
  templateUrl: './editar-profesional.component.html',
  styleUrls: ['./editar-profesional.component.css']
})
export class EditarProfesionalComponent implements OnInit {

  formularioProfesionales: FormGroup;
  elId: any;
  //con snapshot capturamos un parametro
  //con paramMap indicamos el  nombre del parametro que nos esta enviando en formato get
  // dentro del conatructor estamos recepcionando el parametro id enviado por metodo get y lo  guardamos en la variable elId
  //con this.crudService.ObtenerProfesional(this.elId).subscribe(); enviamos el id al servicio crudService especidicamente al metodo ObtenerProfesioanl
  constructor(
    public formulario: FormBuilder,
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    private ruteador: Router
  ) {
    this.elId = this.activeRoute.snapshot.paramMap.get('id');

    console.log(this.elId);

    this.crudService.ObtenerProfesional(this.elId).subscribe(
      respuesta => {
        console.log(respuesta);
        //con esto vamos a asignar los valores ligados al id que estamos recibiendo en los campos del formulario a editar
        this.formularioProfesionales.setValue({
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo']
        });
        //hasta qui solo imprimimos los datos en la pantalla, ahora hay que recepcionarlos los que se mantienen igual y los que se han modificado para enviarlos a la base de datos
      });

    this.formularioProfesionales = this.formulario.group({
      nombre: [''],
      correo: ['']
    })
  }
  ngOnInit(): void {

  }

  enviarDatos(): any {
    console.log(this.elId);
    console.log(this.formularioProfesionales.value);
    this.crudService.EditarProfesional(this.elId, this.formularioProfesionales.value).subscribe(() => {
      this.ruteador.navigateByUrl('/admin-portafolio')
    });
  }
}
