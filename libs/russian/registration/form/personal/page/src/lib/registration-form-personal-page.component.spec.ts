import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import {
  RegistrationAgreementModule,
  RegistrationBirthdateModule,
  RegistrationEmailModule,
  RegistrationFirstNameModule,
  RegistrationGenderModule,
  RegistrationLastNameModule,
  RegistrationMiddleNameModule,
  RegistrationMobilePhoneModule,
} from '@banx/registration/form/ui/fields';
import { GridModule } from '@banx/ui/grid';

/* eslint-disable max-len */
import { RegistrationPassportBirthplaceModule } from '../../../../ui/fields/src/lib/registration-passport-birthplace/registration-passport-birthplace.module';
import { RegistrationPassportIssueCodeModule } from '../../../../ui/fields/src/lib/registration-passport-issue-code/registration-passport-issue-code.module';
import { RegistrationPassportIssueDateModule } from '../../../../ui/fields/src/lib/registration-passport-issue-date/registration-passport-issue-date.module';
import { RegistrationPassportIssueNameModule } from '../../../../ui/fields/src/lib/registration-passport-issue-name/registration-passport-issue-name.module';
import { RegistrationPassportSeriesNumberModule } from '../../../../ui/fields/src/lib/registration-passport-series-number/registration-passport-series-number.module';
import { RegistrationFormPersonalPageComponent } from './registration-form-personal-page.component';
/* eslint-enable max-len */

describe('RegistrationFormPersonalPageComponent', () => {
  let component: RegistrationFormPersonalPageComponent;
  let fixture: ComponentFixture<RegistrationFormPersonalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MockModule(FormsSharedModule),
        MockModule(RegistrationLastNameModule),
        MockModule(RegistrationFirstNameModule),
        MockModule(RegistrationMiddleNameModule),
        MockModule(RegistrationBirthdateModule),
        MockModule(RegistrationGenderModule),
        MockModule(RegistrationPassportSeriesNumberModule),
        MockModule(RegistrationPassportIssueNameModule),
        MockModule(RegistrationPassportIssueDateModule),
        MockModule(RegistrationPassportIssueCodeModule),
        MockModule(RegistrationPassportBirthplaceModule),
        MockModule(RegistrationFormCardModule),
        MockModule(RegistrationAgreementModule),
        MockModule(RegistrationMobilePhoneModule),
        MockModule(RegistrationEmailModule),
        MockModule(GridModule),
      ],
      declarations: [RegistrationFormPersonalPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormPersonalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
