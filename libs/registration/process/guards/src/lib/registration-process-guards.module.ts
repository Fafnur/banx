import { NgModule } from '@angular/core';

import { RegistrationProcessGuard } from './registration-process.guard';

@NgModule({
  providers: [RegistrationProcessGuard],
})
export class RegistrationProcessGuardsModule {}
