import { createAction, props } from '@ngrx/store';
import { Contacto } from '../../models/contacto.model';

export const getContactos = createAction(
  '[Contactos List/API] Retrieve Contactos Success',
  props<{ contactos: ReadonlyArray<Contacto> }>()
);
