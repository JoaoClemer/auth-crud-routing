import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosGuards } from '../guards/alunos.guards.service';

const routes: Routes = [
  {path: '', component:AlunosComponent,canActivateChild:[AlunosGuards] ,children: [
    {path: 'novo', component: AlunosFormComponent},
    {path: ':id', component:AlunoDetalheComponent},
    {path: ':id/editar', component: AlunosFormComponent}

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
