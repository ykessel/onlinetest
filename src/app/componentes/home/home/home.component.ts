import { Component, OnInit } from '@angular/core';
import { CaracteristicasService } from 'src/app/services/caracteristicas/caracteristicas.service';
import { PagosService } from 'src/app/services/pagos/pagos.service';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';

@Component({
  selector: 'bipay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Secciones: any[] = [];
  Caracteristicas: any[] = [];
  Pagos: any[] = [];

  constructor(private seccionesService: SeccionesService, private pagosService: PagosService, private caracteristicasService: CaracteristicasService) { }

  ngOnInit(): void {
    this.getSecciones()
    this.getCaracteristicas()
    this.getPagos()
  }

  mySlideImages = ['../assets/banner.png','../assets/banner.png','../assets/banner.png'];
  myCarouselImages =['../assets/banner.png','../assets/banner.png','../assets/banner.png'];

  mySlideOptions={items: 1, dots: true, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true};

  getSecciones() {
    this.seccionesService.getSecciones()
      .subscribe(s => {
        this.Secciones = s;
        console.log("Secciones", s)
      });
  }

  getCaracteristicas() {
    this.caracteristicasService.getCaracteristicas()
      .subscribe(s => {
        this.Caracteristicas = s
        console.log("Caracteristicas", s)
      });
  }

  getPagos() {
    this.pagosService.getPagos()
      .subscribe(s => {
        this.Pagos = s;
        console.log("Pagos", s)
      });
  }

}
