import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateView } from './views/post-create/post-create.view';
import { PostView } from './views/post/post.view';

const routes: Routes = [
  {
    path: '',
    component: PostView,
  },
  {
    path: 'create',
    component: PostCreateView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
