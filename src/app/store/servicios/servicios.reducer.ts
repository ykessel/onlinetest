import { createReducer, on } from '@ngrx/store';
import { getServicios } from './servicios.actions';
import { Servicio } from '../../models/servicio.model';

export const initialState: ReadonlyArray<Servicio> = [];

export const ServiciosReducer = createReducer(
  initialState,
  on(getServicios, (state, { servicios }) => servicios)
);
