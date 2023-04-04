import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy{

  id!:number;
  inscricao: Subscription = new Subscription;
  aluno:any;

  constructor(
    private route:ActivatedRoute,
    private router : Router,
    private alunosService: AlunosService){

    }




  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe((params:any)=>{
      this.id = params['id'];

      this.aluno = this.alunosService.getAluno(this.id);

      if(this.aluno==null){
        this.router.navigate(['naoEncontrado'])
      }
    });

  }

  ngOnDestroy(): void {

    this.inscricao.unsubscribe();
  }

}
