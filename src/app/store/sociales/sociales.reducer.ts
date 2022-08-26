import { Social } from 'src/app/models/social.model';
import { createReducer, on } from '@ngrx/store';
import { getSociales } from './sociales.actions';

export const initialState: ReadonlyArray<Social> = [];

export const SocialesReducer = createReducer(
  initialState,
  on(getSociales, (state, { sociales }) => sociales)
);
