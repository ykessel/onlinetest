import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { setCurrentExpandedService } from './../../../store/system/system.actions';
import { ServiciosService } from "src/app/services/servicios/servicios.service";
import { Store } from '@ngrx/store';
import { selectSecciones } from "src/app/store/secciones/secciones.selectors";
import { selectServicios } from "src/app/store/servicios/servicios.selectors";
import { getServicios } from "src/app/store/servicios/servicios.actions";
import { selectLang, selectServiceId } from "src/app/store/system/system.selectors";

@Component({
  selector: "bipay-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ServiciosComponent implements OnInit {
  secciones$ = this.store.select(selectSecciones);
  servicios$ = this.store.select(selectServicios);
  lang: string = '';
  isHide: boolean = true;
  idHide: number = 0;
  sid: number = 0;
  lang$ = this.store.select(selectLang).subscribe((l) => this.lang = l);
  serviceId$ = this.store.select(selectServiceId).subscribe((l) => this.sid = l);

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

  hideAndShow(serviceId: number) {
    if (this.sid === serviceId) {
      this.store.dispatch(setCurrentExpandedService({ serviceId: 0 }))
    } else {
      this.store.dispatch(setCurrentExpandedService({ serviceId }))
    }
    // this.isHide = !this.isHide;
    // this.idHide = id
    // console.log(id)
  }

  // hideElement(serviceId: number) {
  //   this.store.dispatch(setCurrentExpandedService({ serviceId }))
  //   // if(this.idHide === id) {
  //   //   return true
  //   // } else return false
  // }

  cleanText(text: string): string {
    return text.replace(/(<([^>]+)>)/gi, "");
  }
}
