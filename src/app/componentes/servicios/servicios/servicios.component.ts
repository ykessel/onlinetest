import { Component, OnInit } from "@angular/core";
import { IdiomasService } from "src/app/services/idiomas/idiomas.service";
import { CommonService } from "src/app/services/system/common.service";
import { ServiciosService } from "src/app/services/servicios/servicios.service";
import { SeccionesService } from "src/app/services/secciones/secciones.service";

@Component({
  selector: "bipay-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.scss"],
})
export class ServiciosComponent implements OnInit {
  documentos: any[] = [];
  Servicios: any[] = [];
  lang: string = "";
  Idiomas: any[] = [];
  Secciones: any[] = [];
  panelOpenState = true;
  isHide: boolean = true;
  idHide: string = '';
  textContent: string =
    "Aprobado por el Banco Central de Cuba y reconocido por otros organismos del estado como el Ministerio del Turismo, Ministerio. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";

  constructor(
    private serviciosService: ServiciosService,
    private seccionesService: SeccionesService,
    private idiomasService: IdiomasService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getSecciones();
    this.getIdiomas();
    this.getServicios();
    this.commonService.data$.subscribe(res => this.lang = res) 
  }

  hideAndShow(id: string) {
    // this.isHide = !this.isHide;
    this.idHide = id
    console.log(id)
  }

  hideElement(id: string) {
    if(this.idHide === id) {
      return true
    } else return false
  }

  getIdiomas() {
    this.idiomasService.getIdiomas().subscribe((s) => {
      this.Idiomas = s;
    });
  }

  getServicios() {
    this.serviciosService.getServicios().subscribe((s) => {
      this.Servicios = s;
      console.log("Servicios", s[0].contenidoEs);
    });
  }

  getSecciones() {
    this.seccionesService.getSecciones().subscribe((s) => {
      this.Secciones = s;
      // console.log("Secciones", );
    });
  }

  cleanText(text: string): string {
    return text.replace(/(<([^>]+)>)/gi, "");
  }
}
