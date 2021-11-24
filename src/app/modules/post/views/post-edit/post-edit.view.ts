import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, take, tap } from 'rxjs';
import * as fromPostActions from '../../../../reducers/post-store/actions/post.actions';
import * as fromPostSelectors from '../../../../reducers/post-store/selectors/post.selectors';
import * as fromAuthSelectors from '../../../../reducers/auth-store/selectors/auth.selectors';
import { PostWithUser } from 'src/app/api/models';

@Component({
  selector: 'atos-post-edit',
  templateUrl: './post-edit.view.html',
  styleUrls: ['./post-edit.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PostEditView implements OnInit {
  form: FormGroup;

  postSelected$: Observable<PostWithUser | null> = this.store.pipe(
    select(fromPostSelectors.getPostSelected)
  );

  private postId: number;
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postSelected$.pipe(take(1)).subscribe((post) => {
      this.form = this.fb.group({
        title: [post?.title, [Validators.required]],
        body: [post?.body, Validators.required],
      });
      if (post) {
        this.postId = post?.id;
      }
    });
  }

  onEdit(): void {
    if (this.form.touched) {
      this.store
        .pipe(select(fromAuthSelectors.getCurrentUser), take(1))
        .subscribe((user) => {
          this.store.dispatch(
            fromPostActions.updatePost({
              data: {
                ...this.form.getRawValue(),
                userId: user?.id,
                id: this.postId,
              },
            })
          );
        });
    }
  }
}
