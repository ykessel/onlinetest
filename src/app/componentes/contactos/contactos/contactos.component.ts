import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { FormsService } from "src/app/services/system/forms.service";
import { Store } from '@ngrx/store';
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


  constructor(private store: Store, private fb: FormBuilder, private formsService: FormsService) {
    this.contactoForm = this.fb.group({
      empresa: ["", Validators.required],
      paginaWeb: [""],
      numeroCarnet: ["", Validators.required],
      correo: ["", Validators.required],
      nombre: ["", Validators.required],
      apellidos: ["", Validators.required],
      telefono: ["", Validators.required],
      suscripcion: ["", Validators.required],
      terminosCondiciones: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  sendContacto() {
    this.formsService.sendContacto(this.contactoForm.value);
  }
}
