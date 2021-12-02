import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormLayoutComponent } from '@banx/registration/form/ui/layout';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: RegistrationFormSubSteps.Personal,
        pathMatch: 'full',
      },
      {
        path: RegistrationFormSubSteps.Personal,
        loadChildren: () =>
          import('@banx/russian/registration/form/personal/page').then((modules) => modules.RegistrationFormPersonalPageModule),
      },
      {
        path: RegistrationFormSubSteps.Family,
        loadChildren: () =>
          import('@banx/russian/registration/form/family/page').then((modules) => modules.RegistrationFormFamilyPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationFormPagesRoutingModule {}
