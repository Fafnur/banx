import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';

import { CreditCardPageComponent } from './credit-card-page.component';
import { CreditCardPageRoutingModule } from './credit-card-page-routing.module';

@NgModule({
  imports: [CreditCardPageRoutingModule, ContainerModule],
  declarations: [CreditCardPageComponent],
})
export class CreditCardPageModule {}
