import { NgModule } from '@angular/core';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ErrorsNotFoundPageRoutingModule } from './errors-not-found-page-routing.module';

@NgModule({
  imports: [ErrorsNotFoundPageRoutingModule, ErrorsSharedModule],
  declarations: [NotFoundPageComponent],
})
export class ErrorsNotFoundPagePageModule {}
