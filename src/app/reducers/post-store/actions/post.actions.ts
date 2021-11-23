import { createAction, props } from '@ngrx/store';
import { CreatePostDto, PostWithUser, UpdatePostDto } from 'src/app/api/models';

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

export const loadPostSelected = createAction(
  '[Post] Load Post Selected',
  props<{ data: number }>()
);

export const createPost = createAction(
  '[Post] Create Post',
  props<{ data: CreatePostDto }>()
);

export const createPostSuccess = createAction(
  '[Post] Create Post Success',
  props<{ data: PostWithUser }>()
);

export const createPostFailure = createAction(
  '[Post] Create Post Failure',
  props<{ error: any }>()
);

export const updatePost = createAction(
  '[Post] Update Post',
  props<{ data: UpdatePostDto }>()
);

export const updatePostSuccess = createAction(
  '[Post] Update Post Success',
  props<{ data: PostWithUser }>()
);

export const updatePostFailure = createAction(
  '[Post] Update Post Failure',
  props<{ error: any }>()
);

export const updatePostSelected = createAction(
  '[Post] Update Post Selected',
  props<{ data: PostWithUser }>()
);
