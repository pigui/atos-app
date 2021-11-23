import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'atos-post',
  templateUrl: './post.layout.html',
  styleUrls: ['./post.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostLayout implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
