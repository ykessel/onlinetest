import { getEnlaces } from './enlaces.actions';
import { createReducer, on } from '@ngrx/store';
import { Enlace } from 'src/app/models/enlaces.model';

export const initialState: ReadonlyArray<Enlace> = [];

export const EnlacesReducer = createReducer(
  initialState,
  on(getEnlaces, (state, { enlaces }) => enlaces)
);
