import { createAction, props } from '@ngrx/store';
import { Idioma } from '../../models/idioma.model';

export const getIdiomas = createAction(
  '[Idiomas List/API] Retrieve Idiomas Success',
  props<{ idiomas: ReadonlyArray<Idioma> }>()
);
