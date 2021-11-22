import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as UserActions from '../actions/user.actions';
import { UsersService } from 'src/app/api/services';

import * as LoaderActions from '../../loader-store/actions/loader.actions';

const START_LOADER = [UserActions.loadUsers];
const STOP_LOADER = [
  UserActions.loadUsersSuccess,
  UserActions.loadUsersFailure,
];

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        this.usersService.userControllerFindAll().pipe(
          map((data) => UserActions.loadUsersSuccess({ data })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
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

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
