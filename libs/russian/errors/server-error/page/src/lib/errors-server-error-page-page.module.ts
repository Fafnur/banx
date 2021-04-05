import { NgModule } from '@angular/core';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { ServerErrorPageComponent } from './components/server-error-page/server-error-page.component';
import { ErrorsServerErrorPageRoutingModule } from './errors-server-error-page-routing.module';

@NgModule({
  imports: [ErrorsServerErrorPageRoutingModule, ErrorsSharedModule],
  declarations: [ServerErrorPageComponent],
})
export class ErrorsServerErrorPagePageModule {}
