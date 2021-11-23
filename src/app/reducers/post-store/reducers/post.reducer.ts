import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { PostWithUser } from 'src/app/api/models';
import * as PostActions from '../actions/post.actions';

export const postFeatureKey = 'post';

export interface State extends EntityState<PostWithUser> {
  userId: number | null;
  postSelected: PostWithUser | null;
}

export const adapter: EntityAdapter<PostWithUser> =
  createEntityAdapter<PostWithUser>();

export const initialState: State = adapter.getInitialState({
  userId: null,
  postSelected: null,
});

export const reducer = createReducer(
  initialState,
  on(PostActions.loadPosts, (state) => state),
  on(PostActions.loadPostsSuccess, (state, action) =>
    adapter.addMany(action.data, state)
  ),
  on(PostActions.loadPostsFailure, (state, action) => state),
  on(PostActions.updateUserId, (state, action) => {
    return { ...state, userId: action.data };
  }),
  on(PostActions.createPostSuccess, (state, action) =>
    adapter.addOne(action.data, state)
  ),
  on(PostActions.updatePostSelected, (state, action) => {
    return { ...state, postSelected: action.data };
  }),
  on(PostActions.updatePostSuccess, (state, action) =>
    adapter.updateOne({ id: action.data.id, changes: action.data }, state)
  )
);
// get the selectors
export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
