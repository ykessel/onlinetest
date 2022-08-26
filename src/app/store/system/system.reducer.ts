import { getLang, SetLang } from './system.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: string = 'es';

export const SystemLangReducer = createReducer(
  initialState,
  on(getLang, (state, { lang }) => lang),
  on(SetLang, (state, { lang }) => {
    state = lang;
    return state
  }),
);
