import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthCardModule } from '@banx/auth/shared';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { ContainerModule } from '@banx/ui/container';

import { LoginFormModule } from './components/login-form/login-form.module';
import { LoginPageComponent } from './login-page.component';
import { AuthPagesRoutingModule } from './login-page-routing.module';

@NgModule({
  imports: [CommonModule, AuthPagesRoutingModule, ContainerModule, AuthCardModule, LoginFormModule, NavigationSharedModule],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {}
