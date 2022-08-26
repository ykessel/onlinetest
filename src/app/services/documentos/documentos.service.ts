import { Documento } from 'src/app/models/documento.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import JsFileDownloader from 'js-file-downloader';
import { api_base } from '../../config/api';

@Injectable({
  providedIn: 'root',
})
export class DocumentosService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getDocumentos() {
    return this.http.post<Documento[]>(
      api_base + 'listar-documentos',
      this.httpOptions
    );
  }

  downloadDoc(url_doc: string) {
    new JsFileDownloader({
      url: url_doc,
    })
      .then(() => {
        console.log('Donwloaded', url_doc);
        // Called when download ended
      })
      .catch((error) => {
        // Called when an error occurred
        console.log('Something wrong happend', url_doc);
      });
  }
}
