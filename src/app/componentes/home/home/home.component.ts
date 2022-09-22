import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { selectBanners } from "./../../../store/banners/banners.selectors";
import { getCaracteristicas } from "./../../../store/caracteristicas/caracteristicas.actions";
import { selectCaracteristicas } from "./../../../store/caracteristicas/caracteristicas.selectors";
import { selectPagos } from "./../../../store/pagos/pagos.selectors";
import { CaracteristicasService } from "src/app/services/caracteristicas/caracteristicas.service";
import { PagosService } from "src/app/services/pagos/pagos.service";
import { OwlOptions } from "ngx-owl-carousel-o";
import { CommonService } from "src/app/services/system/common.service";
import { PotencialidadesService } from "src/app/services/potencialidades/potencialidades.service";
import { BannersService } from "src/app/services/banners/banners.service";
import { AsociadosService } from "src/app/services/asociados/asociados.service";
import { Store } from "@ngrx/store";
import { selectSecciones } from "src/app/store/secciones/secciones.selectors";
import { getBanners } from "src/app/store/banners/banners.actions";
import { getPotencialidades } from "src/app/store/potencialidades/potencialidades.actions";
import { selectPotencialidades } from "src/app/store/potencialidades/potencialidades.selectors";
import { selectServicios } from "src/app/store/servicios/servicios.selectors";
import { getPagos } from "src/app/store/pagos/pagos.actions";
import { selectLang } from "src/app/store/system/system.selectors";

@Component({
  selector: "bipay-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  lang: string = "";
  totalCaract: number = 0;
  totalPoten: number = 0;
  secciones$ = this.store.select(selectSecciones);
  servicios$ = this.store.select(selectServicios);
  potencialidades$ = this.store.select(selectPotencialidades);
  pagos$ = this.store.select(selectPagos);
  caracteristicas$ = this.store.select(selectCaracteristicas);
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));

  constructor(
    private store: Store,
    private pagosService: PagosService,
    private caracteristicasService: CaracteristicasService,
    private potencialidadesService: PotencialidadesService,
    private bannersService: BannersService
  ) {}

  ngOnInit(): void {
    this.bannersService
      .getBanners()
      .subscribe((banners) => this.store.dispatch(getBanners({ banners })));

    this.potencialidadesService
      .getPotencialidades()
      .subscribe((potencialidades) => {
        this.totalPoten = potencialidades.length;
        this.store.dispatch(getPotencialidades({ potencialidades }));
      });

    this.caracteristicasService
      .getCaracteristicas()
      .subscribe((caracteristicas) => {
        this.totalCaract = caracteristicas.length;
        this.store.dispatch(getCaracteristicas({ caracteristicas }));
      });

    this.pagosService
      .getPagos()
      .subscribe((pagos) => this.store.dispatch(getPagos({ pagos })));
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ["", ""],
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
      },
      1920: {
        items: 3,
      },
      2000: {
        items: 3,
      },
    },
    nav: false,
  };

  customOptions2: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ["", ""],
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
        items: 4,
      },
      1366: {
        items: 4,
      },
      1920: {
        items: 4,
      },
      2000: {
        items: 4,
      },
    },
    nav: false,
  };

  customOptions3: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ["", ""],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      760: {
        items: 3,
      },
      1024: {
        items: 4,
      },
      1366: {
        items: 5,
      },
      1920: {
        items: 6,
      },
      2000: {
        items: 7,
      },
    },
    nav: false,
  };
}
