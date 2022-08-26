import { createFeatureSelector } from '@ngrx/store';
import { Seccion } from '../../models/seccion.model';

export const selectSecciones = createFeatureSelector<ReadonlyArray<Seccion>>('secciones');
