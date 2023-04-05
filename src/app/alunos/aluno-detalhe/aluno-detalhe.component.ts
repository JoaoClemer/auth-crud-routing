import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy{

  id!:number;
  inscricao: Subscription = new Subscription;
  aluno:any;



  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private alunosService: AlunosService){

  }

  editarContato(){

    this.router.navigate(['alunos', this.aluno.id, 'editar'])

  }

  ngOnInit(){

    this.inscricao = this.route.params.subscribe((params:any)=>{
      this.id = params['id'];

      this.aluno = this.alunosService.getAluno(this.id);

      if(this.aluno == null){
        this.router.navigate(['cursos/naoEncontrado'])
      }

    });

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
