import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessAccountPageComponent } from './business-account-page.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessAccountPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessAccountPageRoutingModule {}
