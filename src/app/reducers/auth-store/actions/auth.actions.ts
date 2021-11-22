import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/api/models';

export const login = createAction('[Auth] Login', props<{ data: User }>());

export const logout = createAction('[Auth] Logout');
