import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPost from './reducers/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './effects/post.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPost.postFeatureKey, fromPost.reducer),
    EffectsModule.forFeature([PostEffects])
  ]
})
export class PostStoreModule { }
