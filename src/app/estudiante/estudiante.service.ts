import { Injectable } from '@angular/core';
import { resolve } from 'q';

let estudiantes = [
  { _id: 1, title: 'Install Angular CLI', isDone: true },
  { _id: 2, title:'Style app', isDone: true },
  { _id: 3, title: 'Finish service functionality', isDone: false },
  { _id: 4, title: 'Setup API', isDone: false },
];


@Injectable()
export class EstudianteService {

  constructor() { }

  get(query = ''){
    return new Promise(resolve => {
      var data;

      if(query === 'completed' || query === 'active'){
        var isCompleted = query === 'completed';
        data = estudiantes.filter(todo =>todo.isDone === isCompleted);
 
     }else{
       data = estudiantes;
     }
     resolve(data);
    });
    
  }

  add(data){
    return new Promise(resolve => {
      estudiantes.push(data);
      resolve(data);
    } );
  }

  put(data){
    return new Promise(resolve => {
      let index = estudiantes.findIndex(estudiante => estudiante._id === data._id);
    });
  }

  delete(id){
    return new Promise(resolve => {
      let index = estudiantes.findIndex(estudiante => estudiante._id === id);
      estudiantes.splice(index, 1);
      resolve(true);
    });
  }

  deleteCompleted(){
    return new Promise(resolve => {
      estudiantes = estudiantes.filter(estudiante => !estudiante.isDone);
      resolve(estudiantes);
    });
  }

}
