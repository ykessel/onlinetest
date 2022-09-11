import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSecciones } from 'src/app/store/secciones/secciones.selectors';
import { selectLang } from 'src/app/store/system/system.selectors';

@Component({
  selector: 'bipay-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss']
})
export class TerminosComponent implements OnInit {
  lang: string = '';
  secciones$ = this.store.select(selectSecciones);
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
