import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostView } from './views/post/post.view';
import { PostStoreModule } from 'src/app/reducers/post-store/post-store.module';
import { PostCardComponent } from './components/post-card/post-card.component';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { UserStoreModule } from 'src/app/reducers/user-store/user-store.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostView, PostCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRoutingModule,
    PostStoreModule,
    UserStoreModule,
    CardModule,
    DropdownModule,
    SkeletonModule,
  ],
})
export class PostModule {}
