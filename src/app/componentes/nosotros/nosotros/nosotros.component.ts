import { Component, OnInit } from "@angular/core";
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { CommonService } from 'src/app/services/system/common.service';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';

@Component({
  selector: "bipay-nosotros",
  templateUrl: "./nosotros.component.html",
  styleUrls: ["./nosotros.component.scss"],
})

export class NosotrosComponent implements OnInit {
  Secciones: any[] = [];
  lang: string = "";
  Idiomas: any[] = [];

  constructor(
    private seccionesService: SeccionesService,
    private idiomasService: IdiomasService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getSecciones();
    this.getIdiomas();
    this.commonService.data$.subscribe((res) => (this.lang = res));
  }

  getSecciones() {
    
    this.seccionesService.getSecciones().subscribe((s) => {
      this.Secciones = s;
      console.log("Secciones", s);
    });
  }

  getIdiomas() {
    this.idiomasService.getIdiomas().subscribe((s) => {
      this.Idiomas = s;
      console.log("Idiomas", s);
    });
  }
}
