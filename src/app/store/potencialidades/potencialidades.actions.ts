import { createAction, props } from '@ngrx/store';
import { Potencialidad } from 'src/app/models/potencialidad.model';

export const getPotencialidades = createAction(
  '[Potencialidades List/API] Retrieve Potencialidades Success',
  props<{ potencialidades: ReadonlyArray<Potencialidad> }>()
);
