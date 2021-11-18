import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormSubSteps } from '@banx/registration/process/common';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationFormPagesRoutingModule {}
