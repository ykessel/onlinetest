import { Component, OnInit } from "@angular/core";
import { DocumentosService } from "src/app/services/documentos/documentos.service";
import { IdiomasService } from "src/app/services/idiomas/idiomas.service";
import { CommonService } from "src/app/services/system/common.service";
import { SeccionesService } from "src/app/services/secciones/secciones.service";
import JsFileDownloader from 'js-file-downloader';

@Component({
  selector: "bipay-documentos",
  templateUrl: "./documentos.component.html",
  styleUrls: ["./documentos.component.scss"],
})
export class DocumentosComponent implements OnInit {
  documentos: any[] = [];
  Secciones: any[] = [];
  lang: string = "";
  Idiomas: any[] = [];

  constructor(
    private documentosService: DocumentosService,
    private seccionesService: SeccionesService,
    private idiomasService: IdiomasService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getSecciones();
    this.getIdiomas();
    this.getDocumentos();
    this.commonService.data$.subscribe((res) => (this.lang = res));
  }

  getDocumentos() {
    this.documentosService.getDocumentos().subscribe((s) => {
      this.documentos = s;
      console.log("Documentos", s);
    });
  }

  getIdiomas() {
    this.idiomasService.getIdiomas().subscribe((s) => {
      this.Idiomas = s;
      console.log("Idiomas", s);
    });
  }

  getSecciones() {
    this.seccionesService.getSecciones().subscribe((s) => {
      this.Secciones = s;
      console.log("Secciones", s);
    });
  }

  downloadDoc(url_doc: string) {
    new JsFileDownloader({ 
    url: url_doc
  })
  .then(() => {
    console.log("Donwloaded", url_doc);
    // Called when download ended
  })
  .catch((error) => {
    // Called when an error occurred
     console.log("Somthing wrong happend", url_doc);
  });
  }
}
