import { Asociado } from './../../models/asociado.model';
import { createReducer, on } from '@ngrx/store';
import { getAsociados } from './asociados.actions';

export const initialState: ReadonlyArray<Asociado> = [];

export const AsociadosReducer = createReducer(
  initialState,
  on(getAsociados, (state, { asociados }) => asociados)
);
