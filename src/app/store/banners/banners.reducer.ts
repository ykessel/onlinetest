import { Banner } from './../../models/banner.model';
import { createReducer, on } from '@ngrx/store';
import { getBanners } from './banners.actions';

export const initialState: ReadonlyArray<Banner> = [];

export const BannersReducer = createReducer(
  initialState,
  on(getBanners, (state, { banners }) => banners)
);
