import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { setCurrentExpandedService } from "./../../../store/system/system.actions";
import { ServiciosService } from "src/app/services/servicios/servicios.service";
import { Store } from "@ngrx/store";
import { selectSecciones } from "src/app/store/secciones/secciones.selectors";
import { selectServicios } from "src/app/store/servicios/servicios.selectors";
import { getServicios } from "src/app/store/servicios/servicios.actions";
import {
  selectLang,
  selectServiceId,
} from "src/app/store/system/system.selectors";
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from "@angular/animations";

@Component({
  selector: "bipay-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("animationShowHide", [
      state("close", style({ height: "25vh", overflow: "hidden" })),
      state("open", style({ height: "*", overflow: "hidden" })),
      transition("close <=> open", animate("1.5s ease-in-out")),
    ]),
    trigger("animationRotate", [
      state("close", style({ transform: "rotate(0)" })),
      state("open", style({ transform: "rotate(-180deg)" })),
      transition("open <=> close", animate("1.5s ease-in-out")),
    ]),
  ],
})
export class ServiciosComponent implements OnInit {
  secciones$ = this.store.select(selectSecciones);
  servicios$ = this.store.select(selectServicios);
  lang: string = "";
  isHide: boolean = true;
  idHide: number = 0;
  sid: number = 0;
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));
  serviceId$ = this.store
    .select(selectServiceId)
    .subscribe((l) => (this.sid = l));

  constructor(
    private store: Store,
    private serviciosService: ServiciosService
  ) {}

  ngOnInit(): void {
    this.serviciosService
      .getServicios()
      .subscribe((servicios) =>
        this.store.dispatch(getServicios({ servicios }))
      );
  }

  hideAndShow(serviceId: number) {
    if (this.sid === serviceId) {
      this.store.dispatch(setCurrentExpandedService({ serviceId: 0 }));
    } else {
      this.store.dispatch(setCurrentExpandedService({ serviceId }));
    }
  }
}
