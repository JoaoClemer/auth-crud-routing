import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard.service';
import { AlunosGuards } from './alunos/guards/alunos.guards.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


const routes: Routes = [
  {path: 'cursos', loadChildren:()=> import('./cursos/cursos.module').then(mod=>mod.CursosModule), canActivate:[AuthGuard], canLoad:[AuthGuard]},
  {path: 'alunos', loadChildren:()=> import('./alunos/alunos.module').then(mod=>mod.AlunosModule), canActivate:[AuthGuard], canLoad:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: CursoNaoEncontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
