import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { TopMenuComponent } from '@banx/ui/layout';

import { CreditCardPageComponent } from './credit-card-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardPageComponent,
  },
  {
    path: '',
    component: TopMenuComponent,
    outlet: 'header-top',
    data: {
      parent: NAVIGATION_PATHS.bank,
      active: NAVIGATION_PATHS.bankCreditCards,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardPageRoutingModule {}
