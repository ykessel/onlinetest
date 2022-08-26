import { Component, OnInit } from '@angular/core';
import { CaracteristicasService } from 'src/app/services/caracteristicas/caracteristicas.service';
import { PagosService } from 'src/app/services/pagos/pagos.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { CommonService } from 'src/app/services/system/common.service';
import { PotencialidadesService } from 'src/app/services/potencialidades/potencialidades.service'
import { BannersService } from 'src/app/services/banners/banners.service';
import { AsociadosService } from 'src/app/services/asociados/asociados.service';
import { Store } from '@ngrx/store';
import { selectSecciones } from 'src/app/store/secciones/secciones.selectors';

@Component({
  selector: 'bipay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Caracteristicas: any[] = [];
  Pagos: any[] = [];
  lang: string = '';
  Idiomas: any[] = [];
  Potencialidades: any[] = [];
  Banners: any[] = [];
  secciones$ = this.store.select(selectSecciones);

  constructor(
    private store: Store,
    private pagosService: PagosService,
    private caracteristicasService: CaracteristicasService,
    private idiomasService: IdiomasService,
    private commonService: CommonService,
    private potencialidadesService: PotencialidadesService,
    private bannersService: BannersService,
  ) {}

  ngOnInit(): void {
    this.getBannersService();
    this.getCaracteristicas();
    this.getPagos();
    this.getIdiomas();
    this.getPotencialidades();
    this.commonService.data$.subscribe(res => this.lang = res)
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      760: {
        items: 1,
      },
      1024: {
        items: 3,
      },
      1366: {
        items: 3,
      }
    },
    nav: false,
  };

 getBannersService() {
    this.bannersService.getBanners().subscribe((s) => {
      this.Banners = s;
    });
  }

  getPotencialidades() {
    this.potencialidadesService.getPotencialidades().subscribe((s) => {
      this.Potencialidades = s;
    });
  }

  getCaracteristicas() {
    this.caracteristicasService.getCaracteristicas().subscribe((s) => {
      this.Caracteristicas = s.concat(s).concat(s).concat(s);
    });
  }

  getPagos() {
    this.pagosService.getPagos().subscribe((s) => {
      let f = s;
      let r = s;
      this.Pagos = f.concat(r);
    });
  }

  getIdiomas() {
    this.idiomasService.getIdiomas()
    .subscribe(s => {
      this.Idiomas = s;
    });
  }
}
