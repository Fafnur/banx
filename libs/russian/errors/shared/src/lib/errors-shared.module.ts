import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { ErrorApplicationComponent } from './components/error-application/error-application.component';
import { ErrorHintComponent } from './components/error-hint/error-hint.component';
import { ErrorLinksComponent } from './components/error-links/error-links.component';
import { ErrorLogoComponent } from './components/error-logo/error-logo.component';
import { ErrorStatusComponent } from './components/error-status/error-status.component';
import { ErrorTitleComponent } from './components/error-title/error-title.component';

const components: Type<any>[] = [
  ErrorLogoComponent,
  ErrorStatusComponent,
  ErrorTitleComponent,
  ErrorHintComponent,
  ErrorLinksComponent,
  ErrorApplicationComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, ContainerModule],
  declarations: [...components],
  exports: [...components],
})
export class ErrorsSharedModule {}
