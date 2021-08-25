import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopMenuComponent } from '@banx/ui/layout';

import { BusinessAccountPageComponent } from './business-account-page.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessAccountPageComponent,
  },
  {
    path: '',
    component: TopMenuComponent,
    outlet: 'top',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessAccountPageRoutingModule {}
