import { createFeatureSelector } from '@ngrx/store';
import { Asociado } from './../../models/asociado.model';

export const selectAsociados = createFeatureSelector<ReadonlyArray<Asociado>>('idiomas');
