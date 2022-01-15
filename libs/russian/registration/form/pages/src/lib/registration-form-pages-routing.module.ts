import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormGuard, RegistrationFormGuardsModule } from '@banx/registration/form/guards';
import { RegistrationFormStateModule } from '@banx/registration/form/state';
import { RegistrationFormLayoutComponent } from '@banx/registration/form/ui/layout';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';
import { RussianRegistrationFormField } from '@banx/russian/registration/form/common';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormLayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: RegistrationFormSubSteps.Personal,
      //   pathMatch: 'full',
      // },
      {
        path: RegistrationFormSubSteps.Personal,
        loadChildren: () =>
          import('@banx/russian/registration/form/personal/page').then((modules) => modules.RegistrationFormPersonalPageModule),
      },
      {
        path: RegistrationFormSubSteps.Sms,
        canActivate: [RegistrationFormGuard],
        data: {
          subStep: RegistrationFormSubSteps.Sms,
          check: (form: Record<string, any>) =>
            [
              RussianRegistrationFormField.PassportSeriesNumber,
              RussianRegistrationFormField.PassportIssueCode,
              RussianRegistrationFormField.PassportIssueName,
              RussianRegistrationFormField.PassportIssueDate,
              RussianRegistrationFormField.PassportBirthplace,
            ].every((field) => form[field] != null),
        },
        loadChildren: () => import('@banx/registration/form/sms/page').then((modules) => modules.RegistrationFormSmsPageModule),
      },
      {
        path: RegistrationFormSubSteps.Family,
        canActivate: [RegistrationFormGuard],
        data: {
          subStep: RegistrationFormSubSteps.Family,
        },
        loadChildren: () => import('@banx/registration/form/family/page').then((modules) => modules.RegistrationFormFamilyPageModule),
      },
      {
        path: RegistrationFormSubSteps.Employment,
        canActivate: [RegistrationFormGuard],
        data: {
          subStep: RegistrationFormSubSteps.Employment,
        },
        loadChildren: () =>
          import('@banx/russian/registration/form/employment/page').then((modules) => modules.RegistrationFormEmploymentPageModule),
      },
      {
        path: RegistrationFormSubSteps.Additional,
        canActivate: [RegistrationFormGuard],
        data: {
          subStep: RegistrationFormSubSteps.Additional,
        },
        loadChildren: () =>
          import('@banx/registration/form/additional/page').then((modules) => modules.RegistrationFormAdditionalPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RegistrationFormStateModule, RegistrationFormGuardsModule],
  exports: [RouterModule],
})
export class RegistrationFormPagesRoutingModule {}
