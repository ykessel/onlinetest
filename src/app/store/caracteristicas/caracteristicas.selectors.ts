import { createFeatureSelector } from '@ngrx/store';
import { Caracteristica } from '../../models/caracteristica.model';

export const selectCaracteristicas = createFeatureSelector<ReadonlyArray<Caracteristica>>('caracteristicas');
