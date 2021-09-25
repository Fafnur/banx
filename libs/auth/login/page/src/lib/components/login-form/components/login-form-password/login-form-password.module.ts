import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsSharedModule } from '@banx/core/forms/shared';

import { LoginFormPasswordComponent } from './login-form-password.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsSharedModule],
  declarations: [LoginFormPasswordComponent],
  exports: [LoginFormPasswordComponent],
})
export class LoginFormPasswordModule {}
