import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SocialesService } from 'src/app/services/sociales/sociales.service';
import { selectSociales } from 'src/app/store/sociales/sociales.selectors';
import { getSociales } from 'src/app/store/sociales/sociales.actions';
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

@Component({
  selector: 'bipay-sociales',
  templateUrl: './sociales.component.html',
  styleUrls: ['./sociales.component.scss']
})
export class SocialesComponent implements OnInit {
  sociales$ = this.store.select(selectSociales);
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

  constructor(   private store: Store,
    private socialesService: SocialesService) { }

  ngOnInit(): void {
    this.socialesService.getSociales()
    .subscribe((sociales) =>
      this.store.dispatch(getSociales({ sociales }))
    );
  }

}
