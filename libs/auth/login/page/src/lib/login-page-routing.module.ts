import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

import { LoginPageComponent } from './login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    data: {
      sitemap: {
        loc: NAVIGATION_PATHS.authLogin,
      },
      meta: {
        title: $localize`:Login page meta|:Log in - Banx`,
        description: $localize`:Login page meta|:In order to enter on Banx, enter your mobile phone number and password`,
        keywords: $localize`:Login page meta|:sign in, login, banx`,
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPagesRoutingModule {}
