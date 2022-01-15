import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormEmploymentPageComponent } from './registration-form-employment-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormEmploymentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationFormEmploymentPageRoutingModule {}
