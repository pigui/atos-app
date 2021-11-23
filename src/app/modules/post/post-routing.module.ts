import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostLayout } from './layouts/post/post.layout';
import { PostCreateView } from './views/post-create/post-create.view';
import { PostEditView } from './views/post-edit/post-edit.view';
import { PostView } from './views/post/post.view';

const routes: Routes = [
  {
    path: '',
    component: PostLayout,
    children: [
      {
        path: '',
        component: PostView,
      },
      {
        path: 'create',
        component: PostCreateView,
      },
      {
        path: 'edit',
        component: PostEditView,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
