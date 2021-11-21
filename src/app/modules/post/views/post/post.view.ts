import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'atos-post',
  templateUrl: './post.view.html',
  styleUrls: ['./post.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostView implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
