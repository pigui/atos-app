import { createAction, props } from '@ngrx/store';
import { PostWithUser } from 'src/app/api/models';

export const loadPosts = createAction('[Post] Load Posts');

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ data: PostWithUser[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

export const updateUserId = createAction(
  '[Post] Update UserId',
  props<{ data: number | null }>()
);
