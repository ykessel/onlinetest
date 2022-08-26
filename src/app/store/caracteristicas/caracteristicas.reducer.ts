import { createReducer, on } from '@ngrx/store';
import { getCaracteristicas } from './caracteristicas.actions';
import { Caracteristica } from '../../models/caracteristica.model';

export const initialState: ReadonlyArray<Caracteristica> = [];

export const CaracteristicasReducer = createReducer(
  initialState,
  on(getCaracteristicas, (state, { caracteristicas }) => caracteristicas)
);
