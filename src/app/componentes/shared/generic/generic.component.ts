import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of, throwError, filter } from "rxjs";
import { switchMap, catchError, tap } from "rxjs/operators";
import { CategoriasEnlaceService } from "src/app/services/categorias-enlace/categorias-enlace.service";
import { Location } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";

export type PageType = {
  titulo: string;
  contenido: string;
};

@Component({
  selector: "bipay-generic",
  templateUrl: "./generic.component.html",
  styleUrls: ["./generic.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class GenericComponent implements OnInit {
  page: PageType = { titulo: "", contenido: "" };

  constructor(
    private route: ActivatedRoute,
    private categoriasEnlaceService: CategoriasEnlaceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((link: any) => {
      this.categoriasEnlaceService
        .getGenericPage(link.params.genericUrl)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 0) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error("An error occurred:", error.error);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error(
                `Backend returned code ${error.status}, body was: `,
                error.error
              );
            }

            this.page = {
              titulo: "",
              contenido: "<h1>No hay contenido disponible</h1>",
            };
            this.location.replaceState(
              link.params.genericUrl.replace(
                "http://bipay.tucasamar.com/enlace/seccion-generica/",
                "/"
              )
            );
            // Return an observable with a user-facing error message.
            return throwError(
              () => new Error("Something bad happened; please try again later.")
            );
          })
          ).subscribe((page: PageType) => {
          if (page !== null) {
            this.page = page;
            this.location.replaceState(
              link.params.genericUrl.replace(
                "http://bipay.tucasamar.com/enlace/seccion-generica/",
                "/"
              )
            );
          } else {
            this.page = {
              titulo: "",
              contenido: "<h1>No hay contenido disponible</h1>",
            };
            this.location.replaceState(
              link.params.genericUrl.replace(
                "http://bipay.tucasamar.com/enlace/seccion-generica/",
                "/"
              )
            );
          }
        });
    });
  }
}
