import { Servicio } from './../../models/servicio.model';
import { createFeatureSelector } from '@ngrx/store';

export const selectServicios = createFeatureSelector<ReadonlyArray<Servicio>>('servicios');
