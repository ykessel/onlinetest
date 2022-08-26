import { getLang, SetLang, getCurrentExpandedService, setCurrentExpandedService } from './system.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: string = 'es';
export const initialStateServiceId: number = 0;

export const SystemLangReducer = createReducer(
  initialState,
  on(getLang, (state, { lang }) => lang),
  on(SetLang, (state, { lang }) => {
    state = lang;
    return state
  }),
);

export const SystemServiceIdReducer = createReducer(
  initialStateServiceId,
  on(getCurrentExpandedService, (state, { serviceId }) => serviceId),
  on(setCurrentExpandedService, (state, { serviceId }) => {
    state = serviceId;
    return state
  }),
);
