import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/api/models';
import * as UserActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State extends EntityState<User> {}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => state),
  on(UserActions.loadUsersSuccess, (state, action) =>
    adapter.setAll(action.data, state)
  ),
  on(UserActions.loadUsersFailure, (state, action) => state)
);

// get the selectors
export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
