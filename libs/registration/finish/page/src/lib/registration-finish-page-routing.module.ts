import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFinishPageComponent } from './registration-finish-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFinishPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationFinishPageRoutingModule {}
