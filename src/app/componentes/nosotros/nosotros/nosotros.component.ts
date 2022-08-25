import { Component, OnInit } from "@angular/core";
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { CommonService } from 'src/app/services/system/common.service';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';
import { Store } from '@ngrx/store';
import { getSecciones } from './../../../store/secciones/secciones.actions';
import { selectSecciones } from './../../../store/secciones/sercciones.selectors';
@Component({
  selector: "bipay-nosotros",
  templateUrl: "./nosotros.component.html",
  styleUrls: ["./nosotros.component.scss"],
})
export class NosotrosComponent implements OnInit {
  lang: string = "";
  Idiomas: any[] = [];
  secciones$ = this.store.select(selectSecciones);

  constructor(
    private store: Store,
    private seccionesService: SeccionesService,
    private idiomasService: IdiomasService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.seccionesService.getSecciones()
    .subscribe((secciones) => this.store.dispatch(getSecciones({ secciones })));
    this.getIdiomas();
    this.commonService.data$.subscribe((res) => (this.lang = res));
  }

  getIdiomas() {
    this.idiomasService.getIdiomas().subscribe((s) => {
      this.Idiomas = s;
      console.log("Idiomas", s);
    });
  }
}
