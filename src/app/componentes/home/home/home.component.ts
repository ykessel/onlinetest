import { Component, OnInit } from '@angular/core';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';

@Component({
  selector: 'bipay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seccionesService: SeccionesService) { }

  ngOnInit(): void {
    this.getSecciones()
  }

  mySlideImages = ['../assets/banner.png','../assets/banner.png','../assets/banner.png'];
  myCarouselImages =['../assets/banner.png','../assets/banner.png','../assets/banner.png'];

  mySlideOptions={items: 1, dots: true, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true};

  getSecciones() {
    this.seccionesService.getSecciones()
      .subscribe(s => {
        console.log(s)
      });
  }

}
