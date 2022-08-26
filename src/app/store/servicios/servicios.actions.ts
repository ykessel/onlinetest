import { createAction, props } from '@ngrx/store';
import { Servicio } from '../../models/servicio.model';

export const getServicios = createAction(
  '[Servicios List/API] Retrieve Servicios Success',
  props<{ servicios: ReadonlyArray<Servicio> }>()
);
