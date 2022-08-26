import { createAction, props } from '@ngrx/store';
import { Caracteristica } from '../../models/caracteristica.model';

export const getCaracteristicas = createAction(
  '[Caracteristica List/API] Retrieve Caracteristicas Success',
  props<{ caracteristicas: ReadonlyArray<Caracteristica> }>()
);
