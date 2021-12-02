import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegistrationFormLayoutComponent } from './registration-form-layout.component';

@NgModule({
  imports: [RouterModule],
  declarations: [RegistrationFormLayoutComponent],
  exports: [RegistrationFormLayoutComponent],
})
export class RegistrationFormLayoutModule {}
