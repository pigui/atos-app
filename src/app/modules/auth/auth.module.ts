import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginView } from './views/login/login.view';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { UserStoreModule } from 'src/app/reducers/user-store/user-store.module';
import { SkeletonModule } from 'primeng/skeleton';
import { AuthStoreModule } from 'src/app/reducers/auth-store/auth-store.module';

@NgModule({
  declarations: [LoginView],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CardModule,
    DropdownModule,
    SkeletonModule,
    AuthStoreModule,
    UserStoreModule,
  ],
})
export class AuthModule {}
