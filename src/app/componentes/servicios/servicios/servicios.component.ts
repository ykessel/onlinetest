import { Component, OnInit } from '@angular/core';
import { IdiomasService } from "src/app/services/idiomas/idiomas.service";
import { CommonService } from "src/app/services/system/common.service";
import { ServiciosService } from "src/app/services/servicios/servicios.service";
import { SeccionesService } from "src/app/services/secciones/secciones.service";


@Component({
  selector: 'bipay-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  documentos: any[] = [];
  Servicios: any[] = [];
  lang: string = "";
  Idiomas: any[] = [];
  Secciones: any[] = [];
  panelOpenState = true


  constructor(
    private serviciosService: ServiciosService,
    private seccionesService: SeccionesService,
    private idiomasService: IdiomasService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getIdiomas();
    this.getServicios();
  }

    getIdiomas() {
    this.idiomasService.getIdiomas().subscribe((s) => {
      this.Idiomas = s;
      console.log("Idiomas", s);
    });
  }

  getServicios() {
    this.serviciosService.getServicios().subscribe((s) => {
      this.Servicios = s;
      console.log("Servicios", s);
    });
  }

  getSecciones() {
    this.seccionesService.getSecciones().subscribe((s) => {
      this.Secciones = s;
      console.log("Secciones", s);
    });
  }

}
