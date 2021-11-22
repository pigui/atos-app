import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as LoaderActions from '../actions/loader.actions';

@Injectable()
export class LoaderEffects {
  constructor(private actions$: Actions) {}
}
