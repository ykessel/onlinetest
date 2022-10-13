import { Seccion } from './../models/seccion.model';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSecciones } from 'src/app/store/secciones/secciones.selectors';
// import { Seccion } from '../models/seccion.model';

@Injectable({
  providedIn: 'root'
})
export class RutaAccesoGuard implements CanActivate {
  rutas: any;

  secciones$ = this.store.select(selectSecciones).subscribe((l) => (this.rutas = l));
  tree: UrlTree =  this.router.parseUrl('/');
  constructor(
    private store: Store,
    private router: Router,
    private seccionesService: SeccionesService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(route);
      return this.seccionesService.isActive(route.data['id']);
  }

}
