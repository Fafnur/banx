import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

import { Nullable } from '@banx/core/utils';
import {
  RegistrationAdditionalContactType,
  RegistrationDependentsAmount,
  RegistrationEmploymentType,
  RegistrationGender,
  RegistrationHomeType,
  RegistrationKidsAmount,
  RegistrationMaritalStatus,
  RegistrationPeriodOfEmployment,
} from '@banx/registration/form/common';
import { RussianRegistrationForm } from '@banx/russian/registration/form/common';

@Entity({
  name: 'registration_form',
})
export class RegistrationFormEntity implements Nullable<Omit<RussianRegistrationForm, 'smsCode'>> {
  @Column({ type: 'tinytext', unique: true, primary: true })
  process!: string;

  @Column({
    name: 'first_name',
    type: 'tinytext',
    nullable: true,
  })
  firstName!: string | null;

  @Column({
    name: 'last_name',
    type: 'tinytext',
    nullable: true,
  })
  lastName!: string | null;

  @Column({
    name: 'middle_name',
    type: 'tinytext',
    nullable: true,
  })
  middleName!: string | null;

  @Column({
    type: 'enum',
    enum: RegistrationGender,
    nullable: true,
  })
  gender!: RegistrationGender | null;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  birthdate!: string | null;

  @Column({
    name: 'mobile_phone',
    type: 'tinytext',
    nullable: true,
  })
  mobilePhone!: string | null;

  @Column({
    type: 'tinytext',
    nullable: true,
  })
  email!: string | null;

  @Column({
    name: 'home_type',
    type: 'enum',
    enum: RegistrationHomeType,
    nullable: true,
  })
  homeType!: RegistrationHomeType | null;

  @Column({
    type: 'tinytext',
    nullable: true,
  })
  city!: string | null;

  @Column({
    name: 'address_line',
    type: 'text',
    nullable: true,
  })
  addressLine!: string | null;

  @Column({
    type: 'tinytext',
    nullable: true,
  })
  postcode!: number | null;

  @Column({
    name: 'marital_status',
    type: 'enum',
    enum: RegistrationMaritalStatus,
    nullable: true,
  })
  maritalStatus!: RegistrationMaritalStatus | null;

  @Column({
    name: 'kids_amount',
    type: 'enum',
    enum: RegistrationKidsAmount,
    nullable: true,
  })
  kidsAmount!: RegistrationKidsAmount | null;

  @Column({
    name: 'dependents_amount',
    type: 'enum',
    enum: RegistrationDependentsAmount,
    nullable: true,
  })
  dependentsAmount!: RegistrationDependentsAmount | null;

  @Column({
    name: 'additional_contact_name',
    type: 'tinytext',
    nullable: true,
  })
  additionalContactName!: string | null;

  @Column({
    name: 'additional_contact_type',
    type: 'enum',
    enum: RegistrationAdditionalContactType,
    nullable: true,
  })
  additionalContactType!: RegistrationAdditionalContactType | null;

  @Column({
    name: 'additional_contact_phone_number',
    type: 'tinytext',
    nullable: true,
  })
  additionalContactPhoneNumber!: string | null;

  @Column({
    name: 'employment_type',
    type: 'enum',
    enum: RegistrationEmploymentType,
    nullable: true,
  })
  employmentType!: RegistrationEmploymentType | null;

  @Column({
    name: 'employer_name',
    type: 'tinytext',
    nullable: true,
  })
  employerName!: string | null;

  @Column({
    name: 'institution_name',
    type: 'tinytext',
    nullable: true,
  })
  institutionName!: string | null;

  @Column({
    name: 'job_description',
    type: 'tinytext',
    nullable: true,
  })
  jobDescription!: string | null;

  @Column({
    name: 'institution_department_name',
    type: 'tinytext',
    nullable: true,
  })
  institutionDepartmentName!: string | null;

  @Column({
    name: 'monthly_income',
    type: 'int',
    nullable: true,
  })
  monthlyIncome!: number | null;

  @Column({
    name: 'period_of_employment',
    type: 'enum',
    enum: RegistrationPeriodOfEmployment,
    nullable: true,
  })
  periodOfEmployment!: RegistrationPeriodOfEmployment | null;

  @Column({
    name: 'period_of_unemployment',
    type: 'enum',
    enum: RegistrationPeriodOfEmployment,
    nullable: true,
  })
  periodOfUnemployment!: RegistrationPeriodOfEmployment | null;

  @Column({
    name: 'additional_income_amount',
    type: 'int',
    nullable: true,
  })
  additionalIncomeAmount!: number | null;

  @Column({
    name: 'driver_license',
    type: 'boolean',
    nullable: true,
  })
  driverLicense!: boolean | null;

  @Column({
    name: 'own_car',
    type: 'boolean',
    nullable: true,
  })
  ownCar!: boolean | null;

  @Column({
    name: 'minimal_desired_amount',
    type: 'int',
    nullable: true,
  })
  minimalDesiredAmount!: number | null;

  @Column({
    type: 'boolean',
    nullable: true,
  })
  agreement!: boolean | null;

  @Column({
    name: 'passport_series_number',
    type: 'tinytext',
    nullable: true,
  })
  passportSeriesNumber!: string | null;

  @Column({
    name: 'passport_issue_code',
    type: 'tinytext',
    nullable: true,
  })
  passportIssueCode!: string | null;

  @Column({
    name: 'passport_issue_name',
    type: 'tinytext',
    nullable: true,
  })
  passportIssueName!: string | null;

  @Column({
    name: 'passport_issue_date',
    type: 'datetime',
    nullable: true,
  })
  passportIssueDate!: string | null;

  @Column({
    name: 'passport_birthplace',
    type: 'tinytext',
    nullable: true,
  })
  passportBirthplace!: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt!: string | null;
}
