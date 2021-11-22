import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import {
  BehaviorSubject,
  filter,
  Observable,
  Subject,
  take,
  takeUntil,
} from 'rxjs';
import { PostWithUser, User } from 'src/app/api/models';
import * as fromPostActions from '../../../../reducers/post-store/actions/post.actions';
import * as fromPostSelectors from '../../../../reducers/post-store/selectors/post.selectors';
import * as fromUserActions from '../../../../reducers/user-store/actions/user.actions';
import * as fromUserSelectors from '../../../../reducers/user-store/selectors/user.selectors';
import * as fromAuthActions from '../../../../reducers/auth-store/actions/auth.actions';
import * as fromAuthSelectors from '../../../../reducers/auth-store/selectors/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'atos-post',
  templateUrl: './post.view.html',
  styleUrls: ['./post.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostView implements OnInit, OnDestroy {
  posts$: Observable<PostWithUser[]> = this.store.pipe(
    select(fromPostSelectors.getPostByUserId)
  );
  users$: Observable<User[]> = this.store.pipe(
    select(fromUserSelectors.getUsers),
    filter((user) => !!user)
  );

  currentUser$: Observable<User | null> = this.store.pipe(
    select(fromAuthSelectors.getCurrentUser),
    filter((user) => !!user)
  );

  filterForm: FormControl = new FormControl({});
  isEditable$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private destroy$: Subject<void> = new Subject();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(fromUserActions.loadUsers());
    this.store.dispatch(fromPostActions.loadPosts());
    this.filterForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((userId) =>
        this.store.dispatch(fromPostActions.updateUserId({ data: userId }))
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClickEditable(): void {
    this.isEditable$.next(!this.isEditable$.value);
    if (this.isEditable$.getValue()) {
      this.currentUser$
        .pipe(take(1))
        .subscribe((user) => this.filterForm.setValue(user?.id));
    }
  }

  onEdit(post: PostWithUser): void {
    console.log(post);
  }

  onCreate(): void {
    this.router.navigate(['/', 'post', 'create']);
  }
}
