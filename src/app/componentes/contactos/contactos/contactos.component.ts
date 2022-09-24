import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FormsService } from "src/app/services/system/forms.service";
import { selectSecciones } from "src/app/store/secciones/secciones.selectors";
import { selectLang } from "src/app/store/system/system.selectors";
// import { catchError } from 'rxjs/operators'; 
// import { HttpErrorResponse } from "@angular/common/http";


@Component({
  selector: "bipay-contactos",
  templateUrl: "./contactos.component.html",
  styleUrls: ["./contactos.component.scss"],
})
export class ContactosComponent implements OnInit {
  contactoForm: FormGroup;
  secciones$ = this.store.select(selectSecciones);
  lang: string = '';
  lang$ = this.store.select(selectLang).subscribe((l) => this.lang = l);


  constructor(private store: Store, private fb: FormBuilder, private formsService: FormsService, public dialog: MatDialog) {
    this.contactoForm = this.fb.group({
      empresa: ["", Validators.required],
      paginaWeb: ["", Validators.pattern(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)],
      numeroCarnet: ["", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      correo: ["", [Validators.required, Validators.email]],
      nombre: ["", Validators.required],
      apellidos: ["", Validators.required],
      telefono: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      suscripcion: ["", Validators.required],
      terminosCondiciones: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

//   private handleError(error: HttpErrorResponse) {
//   if (error.status === 0) {
//     // A client-side or network error occurred. Handle it accordingly.
//     console.error('An error occurred:', error.error);
//   } else {
//     // The backend returned an unsuccessful response code.
//     // The response body may contain clues as to what went wrong.
//     console.error(
//       `Backend returned code ${error.status}, body was: `, error.error);
//   }
//   // Return an observable with a user-facing error message.
//   return throwError(() => new Error('Something bad happened; please try again later.'));
// }

  sendContacto() {
    // this.formsService.sendContacto(this.contactoForm.value).pipe(
    //   catchError(this.handleError)
    // ).subscribe(x => {
    //   console.log(x)
    // });
    this.dialog.open(ComfirmDialog, { width: '250px',});
  }

  get empresa() { return this.contactoForm.get('empresa'); }
  get paginaWeb() { return this.contactoForm.get('paginaWeb'); }
  get numeroCarnet() { return this.contactoForm.get('numeroCarnet'); }
  get correo() { return this.contactoForm.get('correo'); }
  get nombre() { return this.contactoForm.get('nombre'); }
  get apellidos() { return this.contactoForm.get('apellidos'); }
  get telefono() { return this.contactoForm.get('telefono'); }
  get suscripcion() { return this.contactoForm.get('suscripcion'); }
  get terminosCondiciones() { return this.contactoForm.get('terminosCondiciones'); }

  openDialog() {
    this.dialog.open(ComfirmDialog);
  }
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.html',
  styleUrls: ["./confirm-dialog.scss"],
})
export class ComfirmDialog {}