import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { CreditCardPageComponent } from './credit-card-page.component';
import { CreditCardPageRoutingModule } from './credit-card-page-routing.module';

@NgModule({
  imports: [CreditCardPageRoutingModule, ContainerModule, GridModule],
  declarations: [CreditCardPageComponent],
})
export class CreditCardPageModule {}
