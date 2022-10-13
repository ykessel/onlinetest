import { Seccion } from './../../models/seccion.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_base } from '../../config/api';
import { Store } from '@ngrx/store';
import { selectSecciones } from 'src/app/store/secciones/secciones.selectors';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeccionesService {
  rutas: Seccion[] = [];
  secciones$ = this.store
    .select(selectSecciones)
    .subscribe((secciones) => (this.rutas = [...secciones]));
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getSecciones() {
    return this.http.post<any[]>(
      api_base + 'listar-secciones',
      this.httpOptions
    );
  }

  isActive(id: number): boolean {
    if (this.rutas.filter((x) => x.id == id).length > 0) {
      if (this.rutas.filter((x) => x.id == id)[0].activo) {
        return true;
      }
    }
    this.router.navigate(['']);
    return false;
  }
}
