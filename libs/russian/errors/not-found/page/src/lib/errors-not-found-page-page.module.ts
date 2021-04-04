import { NgModule } from '@angular/core';

import { UiContainerModule } from '@banx/russian/ui/container';

import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ErrorsNotFoundPageRoutingModule } from './errors-not-found-page-routing.module';

@NgModule({
  imports: [ErrorsNotFoundPageRoutingModule, UiContainerModule],
  declarations: [NotFoundPageComponent],
})
export class ErrorsNotFoundPagePageModule {}
