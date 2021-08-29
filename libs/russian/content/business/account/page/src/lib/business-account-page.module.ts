import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { BusinessAccountPageComponent } from './business-account-page.component';
import { BusinessAccountPageRoutingModule } from './business-account-page-routing.module';

@NgModule({
  imports: [BusinessAccountPageRoutingModule, ContainerModule, GridModule],
  declarations: [BusinessAccountPageComponent],
})
export class BusinessAccountPageModule {}
