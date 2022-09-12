import { createReducer, on } from '@ngrx/store';
import { getCategorias } from './categorias.actions';
import { Categoria } from 'src/app/models/categorias.model';

export const initialState: ReadonlyArray<Categoria> = [];

export const CategoriasReducer = createReducer(
  initialState,
  on(getCategorias, (state, { categorias }) => categorias)
);
