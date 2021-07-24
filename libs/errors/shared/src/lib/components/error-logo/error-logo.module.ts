import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorLogoComponent } from './error-logo.component';

@NgModule({
  imports: [RouterModule],
  declarations: [ErrorLogoComponent],
  exports: [ErrorLogoComponent],
})
export class ErrorLogoModule {}
