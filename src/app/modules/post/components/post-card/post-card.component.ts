import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { PostWithUser } from 'src/app/api/models';

@Component({
  selector: 'atos-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent implements OnInit {
  @HostBinding('class') className = 'p-md-4 p-col-12';
  @Input() post: PostWithUser;
  constructor() {}

  ngOnInit(): void {}
}
