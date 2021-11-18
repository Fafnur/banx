import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, AuthGuardsModule } from '@banx/auth/guards';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthGuardsModule],
  exports: [RouterModule],
})
export class RegistrationPagesRoutingModule {}
