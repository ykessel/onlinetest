import { getAsociados } from './../../../store/asociados/asociados.actions';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsociadosService } from 'src/app/services/asociados/asociados.service';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { selectAsociados } from 'src/app/store/asociados/asociados.selectors';
import { selectSecciones } from 'src/app/store/secciones/secciones.selectors';
import { selectLang } from 'src/app/store/system/system.selectors';
import { DocumentosService } from 'src/app/services/documentos/documentos.service';
import { selectDocumentos } from 'src/app/store/documentos/documentos.selectors';
import { getDocumentos } from 'src/app/store/documentos/documentos.actions';
import { selectCategorias } from 'src/app/store/categorias/categorias.selectors';
import { selectContactos } from 'src/app/store/contactos/contactos.selectors';
import { selectEnlaces } from 'src/app/store/enlaces/enlaces.selectors';
import { EnlacesInteresService } from 'src/app/services/enlaces-interes/enlaces-interes.service';
import { DatosContactoService } from 'src/app/services/datos-contacto/datos-contacto.service';
import { CategoriasEnlaceService } from 'src/app/services/categorias-enlace/categorias-enlace.service';
import { getCategorias } from 'src/app/store/categorias/categorias.actions';
import { getContactos } from 'src/app/store/contactos/contactos.actions';
import { getEnlaces } from 'src/app/store/enlaces/enlaces.actions';
import {
  HashLocationStrategy,
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

@Component({
  selector: 'bipay-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class FooterComponent implements OnInit {
  lang: string = '';
  asoc: any[]=  [];
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  location: Location;
  secciones$ = this.store.select(selectSecciones);
  asociados$ = this.store.select(selectAsociados);
  documentos$ = this.store.select(selectDocumentos);
  categorias$ = this.store.select(selectCategorias);
  contactos$ = this.store.select(selectContactos);
  enlaces$ = this.store.select(selectEnlaces);
  lang$ = this.store.select(selectLang).subscribe((l) => this.lang = l);

  constructor(
    private store: Store,
    private asociadosService: AsociadosService,
    private documentosService: DocumentosService,
    private categoriasService: CategoriasEnlaceService,
    private contactosService: DatosContactoService,
    private enlacesService: EnlacesInteresService,
    location: Location
  ) {this.location = location;}

  ngOnInit(): void {
    this.asociadosService.getAsociados()
    .subscribe((asociados) =>{
      this.asoc = asociados;
      this.store.dispatch(getAsociados({ asociados }))}
    );

    this.documentosService
    .getDocumentos()
    .subscribe((documentos) =>
      this.store.dispatch(getDocumentos({ documentos }))
    );

    this.categoriasService.getCategorias()
    .subscribe((categorias) =>
      this.store.dispatch(getCategorias({ categorias }))
    );

    this.contactosService.getDatosContacto()
    .subscribe((contactos) =>
      this.store.dispatch(getContactos({ contactos }))
    );

    this.enlacesService.getEnlaces()
    .subscribe((enlaces) =>
      this.store.dispatch(getEnlaces({ enlaces }))
    );

  }
}
