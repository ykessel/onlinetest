import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { api_base } from '../../config/api';

type Contacto = {
  empresa: string;
  paginaWeb: string;
  numeroCarnet: string;
  correo: string;
  nombre: string;
  apellidos: string;
  telefono: string;
  suscripcion: string;
  terminosCondiciones: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormsService {


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  sendContacto(contacto: Contacto) {
    return this.http.post<Contacto>(api_base + 'enviar-datos-contacto', contacto, this.httpOptions);
  }

}
