import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, AuthGuardsModule } from '@banx/auth/guards';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { RegistrationLayoutComponent, RegistrationLayoutModule } from '@banx/registration/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: RegistrationLayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.registration,
        redirectTo: NAVIGATION_PATHS.registrationForm,
        pathMatch: 'full',
      },
      {
        path: NAVIGATION_PATHS.registrationForm,
        canActivate: [AuthGuard],
        loadChildren: () => import('@banx/russian/registration/form/pages').then((modules) => modules.RegistrationFormPagesModule),
      },
      {
        path: NAVIGATION_PATHS.registrationData,
        canActivate: [AuthGuard],
        loadChildren: () => import('@banx/russian/registration/data/page').then((modules) => modules.RegistrationDataPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationSocial,
        canActivate: [AuthGuard],
        loadChildren: () => import('@banx/russian/registration/social/page').then((modules) => modules.RegistrationSocialPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationUser,
        canActivate: [AuthGuard],
        loadChildren: () => import('@banx/russian/registration/user/page').then((modules) => modules.RegistrationUserPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationDecision,
        canActivate: [AuthGuard],
        loadChildren: () => import('@banx/russian/registration/decision/page').then((modules) => modules.RegistrationDecisionPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationConversion,
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('@banx/russian/registration/conversion/page').then((modules) => modules.RegistrationConversionPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationFinish,
        canActivate: [AuthGuard],
        loadChildren: () => import('@banx/russian/registration/finish/page').then((modules) => modules.RegistrationFinishPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthGuardsModule, RegistrationLayoutModule],
  exports: [RouterModule],
})
export class RegistrationPagesRoutingModule {}
