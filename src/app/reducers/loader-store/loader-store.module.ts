import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromLoader from './reducers/loader.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoaderEffects } from './effects/loader.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromLoader.loaderFeatureKey, fromLoader.reducer),
    EffectsModule.forFeature([LoaderEffects])
  ]
})
export class LoaderStoreModule { }
