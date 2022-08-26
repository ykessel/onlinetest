import { Documento } from './../../models/documento.model';
import { createAction, props } from '@ngrx/store';

export const getDocumentos = createAction(
  '[Documentos List/API] Retrieve Documentos Success',
  props<{ documentos: ReadonlyArray<Documento> }>()
);
