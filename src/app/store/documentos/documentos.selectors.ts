import { createFeatureSelector } from '@ngrx/store';
import { Documento } from 'src/app/models/documento.model';

export const selectDocumentos = createFeatureSelector<ReadonlyArray<Documento>>('documentos');
