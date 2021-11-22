import { Action, createReducer, on } from '@ngrx/store';
import * as LoaderActions from '../actions/loader.actions';

export const loaderFeatureKey = 'loader';

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: false,
};

export const reducer = createReducer(
  initialState,

  on(LoaderActions.startLoader, (state) => {
    return { ...state, isLoading: true };
  }),
  on(LoaderActions.stopLoader, (state) => {
    return { ...state, isLoading: false };
  })
);
