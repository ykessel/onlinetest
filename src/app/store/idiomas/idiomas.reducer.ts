import { createReducer, on } from '@ngrx/store';

import { getIdiomas} from './idiomas.actions';
import { Idioma } from '../../models/idioma.model';

export const initialState: ReadonlyArray<Idioma> = [];

export const IdiomasReducer = createReducer(
  initialState,
  on(getIdiomas, (state, { idiomas }) => idiomas)
);
