import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { LoaderStoreModule } from 'src/app/reducers/loader-store/loader-store.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, LoaderStoreModule, ProgressSpinnerModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
