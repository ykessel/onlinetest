import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos/documentos.service';

@Component({
  selector: 'bipay-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {
  documentos: any[] = [];

  constructor(private documentosService: DocumentosService) { }

  ngOnInit(): void {
    this.getDocumentos()
  }

  getDocumentos() {
    this.documentosService.getDocumentos()
      .subscribe(s => {
        this.documentos = s
        console.log(s)
      });
  }

}
