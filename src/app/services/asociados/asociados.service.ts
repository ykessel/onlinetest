import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asociado } from 'src/app/models/asociado.model';
import { api_base } from '../../config/api';

@Injectable({
  providedIn: 'root',
})
export class AsociadosService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAsociados() {
    return this.http.post<Asociado[]>(
      api_base + 'listar-asociados',
      this.httpOptions
    );
  }
}
