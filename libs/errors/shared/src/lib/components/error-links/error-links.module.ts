import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorLinksComponent } from './error-links.component';

@NgModule({
  imports: [RouterModule],
  declarations: [ErrorLinksComponent],
  exports: [ErrorLinksComponent],
})
export class ErrorLinksModule {}
