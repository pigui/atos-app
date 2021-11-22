import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from './loader/loader.module';
import { ShellModule } from './shell/shell.module';

export const MODULES = [LoaderModule, ShellModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
})
export class ComponentsModule {}
