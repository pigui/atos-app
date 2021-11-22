import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoader from '../reducers/loader.reducer';

export const selectLoaderState = createFeatureSelector<fromLoader.State>(
  fromLoader.loaderFeatureKey
);

export const getIsLoading = createSelector(
  selectLoaderState,
  (state) => state.isLoading
);
