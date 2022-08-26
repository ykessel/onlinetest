import { createAction, props } from '@ngrx/store';
import { Seccion } from '../../models/seccion.model';

export const getSecciones = createAction(
  '[Seccion List/API] Retrieve Secciones Success',
  props<{ secciones: ReadonlyArray<Seccion> }>()
);
