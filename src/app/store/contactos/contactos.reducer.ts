import { createReducer, on } from '@ngrx/store';
import { Contacto } from '../../models/contacto.model';
import { getContactos } from './contactos.actions';

export const initialState: ReadonlyArray<Contacto> = [];

export const ContactosReducer = createReducer(
  initialState,
  on(getContactos, (state, { contactos }) => contactos)
);
