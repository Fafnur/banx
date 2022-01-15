import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationSocialPageComponent } from './registration-social-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationSocialPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationSocialPageRoutingModule {}
