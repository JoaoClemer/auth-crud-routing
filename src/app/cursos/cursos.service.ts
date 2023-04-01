import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return [
      {
        id:1,
        nome: 'Angular'},
      {
        id:2,
        nome: 'JavaScript'
      },
      {
        id:3,
        nome: '.NET'
      },
      {
        id:4,
        nome: 'SQL'
      },
      {
        id:5,
        nome: 'AWS'
      }
    ];
  }

  getCurso(id:number){
    let cursos = this.getCursos();
    for (let curso of cursos){
      if(curso.id == id){
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
