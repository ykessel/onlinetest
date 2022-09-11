import { createAction, props } from '@ngrx/store';
import { Categoria } from './../../models/categorias.model';

export const getCategorias = createAction(
  '[Categorias List/API] Retrieve Categorias Success',
  props<{ categorias: ReadonlyArray<Categoria> }>()
);
