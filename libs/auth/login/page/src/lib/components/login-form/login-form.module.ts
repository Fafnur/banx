import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AuthFormModule } from '@banx/auth/shared';
import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { LoginFormPasswordModule } from './components/login-form-password/login-form-password.module';
import { LoginFormUsernameModule } from './components/login-form-username/login-form-username.module';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsSharedModule,
    LoginFormUsernameModule,
    LoginFormPasswordModule,
    AuthFormModule,
    TrackersSharedModule,
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
