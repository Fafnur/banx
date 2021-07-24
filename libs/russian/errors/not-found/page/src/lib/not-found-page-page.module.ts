import { NgModule } from '@angular/core';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

@NgModule({
  imports: [NotFoundPageRoutingModule, ErrorsSharedModule],
  declarations: [NotFoundPageComponent],
})
export class NotFoundPagePageModule {}
