import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { ErrorApplicationComponent } from './error-application.component';

@NgModule({
  imports: [RouterModule, ContainerModule],
  declarations: [ErrorApplicationComponent],
  exports: [ErrorApplicationComponent],
})
export class ErrorApplicationModule {}
