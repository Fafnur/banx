import { NgModule } from '@angular/core';

import { AuthFormComponent } from './auth-form.component';
import { AuthFormErrorComponent } from './components/auth-form-error/auth-form-error.component';
import { AuthFormErrorModule } from './components/auth-form-error/auth-form-error.module';

@NgModule({
  imports: [AuthFormErrorModule],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent, AuthFormErrorComponent],
})
export class AuthFormModule {}
