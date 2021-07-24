import { NgModule } from '@angular/core';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { PermissionDeniedPageComponent } from './permission-denied-page.component';
import { PermissionDeniedPageRoutingModule } from './permission-denied-page-routing.module';

@NgModule({
  imports: [PermissionDeniedPageRoutingModule, ErrorsSharedModule],
  declarations: [PermissionDeniedPageComponent],
})
export class PermissionDeniedPageModule {}
