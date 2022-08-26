import { createReducer, on } from '@ngrx/store';
import { getPagos } from './pagos.actions';
import { Pago } from 'src/app/models/pago.model';

export const initialState: ReadonlyArray<Pago> = [];

export const PagosReducer = createReducer(
  initialState,
  on(getPagos, (state, { pagos }) => pagos)
);
