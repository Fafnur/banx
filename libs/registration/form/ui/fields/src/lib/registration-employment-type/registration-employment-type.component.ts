import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, Validators } from '@angular/forms';
import { takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import {
  REGISTRATION_EMPLOYMENT_TYPES,
  REGISTRATION_FORM_FIELD_IDS,
  RegistrationEmploymentType,
  RegistrationFormField,
} from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-employment-type',
  templateUrl: './registration-employment-type.component.html',
  styleUrls: ['./registration-employment-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationEmploymentTypeComponent implements OnInit {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.EmploymentType];
  readonly options = REGISTRATION_EMPLOYMENT_TYPES;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly destroy$: DestroyService) {}

  get employerNameControl(): AbstractControl | null {
    return this.control?.parent?.get(RegistrationFormField.EmployerName) ?? null;
  }

  get institutionNameControl(): AbstractControl | null {
    return this.control?.parent?.get(RegistrationFormField.InstitutionName) ?? null;
  }

  get jobDescriptionControl(): AbstractControl | null {
    return this.control?.parent?.get(RegistrationFormField.JobDescription) ?? null;
  }

  get institutionDepartmentNameControl(): AbstractControl | null {
    return this.control?.parent?.get(RegistrationFormField.InstitutionDepartmentName) ?? null;
  }

  get periodOfEmploymentControl(): AbstractControl | null {
    return this.control?.parent?.get(RegistrationFormField.PeriodOfEmployment) ?? null;
  }

  get periodOfUnemploymentControl(): AbstractControl | null {
    return this.control?.parent?.get(RegistrationFormField.PeriodOfUnemployment) ?? null;
  }

  ngOnInit(): void {
    this.updateFields(null);

    this.control.valueChanges
      .pipe(
        tap((value) => {
          this.updateFields(value);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private updateFields(value: string | null): void {
    if (value === RegistrationEmploymentType.Student) {
      this.employerNameControl?.clearValidators();
      this.jobDescriptionControl?.clearValidators();
      this.institutionNameControl?.setValidators([Validators.required]);
      this.institutionDepartmentNameControl?.setValidators([Validators.required]);
    } else {
      this.employerNameControl?.setValidators([Validators.required]);
      this.jobDescriptionControl?.setValidators([Validators.required]);
      this.institutionNameControl?.clearValidators();
      this.institutionDepartmentNameControl?.clearValidators();
    }

    if (value === RegistrationEmploymentType.Unemployed || value === RegistrationEmploymentType.Retired) {
      this.periodOfUnemploymentControl?.setValidators([Validators.required]);
      this.periodOfEmploymentControl?.clearValidators();
    } else {
      this.periodOfEmploymentControl?.setValidators([Validators.required]);
      this.periodOfUnemploymentControl?.clearValidators();
    }

    this.employerNameControl?.updateValueAndValidity();
    this.jobDescriptionControl?.updateValueAndValidity();
    this.institutionNameControl?.updateValueAndValidity();
    this.institutionDepartmentNameControl?.updateValueAndValidity();
    this.periodOfEmploymentControl?.updateValueAndValidity();
    this.periodOfUnemploymentControl?.updateValueAndValidity();

    this.changeDetectorRef.markForCheck();
  }
}
