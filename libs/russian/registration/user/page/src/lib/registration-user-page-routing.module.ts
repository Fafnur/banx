import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationUserPageComponent } from './registration-user-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationUserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationUserPageRoutingModule {}
