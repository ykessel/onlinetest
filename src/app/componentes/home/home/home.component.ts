import { Component, OnInit } from '@angular/core';
import { CaracteristicasService } from 'src/app/services/caracteristicas/caracteristicas.service';
import { PagosService } from 'src/app/services/pagos/pagos.service';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { CommonService } from 'src/app/services/system/common.service';
import { PotencialidadesService } from 'src/app/services/potencialidades/potencialidades.service'

@Component({
  selector: 'bipay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Secciones: any[] = [];
  Caracteristicas: any[] = [];
  Pagos: any[] = [];
  lang: string = '';
  Idiomas: any[] = [];
  Potencialidades: any[] = [];

  constructor(
    private seccionesService: SeccionesService,
    private pagosService: PagosService,
    private caracteristicasService: CaracteristicasService,
    private idiomasService: IdiomasService,
    private commonService: CommonService,
    private potencialidadesService: PotencialidadesService,
  ) {}

  ngOnInit(): void {
    this.getSecciones();
    this.getCaracteristicas();
    this.getPagos();
    this.getIdiomas();
    this.getPotencialidades();
    this.commonService.data$.subscribe(res => this.lang = res) 
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
    nav: true,
  };

  mySlideImages = [
    '../assets/banner.png',
    '../assets/banner.png',
    '../assets/banner.png',
  ];
  myCarouselImages = [
    '../assets/banner.png',
    '../assets/banner.png',
    '../assets/banner.png',
  ];

  mySlideOptions = { items: 1, dots: true, nav: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  getPotencialidades() {
    this.potencialidadesService.getPotencialidades().subscribe((s) => {
      this.Potencialidades = s;
      console.log('Ptencias', s);
    });
  }

  getSecciones() {
    this.seccionesService.getSecciones().subscribe((s) => {
      this.Secciones = s;
      console.log('Secciones', s);
    });
  }

  getCaracteristicas() {
    this.caracteristicasService.getCaracteristicas().subscribe((s) => {
      this.Caracteristicas = s;
      console.log('Caracteristicas', s);
    });
  }

  getPagos() {
    this.pagosService.getPagos().subscribe((s) => {
      let f = s;
      let r = s;
      this.Pagos = s;
      console.log('Pagos', s);
    });
  }

  getIdiomas() {
    this.idiomasService.getIdiomas()
    .subscribe(s => {
      this.Idiomas = s;
      console.log("Idiomas", s)
    });
  }
}
