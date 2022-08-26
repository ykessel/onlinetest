import { createFeatureSelector } from '@ngrx/store';
import { Social } from 'src/app/models/social.model';

export const selectSociales = createFeatureSelector<ReadonlyArray<Social>>('sociales');
