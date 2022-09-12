import { createFeatureSelector } from '@ngrx/store';
import { Enlace } from 'src/app/models/enlaces.model';

export const selectEnlaces = createFeatureSelector<ReadonlyArray<Enlace>>('enlaces');
