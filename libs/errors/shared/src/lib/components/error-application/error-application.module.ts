import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { ContainerModule } from '@banx/ui/container';

import { ErrorApplicationComponent } from './error-application.component';

@NgModule({
  imports: [RouterModule, ContainerModule, NavigationSharedModule],
  declarations: [ErrorApplicationComponent],
  exports: [ErrorApplicationComponent],
})
export class ErrorApplicationModule {}
