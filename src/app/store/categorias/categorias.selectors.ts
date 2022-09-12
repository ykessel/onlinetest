import { createFeatureSelector } from '@ngrx/store';
import { Categoria } from './../../models/categorias.model';

export const selectCategorias = createFeatureSelector<ReadonlyArray<Categoria>>('categorias');
