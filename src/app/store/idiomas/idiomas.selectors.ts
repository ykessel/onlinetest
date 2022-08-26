import { createFeatureSelector } from '@ngrx/store';
import { Idioma } from '../../models/idioma.model';

export const selectIdiomas = createFeatureSelector<ReadonlyArray<Idioma>>('idiomas');
