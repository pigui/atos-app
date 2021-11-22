import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, ToastModule],
  exports: [ComponentsModule, ToastModule],
  providers: [MessageService],
})
export class SharedModule {}
