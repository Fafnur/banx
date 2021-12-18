import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationDataPageComponent } from './registration-data-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationDataPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationDataPageRoutingModule {}
