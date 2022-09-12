import { createAction, props } from '@ngrx/store';
import { Enlace } from 'src/app/models/enlaces.model';

export const getEnlaces = createAction(
  '[Enlaces List/API] Retrieve Enlaces Success',
  props<{ enlaces: ReadonlyArray<Enlace> }>()
);
