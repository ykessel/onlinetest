import { Component, OnInit } from "@angular/core";
import { DocumentosService } from "src/app/services/documentos/documentos.service";
import { IdiomasService } from "src/app/services/idiomas/idiomas.service";
import { CommonService } from "src/app/services/system/common.service";
import { SeccionesService } from "src/app/services/secciones/secciones.service";
import JsFileDownloader from 'js-file-downloader';
import { Store } from '@ngrx/store';
import { selectSecciones } from 'src/app/store/secciones/sercciones.selectors';

@Component({
  selector: "bipay-documentos",
  templateUrl: "./documentos.component.html",
  styleUrls: ["./documentos.component.scss"],
})
export class DocumentosComponent implements OnInit {
  secciones$ = this.store.select(selectSecciones);
  documentos: any[] = [];
  lang: string = "";
  Idiomas: any[] = [];

  constructor(
    private store: Store,
    private documentosService: DocumentosService,
    private idiomasService: IdiomasService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
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
