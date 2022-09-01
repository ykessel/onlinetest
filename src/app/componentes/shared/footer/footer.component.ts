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

@Component({
  selector: 'bipay-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  lang: string = '';
  sociales$ = this.store.select(selectSociales);
  secciones$ = this.store.select(selectSecciones);
  asociados$ = this.store.select(selectAsociados);
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
  ) {}

  ngOnInit(): void {
    this.socialesService.getSociales()
    .subscribe((sociales) =>
      this.store.dispatch(getSociales({ sociales }))
    );

    this.asociadosService.getAsociados()
    .subscribe((asociados) =>
      this.store.dispatch(getAsociados({ asociados }))
    );

  }
}
