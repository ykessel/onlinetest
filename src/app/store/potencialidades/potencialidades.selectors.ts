import { createFeatureSelector } from '@ngrx/store';
import { Potencialidad } from 'src/app/models/potencialidad.model';

export const selectPotencialidades = createFeatureSelector<ReadonlyArray<Potencialidad>>('potencialidades');
