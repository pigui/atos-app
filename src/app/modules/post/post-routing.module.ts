import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostView } from './views/post/post.view';

const routes: Routes = [
  {
    path: '',
    component: PostView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
