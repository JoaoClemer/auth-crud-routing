import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy, IFormCanDeactivate{

  id!:number;
  inscricao: Subscription = new Subscription;
  aluno:any;
  private formMudou: boolean = false;

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

  onInput(){

    this.formMudou = true;

  }

  podeDesativar(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair da página?')
    }

    return true;
  }

  ngOnDestroy(): void {

    this.inscricao.unsubscribe();
  }

}
