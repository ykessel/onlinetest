import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_base } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class CategoriasEnlaceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCategorias() {
    return this.http.post<any[]>(api_base + 'listar-categorias-enlace', this.httpOptions);
  }
}