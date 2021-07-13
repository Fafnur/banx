import { NgModule } from '@angular/core';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { ErrorsNotFoundPageComponent } from './errors-not-found-page.component';
import { ErrorsNotFoundPageRoutingModule } from './errors-not-found-page-routing.module';

@NgModule({
  imports: [ErrorsNotFoundPageRoutingModule, ErrorsSharedModule],
  declarations: [ErrorsNotFoundPageComponent],
})
export class ErrorsNotFoundPagePageModule {}
