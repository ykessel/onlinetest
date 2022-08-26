import { createReducer, on } from '@ngrx/store';

import { getDocumentos } from './documentos.actions';
import { Documento } from 'src/app/models/documento.model';

export const initialState: ReadonlyArray<Documento> = [];

export const DocumentosReducer = createReducer(
  initialState,
  on(getDocumentos, (state, { documentos }) => documentos)
);
