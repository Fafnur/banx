import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormAdditionalPageComponent } from './registration-form-additional-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormAdditionalPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationFormAdditionalPageRoutingModule {}
