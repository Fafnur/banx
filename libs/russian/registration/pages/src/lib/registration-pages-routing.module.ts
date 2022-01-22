import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, AuthGuardsModule } from '@banx/auth/guards';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { RegistrationStepType } from '@banx/registration/process/common';
import { RegistrationProcessGuard, RegistrationProcessGuardsModule, RegistrationProcessLoadGuard } from '@banx/registration/process/guards';
import { RegistrationProcessStateModule } from '@banx/registration/process/state';
import { RegistrationLayoutComponent, RegistrationLayoutModule } from '@banx/registration/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: RegistrationLayoutComponent,
    canActivate: [AuthGuard, RegistrationProcessLoadGuard],
    children: [
      {
        path: NAVIGATION_PATHS.registration,
        redirectTo: NAVIGATION_PATHS.registrationForm,
        pathMatch: 'full',
      },
      {
        path: NAVIGATION_PATHS.registrationForm,
        canActivate: [RegistrationProcessGuard],
        data: {
          step: RegistrationStepType.Form,
        },
        loadChildren: () => import('@banx/russian/registration/form/pages').then((modules) => modules.RegistrationFormPagesModule),
      },
      {
        path: NAVIGATION_PATHS.registrationData,
        canActivate: [RegistrationProcessGuard],
        data: {
          step: RegistrationStepType.Data,
        },
        loadChildren: () => import('@banx/registration/data/page').then((modules) => modules.RegistrationDataPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationSocial,
        canActivate: [RegistrationProcessGuard],
        data: {
          step: RegistrationStepType.Social,
        },
        loadChildren: () => import('@banx/registration/social/page').then((modules) => modules.RegistrationSocialPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationUser,
        canActivate: [RegistrationProcessGuard],
        data: {
          step: RegistrationStepType.User,
        },
        loadChildren: () => import('@banx/registration/user/page').then((modules) => modules.RegistrationUserPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationDecision,
        canActivate: [RegistrationProcessGuard],
        data: {
          step: RegistrationStepType.Decision,
        },
        loadChildren: () => import('@banx/registration/decision/page').then((modules) => modules.RegistrationDecisionPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationConversion,
        canActivate: [RegistrationProcessGuard],
        data: {
          step: RegistrationStepType.Conversion,
        },
        loadChildren: () => import('@banx/registration/conversion/page').then((modules) => modules.RegistrationConversionPageModule),
      },
      {
        path: NAVIGATION_PATHS.registrationFinish,
        canActivate: [RegistrationProcessGuard],
        data: {
          step: RegistrationStepType.Finish,
        },
        loadChildren: () => import('@banx/registration/finish/page').then((modules) => modules.RegistrationFinishPageModule),
      },
    ],
  },
  {
    path: NAVIGATION_PATHS.registrationRestart,
    loadChildren: () => import('@banx/registration/restart/page').then((modules) => modules.RegistrationRestartPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AuthGuardsModule,
    RegistrationProcessStateModule,
    RegistrationProcessGuardsModule,
    RegistrationLayoutModule,
  ],
  exports: [RouterModule],
})
export class RegistrationPagesRoutingModule {}
