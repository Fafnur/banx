import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationDecisionPageComponent } from './registration-decision-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationDecisionPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationDecisionPageRoutingModule {}
