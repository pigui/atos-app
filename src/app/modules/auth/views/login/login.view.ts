import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, Observable, Subject, take, takeUntil } from 'rxjs';
import { User } from 'src/app/api/models';
import * as fromUserActions from '../../../../reducers/user-store/actions/user.actions';
import * as fromUserSelectors from '../../../../reducers/user-store/selectors/user.selectors';
import * as fromAuthActions from '../../../../reducers/auth-store/actions/auth.actions';
import * as fromAuthSelectors from '../../../../reducers/auth-store/selectors/auth.selectors';
import { Router } from '@angular/router';
@Component({
  selector: 'atos-login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginView implements OnInit, OnDestroy {
  isLogged$: Observable<boolean> = this.store.pipe(
    select(fromAuthSelectors.getIsLogged),
    filter((isLogged) => isLogged)
  );
  users$: Observable<User[]> = this.store.pipe(
    select(fromUserSelectors.getUsers),
    filter((user) => !!user)
  );
  loginForm: FormControl = new FormControl();

  private destroy$: Subject<void> = new Subject();
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.isLogged$
      .pipe(take(1))
      .subscribe(() => this.router.navigate(['post']));
    this.store.dispatch(fromUserActions.loadUsers());

    this.loginForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) =>
        this.store.dispatch(fromAuthActions.login({ data: user }))
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
