import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { selectIdiomas } from 'src/app/store/idiomas/idiomas.selectors';
import { getIdiomas } from 'src/app/store/idiomas/idiomas.actions';
import { selectLang } from 'src/app/store/system/system.selectors';
import { SetLang } from 'src/app/store/system/system.actions';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

@Component({
  selector: 'bipay-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class NavComponent implements OnInit {
  Idiomas: any[] = [];
  lang: string = '';
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));
  flags_base: string =
    'https://purecatamphetamine.github.io/country-flag-icons/3x2/';
  idiomas$ = this.store.select(selectIdiomas);
  location: Location;

  constructor(
    private store: Store,
    private idiomasService: IdiomasService,
    location: Location
  ) {
    this.location = location;
  }

  ngOnInit(): void {
    this.idiomasService
      .getIdiomas()
      .subscribe((idiomas) => this.store.dispatch(getIdiomas({ idiomas })));
  }

  getFlags(sigla: string) {
    let flag = this.flags_base + sigla.toUpperCase() + '.svg';
    if (sigla === 'en') {
      return this.flags_base + 'GB' + '.svg';
    } else {
      return flag;
    }
  }

  activeLink(link: string) {
    if(this.location.path() === link) {
      return true;
    } else {
      return false;
    }
  }

  changeLang(lang: string) {
    console.log(lang);
    this.store.dispatch(SetLang({ lang }));
  }
}
