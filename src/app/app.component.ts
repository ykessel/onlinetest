import { Component, OnInit } from "@angular/core";
import { IdiomasService } from "./services/idiomas/idiomas.service";
import { CommonService } from "./services/system/common.service";
import { SeccionesService } from "./services/secciones/secciones.service";
import { FormControl } from "@angular/forms";
import { AsociadosService } from "src/app/services/asociados/asociados.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})

export class AppComponent implements OnInit {
  title = "bipay-frontend-personal";
  Secciones: any[] = [];
  Idiomas: any[] = [];
  Asociados: any[] = [];
  lang: string = "";
  topNavSelected: number = 1;
  langControl = new FormControl("");
  flags_base: string =
    "https://purecatamphetamine.github.io/country-flag-icons/3x2/";

  constructor(
    private asociadosService: AsociadosService,
    private commonService: CommonService,
    private idiomasService: IdiomasService,
    private seccionesService: SeccionesService
  ) {}

  ngOnInit(): void {
    this.getIdiomas();
    this.getSecciones();
    this.getAsociadosService();
    this.commonService.data$.subscribe((res) => (this.lang = res));
  }

  getFlags(sigla: string) {
    let flag = this.flags_base + sigla.toUpperCase() + ".svg";
    if (sigla === "en") {
      return this.flags_base + "US" + ".svg";
    } else {
      return flag;
    }
  }

  setSelected(number: number) {
    this.topNavSelected = number;
  }

  getLinkStyle(number: number) {
    return this.topNavSelected === number ? "#353535" : "#ae0000";
  }

  getLineStyle(number: number) {
    return this.topNavSelected === number ? "visible" : "hidden";
  }

  getAsociadosService() {
    this.asociadosService.getAsociados().subscribe((s) => {
      this.Asociados = s.concat(s).concat(s);
    });
  }

  getIdiomas() {
    this.idiomasService.getIdiomas().subscribe((s) => {
      this.Idiomas = s;
    });
  }

  getSecciones() {
    this.seccionesService.getSecciones().subscribe((s) => {
      this.Secciones = s;
    });
  }

  changeLang(value: string) {
    this.commonService.changeData(value);
  }
  
}
