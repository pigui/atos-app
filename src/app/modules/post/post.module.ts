import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostView } from './views/post/post.view';

@NgModule({
  declarations: [
    PostView
  ],
  imports: [CommonModule, PostRoutingModule],
})
export class PostModule {}
