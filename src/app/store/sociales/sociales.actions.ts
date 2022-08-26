import { createAction, props } from '@ngrx/store';
import { Social } from '../../models/social.model';

export const getSociales = createAction(
  '[Servicios List/API] Retrieve Sociales Success',
  props<{ sociales: ReadonlyArray<Social> }>()
);
