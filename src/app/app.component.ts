import { Component, OnInit } from '@angular/core';
import { SeccionesService } from './services/secciones/secciones.service';
import { Store } from '@ngrx/store';
import { selectSecciones } from 'src/app/store/secciones/secciones.selectors';
import { getSecciones } from 'src/app/store/secciones/secciones.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Bipay';
  secciones$ = this.store.select(selectSecciones);

  constructor(
    private store: Store,
    private seccionesService: SeccionesService
  ) {}

  ngOnInit(): void {
    this.seccionesService
      .getSecciones()
      .subscribe((secciones) =>
        this.store.dispatch(getSecciones({ secciones }))
      );
  }
}
