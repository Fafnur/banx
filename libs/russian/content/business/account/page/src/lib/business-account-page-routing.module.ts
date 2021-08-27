import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
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
    data: {
      parent: NAVIGATION_PATHS.business,
      active: NAVIGATION_PATHS.businessAccount,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessAccountPageRoutingModule {}
