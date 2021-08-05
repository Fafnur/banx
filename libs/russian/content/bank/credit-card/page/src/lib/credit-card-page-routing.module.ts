import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreditCardPageComponent } from './credit-card-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardPageRoutingModule {}
