import { getAsociados } from './../../../store/asociados/asociados.actions';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AsociadosService } from 'src/app/services/asociados/asociados.service';
import { SocialesService } from 'src/app/services/sociales/sociales.service';
import { Store } from '@ngrx/store';
import {
  faFacebook,
  faGooglePlus,
  faFacebookMessenger,
  faInstagram,
  faTwitter,
  faYoutube,
  faTiktok,
  faLinkedin,
  faPinterest,
  faSnapchat,
  faReddit,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { getSociales } from 'src/app/store/sociales/sociales.actions';
import { selectSociales } from 'src/app/store/sociales/sociales.selectors';
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

@Component({
  selector: 'bipay-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  lang: string = '';
  asoc: any[]=  [];
  sociales$ = this.store.select(selectSociales);
  secciones$ = this.store.select(selectSecciones);
  asociados$ = this.store.select(selectAsociados);
  documentos$ = this.store.select(selectDocumentos);
  categorias$ = this.store.select(selectCategorias);
  contactos$ = this.store.select(selectContactos);
  enlaces$ = this.store.select(selectEnlaces);
  lang$ = this.store.select(selectLang).subscribe((l) => this.lang = l);
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faTiktok = faTiktok;
  faLinkedin = faLinkedin;
  faPinterest = faPinterest;
  faFacebookMessenger = faFacebookMessenger;
  faSnapchat = faSnapchat;
  faReddit = faReddit;
  faGooglePlus = faGooglePlus;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor(
    private store: Store,
    private socialesService: SocialesService,
    private asociadosService: AsociadosService,
    private documentosService: DocumentosService,
    private categoriasService: CategoriasEnlaceService,
    private contactosService: DatosContactoService,
    private enlacesService: EnlacesInteresService
  ) {}

  ngOnInit(): void {
    this.socialesService.getSociales()
    .subscribe((sociales) =>
      this.store.dispatch(getSociales({ sociales }))
    );

    this.asociadosService.getAsociados()
    .subscribe((asociados) =>{
      this.asoc = asociados;
      console.log(asociados);
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
