import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { BusinessPageComponent } from './business-page.component';
import { BusinessPageRoutingModule } from './business-page-routing.module';

@NgModule({
  imports: [BusinessPageRoutingModule, ContainerModule, GridModule],
  declarations: [BusinessPageComponent],
})
export class BusinessPageModule {}
