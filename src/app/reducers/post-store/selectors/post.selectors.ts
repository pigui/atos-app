import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPost from '../reducers/post.reducer';

export const selectPostState = createFeatureSelector<fromPost.State>(
  fromPost.postFeatureKey
);

export const getPosts = createSelector(selectPostState, fromPost.selectAll);

export const getUserId = createSelector(
  selectPostState,
  (state) => state.userId
);

export const getPostByUserId = createSelector(
  getPosts,
  getUserId,
  (posts, userId) => {
    if (!userId) {
      return posts;
    }
    return posts.filter((post) => post.user.id === userId);
  }
);
