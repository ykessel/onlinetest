import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { DocumentosService } from 'src/app/services/documentos/documentos.service';
import { selectDocumentos } from 'src/app/store/documentos/documentos.selectors';
import { getDocumentos } from 'src/app/store/documentos/documentos.actions';
import { selectSecciones } from 'src/app/store/secciones/secciones.selectors';
import { selectLang } from 'src/app/store/system/system.selectors';

@Component({
  selector: 'bipay-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DocumentosComponent implements OnInit {
  secciones$ = this.store.select(selectSecciones);
  documentos$ = this.store.select(selectDocumentos);
  lang: string = '';
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));

  constructor(
    private store: Store,
    private documentosService: DocumentosService
  ) { }

  ngOnInit(): void {
    this.documentosService
      .getDocumentos()
      .subscribe((documentos) => {

        this.store.dispatch(getDocumentos({ documentos }))
      }
      );
  }

  downloadDoc(url_doc: string) {
    this.documentosService.downloadDoc(url_doc);
  }
}
