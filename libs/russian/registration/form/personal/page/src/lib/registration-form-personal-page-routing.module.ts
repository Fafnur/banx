import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormPersonalPageComponent } from './registration-form-personal-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormPersonalPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationFormPersonalPageRoutingModule {}
