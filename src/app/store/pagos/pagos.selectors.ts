import { createFeatureSelector } from '@ngrx/store';
import { Pago } from './../../models/pago.model';

export const selectPagos = createFeatureSelector<ReadonlyArray<Pago>>('pagos');
