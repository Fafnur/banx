import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationRestartPageComponent } from './registration-restart-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationRestartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRestartPageRoutingModule {}
