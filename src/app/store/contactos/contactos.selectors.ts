import { createFeatureSelector } from '@ngrx/store';
import { Contacto } from './../../models/contacto.model';

export const selectContactos = createFeatureSelector<ReadonlyArray<Contacto>>('contactos');
