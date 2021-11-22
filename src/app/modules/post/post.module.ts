import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostView } from './views/post/post.view';
import { PostStoreModule } from 'src/app/reducers/post-store/post-store.module';
import { PostCardComponent } from './components/post-card/post-card.component';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { UserStoreModule } from 'src/app/reducers/user-store/user-store.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthStoreModule } from 'src/app/reducers/auth-store/auth-store.module';
import { PostCreateView } from './views/post-create/post-create.view';

@NgModule({
  declarations: [PostView, PostCardComponent, PostCreateView],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRoutingModule,
    PostStoreModule,
    UserStoreModule,
    AuthStoreModule,
    CardModule,
    DropdownModule,
    SkeletonModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
  ],
})
export class PostModule {}
