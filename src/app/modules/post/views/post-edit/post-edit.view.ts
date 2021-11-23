import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs';
import * as fromPostActions from '../../../../reducers/post-store/actions/post.actions';
import * as fromPostSelectors from '../../../../reducers/post-store/selectors/post.selectors';
import * as fromAuthSelectors from '../../../../reducers/auth-store/selectors/auth.selectors';

@Component({
  selector: 'atos-post-edit',
  templateUrl: './post-edit.view.html',
  styleUrls: ['./post-edit.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostEditView implements OnInit {
  form: FormGroup;

  private postId: number;
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store
      .pipe(select(fromPostSelectors.getPostSelected), take(1))
      .subscribe((post) => {
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
