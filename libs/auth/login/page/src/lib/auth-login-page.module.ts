import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthLoginPageComponent } from './auth-login-page.component';
import { AuthPagesRoutingModule } from './auth-login-page-routing.module';

@NgModule({
  imports: [CommonModule, AuthPagesRoutingModule, ReactiveFormsModule],
  declarations: [AuthLoginPageComponent],
})
export class AuthLoginPageModule {}
