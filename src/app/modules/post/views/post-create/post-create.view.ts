import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as fromPostActions from '../../../../reducers/post-store/actions/post.actions';
import * as fromAuthSelectors from '../../../../reducers/auth-store/selectors/auth.selectors';
import { take } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'atos-post-create',
  templateUrl: './post-create.view.html',
  styleUrls: ['./post-create.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PostCreateView implements OnInit {
  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private actions$: Actions,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.actions$
      .pipe(ofType(fromPostActions.createPostSuccess))
      .pipe(take(1))
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Post',
          detail: 'Post Created',
        });
      });
    this.messageService.messageObserver.pipe(take(1)).subscribe(() => {
      this.router.navigate(['/', 'post']);
    });
  }

  onCreate(): void {
    this.store
      .pipe(select(fromAuthSelectors.getCurrentUser), take(1))
      .subscribe((user) => {
        this.store.dispatch(
          fromPostActions.createPost({
            data: { ...this.form.getRawValue(), userId: user?.id },
          })
        );
      });
  }
}
