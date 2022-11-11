import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FormsService } from 'src/app/services/system/forms.service';
import { selectSecciones } from 'src/app/store/secciones/secciones.selectors';
import { selectLang } from 'src/app/store/system/system.selectors';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { faBridgeLock } from '@fortawesome/free-solid-svg-icons';

export interface DialogData {
  message: string;
}
@Component({
  selector: 'bipay-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactosComponent implements OnInit {
  contactoForm: FormGroup;
  secciones$ = this.store.select(selectSecciones);
  lang: string = '';
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private formsService: FormsService,
    public dialog: MatDialog
  ) {
    this.contactoForm = this.fb.group({
      empresa: ['', Validators.required],
      paginaWeb: [''],
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      ],
      suscripcion: ['', Validators.required],
      terminosCondiciones: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  sendContacto() {
    for (let i in this.contactoForm.controls) {
      this.contactoForm.controls[i].markAsTouched();
    }
    if (this.contactoForm.pristine) {
      switch (this.lang) {
        case 'xx': {
          this.openDialog('Debe llenar los campos obligatorios');
          break;
        }
        case 'en': {
          this.openDialog('You must fill in the required fields');
          break;
        }
        default: {
          this.openDialog('Debe llenar los campos obligatorios');
          break;
        }
      }
    } else {
      this.formsService
        .sendContacto(this.contactoForm.value)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 0) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error);
              switch (this.lang) {
                case 'xx': {
                  this.openDialog(
                    'Se ha producido un error; revise su conexión e intente mas tarde'
                  );
                  break;
                }
                case 'en': {
                  this.openDialog(
                    'An error has occurred; check your connection and try again later'
                  );
                  break;
                }
                default: {
                  this.openDialog(
                    'Se ha producido un error; revise su conexión e intente mas tarde'
                  );
                  break;
                }
              }
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error(
                `Backend returned code ${error.status}, body was: `,
                error.error
              );

              switch (this.lang) {
                case 'xx': {
                  this.openDialog(
                    'Ha ocurrido un error; por favor intente mas tarde'
                  );
                  break;
                }
                case 'en': {
                  this.openDialog(
                    'An error has occurred; please try again later'
                  );
                  break;
                }
                default: {
                  this.openDialog(
                    'Ha ocurrido un error; por favor intente mas tarde'
                  );
                  break;
                }
              }
            }
            return throwError(
              () => new Error('Something bad happened; please try again later.')
            );
          })
        )
        .subscribe(() => {
          this.contactoForm.reset();
          switch (this.lang) {
            case 'xx': {
              this.openDialog('Sus datos han sido enviados correctamente');
              break;
            }
            case 'en': {
              this.openDialog('Your details have been sent correctly');
              break;
            }
            default: {
              this.openDialog('Sus datos han sido enviados correctamente');
              break;
            }
          }
        });
    }
  }

  get empresa() {
    return this.contactoForm.get('empresa');
  }
  get paginaWeb() {
    return this.contactoForm.get('paginaWeb');
  }
  get numeroCarnet() {
    return this.contactoForm.get('numeroCarnet');
  }
  get correo() {
    return this.contactoForm.get('correo');
  }
  get nombre() {
    return this.contactoForm.get('nombre');
  }
  get apellidos() {
    return this.contactoForm.get('apellidos');
  }
  get telefono() {
    return this.contactoForm.get('telefono');
  }
  get suscripcion() {
    return this.contactoForm.get('suscripcion');
  }
  get terminosCondiciones() {
    return this.contactoForm.get('terminosCondiciones');
  }

  openDialog(message: string) {
    this.dialog.open(ComfirmDialog, {
      width: '250px',
      data: { message: message },
    });
  }
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.html',
  styleUrls: ['./confirm-dialog.scss'],
})
export class ComfirmDialog {
  lang: string = '';
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));

  constructor(
    public dialogRef: MatDialogRef<ComfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
