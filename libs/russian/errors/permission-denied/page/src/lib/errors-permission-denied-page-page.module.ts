import { NgModule } from '@angular/core';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { PermissionDeniedPageComponent } from './components/permission-denied-page/permission-denied-page.component';
import { ErrorsPermissionDeniedPageRoutingModule } from './errors-permission-denied-page-routing.module';

@NgModule({
  imports: [ErrorsPermissionDeniedPageRoutingModule, ErrorsSharedModule],
  declarations: [PermissionDeniedPageComponent],
})
export class ErrorsPermissionDeniedPagePageModule {}
