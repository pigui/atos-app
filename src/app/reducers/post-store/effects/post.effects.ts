import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as PostActions from '../actions/post.actions';
import * as LoaderActions from '../../loader-store/actions/loader.actions';
import { PostsService } from 'src/app/api/services';

const START_LOADER = [PostActions.loadPosts, PostActions.createPost];

const STOP_LOADER = [
  PostActions.loadPostsSuccess,
  PostActions.loadPostsFailure,
  PostActions.createPostSuccess,
  PostActions.createPostFailure,
];

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadPosts),
      concatMap(() =>
        this.postsService.postControllerFindAll({}).pipe(
          map((data) => PostActions.loadPostsSuccess({ data })),
          catchError((error) => of(PostActions.loadPostsFailure({ error })))
        )
      )
    );
  });

  createPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.createPost),
      concatMap((action) =>
        this.postsService.postControllerCreate({ body: action.data }).pipe(
          map((data) => PostActions.createPostSuccess({ data })),
          catchError((error) => of(PostActions.createPostFailure({ error })))
        )
      )
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.updatePost),
      concatMap((action) =>
        this.postsService.postControllerUpdate({ body: action.data }).pipe(
          map((data) => PostActions.updatePostSuccess({ data })),
          catchError((error) => of(PostActions.updatePostFailure({ error })))
        )
      )
    );
  });

  startLoader$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...START_LOADER),
      map(() => LoaderActions.startLoader())
    );
  });

  stopLoader$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...STOP_LOADER),
      map(() => LoaderActions.stopLoader())
    );
  });

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
