import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const getCurrentUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const getIsLogged = createSelector(getCurrentUser, (state) => !!state);
