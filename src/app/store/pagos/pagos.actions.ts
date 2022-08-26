import { createAction, props } from '@ngrx/store';
import { Pago } from '../../models/pago.model';

export const getPagos = createAction(
  '[Pagos List/API] Retrieve Pagos Success',
  props<{ pagos: ReadonlyArray<Pago> }>()
);
