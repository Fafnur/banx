import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { LoginModule } from './components/login/login.module';
import { UserModule } from './components/user/user.module';

@NgModule({
  imports: [CommonModule, LoginModule, UserModule],
  declarations: [AuthComponent],
  exports: [AuthComponent],
})
export class AuthModule {}
