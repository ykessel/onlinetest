import { Banner } from './../../models/banner.model';
import { createFeatureSelector } from '@ngrx/store';

export const selectBanners = createFeatureSelector<ReadonlyArray<Banner>>('banners');
