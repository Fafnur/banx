import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { FormsSharedModule } from '@banx/core/forms/shared';
import {
  RegistrationAgreementModule,
  RegistrationBirthdateModule,
  RegistrationEmailModule,
  RegistrationFirstNameModule,
  RegistrationGenderModule,
  RegistrationLastNameModule,
  RegistrationMiddleNameModule,
  RegistrationMobilePhoneModule,
} from '@banx/registration/form/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import { GridModule } from '@banx/ui/grid';

/* eslint-disable max-len */
import { RegistrationPassportBirthplaceModule } from './components/registration-passport-birthplace/registration-passport-birthplace.module';
import { RegistrationPassportIssueCodeModule } from './components/registration-passport-issue-code/registration-passport-issue-code.module';
import { RegistrationPassportIssueDateModule } from './components/registration-passport-issue-date/registration-passport-issue-date.module';
import { RegistrationPassportIssueNameModule } from './components/registration-passport-issue-name/registration-passport-issue-name.module';
import { RegistrationPassportSeriesNumberModule } from './components/registration-passport-series-number/registration-passport-series-number.module';
import { RegistrationFormPersonalPageComponent } from './registration-form-personal-page.component';
import { RegistrationFormPersonalRoutingModule } from './registration-form-personal-routing.module';
/* eslint-enable max-len */

@NgModule({
  imports: [
    CommonModule,
    RegistrationFormPersonalRoutingModule,
    ReactiveFormsModule,
    FormsSharedModule,
    RegistrationLastNameModule,
    RegistrationFirstNameModule,
    RegistrationMiddleNameModule,
    RegistrationBirthdateModule,
    MatButtonModule,
    RegistrationGenderModule,
    RegistrationPassportSeriesNumberModule,
    RegistrationPassportIssueNameModule,
    RegistrationPassportIssueDateModule,
    RegistrationPassportIssueCodeModule,
    RegistrationPassportBirthplaceModule,
    RegistrationFormCardModule,
    RegistrationAgreementModule,
    RegistrationMobilePhoneModule,
    RegistrationEmailModule,
    GridModule,
  ],
  declarations: [RegistrationFormPersonalPageComponent],
})
export class RegistrationFormPersonalPageModule {}
