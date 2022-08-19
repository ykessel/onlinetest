import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { CommonService } from 'src/app/services/system/common.service';
import { AsociadosService } from 'src/app/services/asociados/asociados.service';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';


@Component({
  selector: 'bipay-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lang: string = '';
  Idiomas: any[] = [];
  Asociados: any[] = [];
  Secciones: any[] = [];



  constructor(    private seccionesService: SeccionesService, private asociadosService: AsociadosService, private idiomasService: IdiomasService,
    private commonService: CommonService,) { }

  ngOnInit(): void {
    this.commonService.data$.subscribe(res => this.lang = res) 
    this.getIdiomas();
    this.getAsociadosService();
    this.getSecciones();
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


   getAsociadosService() {
    this.asociadosService.getAsociados().subscribe((s) => {
      this.Asociados = s.concat(s).concat(s);
      console.log('Asociados', s);
   });
}}