import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationConversionPageComponent } from './registration-conversion-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationConversionPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationConversionPageRoutingModule {}
