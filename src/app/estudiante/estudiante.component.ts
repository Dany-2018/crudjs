import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from './estudiante.service'; 
import { get } from 'https';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
  providers: [EstudianteService]
})
export class EstudianteComponent implements OnInit {

  private estudiantes;
  private activateTasks;
  private newEstudiante;
  private path;

  constructor(private estudianteService: EstudianteService, private route:ActivatedRoute ) {

   }

    ngOnInit(){
    this.route.params.subscribe(params =>{
        this.path = params['status'];
      this.getEstudiantes(this.path);
    })
    
  }

  getEstudiantes(query = '') {
     return this.estudianteService.get(query).then(estudiantes =>{
      this.estudiantes = estudiantes;
      this.activateTasks = this.estudiantes.filter(estudiante => estudiante.isDone).length;
    });

  }

  addEstudiante(){
    this.estudianteService.add({ title: this.newEstudiante, isDone: false}).then(() => {
      return this.getEstudiantes();
    }).then(() => {
      this.newEstudiante = '';
    });
  }

  updateEstudiante(estudiante, newValue){
    estudiante.title = newValue;
    return this.estudianteService.put(estudiante).then(() =>{
      estudiante.editing = false;
      return this.getEstudiantes();

    });
  }

  destroyEstudiante(estudiante){
    this.estudianteService.delete(estudiante._id).then(() => {
      return this.getEstudiantes();
    });
  }

  clearCompleted(){
    this.estudianteService.deleteCompleted().then(() => {
      return this.getEstudiantes();
    });
  }

}
