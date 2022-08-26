import { createReducer, on } from '@ngrx/store';
import { getPotencialidades } from './potencialidades.actions';
import { Servicio } from '../../models/servicio.model';

export const initialState: ReadonlyArray<Servicio> = [];

export const PotencialidadesReducer = createReducer(
  initialState,
  on(getPotencialidades, (state, { potencialidades }) => potencialidades)
);
