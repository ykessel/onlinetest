import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FormsService } from "src/app/services/system/forms.service";
import { selectSecciones } from "src/app/store/secciones/secciones.selectors";
import { selectLang } from "src/app/store/system/system.selectors";


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

  sendContacto() {
    // this.formsService.sendContacto(this.contactoForm.value);
    console.log(this.contactoForm);
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