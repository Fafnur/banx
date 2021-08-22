import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [RouterModule, MatButtonModule, MatIconModule, NavigationSharedModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
