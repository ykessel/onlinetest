import { createAction, props } from '@ngrx/store';
import { Banner } from 'src/app/models/banner.model';

export const getBanners = createAction(
  '[Banners List/API] Retrieve Banners Success',
  props<{ banners: ReadonlyArray<Banner> }>()
);
