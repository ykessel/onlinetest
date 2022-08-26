import { createAction, props } from '@ngrx/store';

export const getLang = createAction(
  '[System Lang] Get Current Lang Success',
  props<{ lang: string }>()
);

export const SetLang = createAction(
  '[System Lang] Set Current Lang Success',
  props<{ lang: string }>()
);

export const getCurrentExpandedService = createAction(
  '[System Services] Get Current Expanded Service',
  props<{ serviceId: number }>()
);

export const setCurrentExpandedService = createAction(
  '[System Services] Set Current Expanded Service',
  props<{ serviceId: number }>()
);
