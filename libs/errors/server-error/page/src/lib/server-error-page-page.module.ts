import { NgModule } from '@angular/core';

import { ErrorsSharedModule } from '@banx/errors/shared';

import { ServerErrorPageComponent } from './server-error-page.component';
import { ServerErrorPageRoutingModule } from './server-error-page-routing.module';

@NgModule({
  imports: [ServerErrorPageRoutingModule, ErrorsSharedModule],
  declarations: [ServerErrorPageComponent],
})
export class ServerErrorPagePageModule {}
