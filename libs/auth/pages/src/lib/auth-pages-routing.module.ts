import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, AuthGuardsModule } from '@banx/auth/guards';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

const routes: Routes = [
  {
    path: NAVIGATION_PATHS.auth,
    redirectTo: NAVIGATION_PATHS.authLogin,
    pathMatch: 'full',
  },
  {
    path: NAVIGATION_PATHS.authLogin,
    canActivate: [AuthGuard],
    loadChildren: (): Promise<any> => import('@banx/auth/login/page').then((modules) => modules.LoginPageModule),
  },
  {
    path: NAVIGATION_PATHS.authRecovery,
    canActivate: [AuthGuard],
    loadChildren: (): Promise<any> => import('@banx/auth/recovery/page').then((modules) => modules.RecoveryPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthGuardsModule],
  exports: [RouterModule],
})
export class AuthPagesRoutingModule {}
