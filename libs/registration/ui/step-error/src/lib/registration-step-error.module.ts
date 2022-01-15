import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { LinksModule } from '@banx/ui/links';

import { RegistrationStepErrorComponent } from './registration-step-error.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationSharedModule, RegistrationCardModule, LinksModule],
  declarations: [RegistrationStepErrorComponent],
  exports: [RegistrationStepErrorComponent],
})
export class RegistrationStepErrorModule {}
