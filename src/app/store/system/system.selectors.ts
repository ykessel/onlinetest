import { createFeatureSelector } from '@ngrx/store';

export const selectLang = createFeatureSelector<string>('lang');
