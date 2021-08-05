import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

const routes: Routes = [
  {
    path: NAVIGATION_PATHS.home,
    loadChildren: (): Promise<any> => import('@banx/russian/content/bank/page').then((modules) => modules.HomePageModule),
  },
  {
    path: NAVIGATION_PATHS.bankCreditCards,
    loadChildren: (): Promise<any> => import('@banx/russian/content/bank/credit-card/page').then((modules) => modules.CreditCardPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule {}
