import { Component, OnInit } from '@angular/core';
import { IdiomasService } from './services/idiomas/idiomas.service';
import { CommonService } from './services/system/common.service';
import { SeccionesService } from './services/secciones/secciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bipay-frontend-personal';
  Secciones: any[] = [];
  Idiomas: any[] = [];
  lang: string = '';


  constructor(private commonService: CommonService, private idiomasService: IdiomasService, private seccionesService: SeccionesService,) {}


  ngOnInit(): void {
    this.getIdiomas()
    this.getSecciones();
    this.commonService.data$.subscribe(res => this.lang = res)
  }

   getIdiomas() {
    this.idiomasService.getIdiomas()
    .subscribe(s => {
      this.Idiomas = s;
      console.log("Idiomas", s)
    });
  }

  getSecciones() {
    this.seccionesService.getSecciones().subscribe((s) => {
      this.Secciones = s;
      console.log('Secciones', s);
    });
  }

  changeLang(value: string) {
    this.commonService.changeData(value);
    console.log(value)
  }
}
