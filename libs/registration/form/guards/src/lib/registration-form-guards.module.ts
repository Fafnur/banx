import { NgModule } from '@angular/core';

import { RegistrationFormGuard } from './registration-form.guard';

@NgModule({
  providers: [RegistrationFormGuard],
})
export class RegistrationFormGuardsModule {}
