import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { TopMenuComponent } from '@banx/ui/layout';

import { BusinessPageComponent } from './business-page.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessPageComponent,
  },
  {
    path: '',
    component: TopMenuComponent,
    outlet: 'header-top',
    data: {
      parent: NAVIGATION_PATHS.business,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessPageRoutingModule {}
