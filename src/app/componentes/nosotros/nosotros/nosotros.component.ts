import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CommonService } from 'src/app/services/system/common.service';
import { Store } from '@ngrx/store';
import { selectSecciones } from "src/app/store/secciones/secciones.selectors";
import { selectLang } from "src/app/store/system/system.selectors";

@Component({
  selector: "bipay-nosotros",
  templateUrl: "./nosotros.component.html",
  styleUrls: ["./nosotros.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NosotrosComponent implements OnInit {
  lang: string = "";
  secciones$ = this.store.select(selectSecciones);
  lang$ = this.store.select(selectLang).subscribe((l) => this.lang = l);

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
  }
}

