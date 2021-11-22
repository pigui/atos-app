import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { PostWithUser, User } from 'src/app/api/models';

@Component({
  selector: 'atos-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PostCardComponent implements OnInit {
  @HostBinding('class') className = 'p-md-4 p-col-12';
  @Input() post: PostWithUser;
  @Input() currentUser: User | null;
  @Input() isEditable: boolean | null = false;
  @Output() onClickEdit: EventEmitter<PostWithUser> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClickEditButton(): void {
    this.onClickEdit.emit(this.post);
  }
}
