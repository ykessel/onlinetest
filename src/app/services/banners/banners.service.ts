import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { api_base } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getBanners() {
    return this.http.post<any[]>(api_base + 'listar-soluciones-pago', this.httpOptions);
  }
}
