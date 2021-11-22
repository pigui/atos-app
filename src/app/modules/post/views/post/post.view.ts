import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { PostWithUser, User } from 'src/app/api/models';
import * as fromPostActions from '../../../../reducers/post-store/actions/post.actions';
import * as fromPostSelectors from '../../../../reducers/post-store/selectors/post.selectors';
import * as fromUserActions from '../../../../reducers/user-store/actions/user.actions';
import * as fromUserSelectors from '../../../../reducers/user-store/selectors/user.selectors';

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

  filterForm: FormControl = new FormControl({});

  private destroy: Subject<void> = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromUserActions.loadUsers());
    this.store.dispatch(fromPostActions.loadPosts());
    this.filterForm.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((userId) =>
        this.store.dispatch(fromPostActions.updateUserId({ data: userId }))
      );
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
