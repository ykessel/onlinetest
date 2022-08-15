import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { api_base } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class SocialesService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getSociales() {
    return this.http.post<any[]>(api_base + 'listar-redes-sociales', this.httpOptions);
  }
}
