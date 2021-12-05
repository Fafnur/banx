import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormSmsPageComponent } from './registration-form-sms-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormSmsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationFormSmsPageRoutingModule {}
