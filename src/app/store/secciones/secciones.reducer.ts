import { createReducer, on } from '@ngrx/store';

import { getSecciones } from './secciones.actions';
import { Seccion } from '../../models/seccion.model';

export const initialState: ReadonlyArray<Seccion> = [];

export const SeccinesReducer = createReducer(
  initialState,
  on(getSecciones, (state, { secciones }) => secciones)
);
