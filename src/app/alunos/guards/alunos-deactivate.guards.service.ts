import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  constructor() { }

  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>|boolean{

      return component.podeDesativar();
  }
}
