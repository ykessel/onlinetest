import { createAction, props } from '@ngrx/store';
import { Asociado } from 'src/app/models/asociado.model';

export const getAsociados = createAction(
  '[Asociados List/API] Retrieve Asociados Success',
  props<{ asociados: ReadonlyArray<Asociado> }>()
);
