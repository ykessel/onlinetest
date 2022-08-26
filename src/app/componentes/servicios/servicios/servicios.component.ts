import { Component, OnInit } from "@angular/core";
import { ServiciosService } from "src/app/services/servicios/servicios.service";
import { Store } from '@ngrx/store';
import { selectSecciones } from "src/app/store/secciones/secciones.selectors";
import { selectServicios } from "src/app/store/servicios/servicios.selectors";
import { getServicios } from "src/app/store/servicios/servicios.actions";
import { selectLang } from "src/app/store/system/system.selectors";

@Component({
  selector: "bipay-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.scss"],
})
export class ServiciosComponent implements OnInit {
  secciones$ = this.store.select(selectSecciones);
  servicios$ = this.store.select(selectServicios);
  lang: string = "";
  isHide: boolean = true;
  idHide: number = 0;
  textContent: string =
    "Aprobado por el Banco Central de Cuba y reconocido por otros organismos del estado como el Ministerio del Turismo, Ministerio. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
  lang$ = this.store.select(selectLang).subscribe((l) => this.lang = l);

  constructor(
    private store: Store,
    private serviciosService: ServiciosService,
  ) {}

  ngOnInit(): void {
    this.serviciosService.getServicios()
    .subscribe((servicios) =>
      this.store.dispatch(getServicios({ servicios }))
    );
  }

  hideAndShow(id: number) {
    // this.isHide = !this.isHide;
    this.idHide = id
    console.log(id)
  }

  hideElement(id: number) {
    if(this.idHide === id) {
      return true
    } else return false
  }

  cleanText(text: string): string {
    return text.replace(/(<([^>]+)>)/gi, "");
  }
}
