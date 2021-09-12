import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: NAVIGATION_PATHS.authLogin,
    pathMatch: 'full',
  },
  {
    path: NAVIGATION_PATHS.authLogin,
    loadChildren: (): Promise<any> => import('@banx/auth/login/page').then((modules) => modules.LoginPageModule),
  },
  {
    path: NAVIGATION_PATHS.authRecovery,
    loadChildren: (): Promise<any> => import('@banx/auth/recovery/page').then((modules) => modules.RecoveryPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPagesRoutingModule {}
