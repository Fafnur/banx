import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessPageComponent } from './business-page.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessPageRoutingModule {}
