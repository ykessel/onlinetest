import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CategoriasEnlaceService } from "src/app/services/categorias-enlace/categorias-enlace.service";

export type PageType = {
  titulo: string, 
  contenido: string
}

@Component({
  selector: "bipay-generic",
  templateUrl: "./generic.component.html",
  styleUrls: ["./generic.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class GenericComponent implements OnInit {
  // page$: Observable<PageType> = of({titulo: '', contenido: ''});
  page: PageType = { titulo: '', contenido: '' };

  constructor(
    private route: ActivatedRoute,
    private categoriasEnlaceService: CategoriasEnlaceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((x: any) => {
    this.categoriasEnlaceService
        .getGenericPage(x.params.genericUrl).subscribe((x: PageType)=> this.page = x);
    });
  }
}
