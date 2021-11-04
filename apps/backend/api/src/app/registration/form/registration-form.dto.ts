import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, Length, ValidateIf } from 'class-validator';

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
import { RegistrationFormSubSteps } from '@banx/registration/process/common';
import { RussianRegistrationForm } from '@banx/russian/registration/form/common';

export class RegistrationFormDto implements Partial<Omit<RussianRegistrationForm, 'smsCode'>> {
  @IsNotEmpty()
  @Length(1, 60, {
    groups: [RegistrationFormSubSteps.Personal],
  })
  firstName!: string;

  @IsNotEmpty()
  @Length(1, 60, {
    groups: [RegistrationFormSubSteps.Personal],
  })
  lastName!: string;

  @IsOptional()
  @Length(1, 60, {
    groups: [RegistrationFormSubSteps.Personal],
  })
  middleName!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsEnum(RegistrationGender)
  gender!: RegistrationGender;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsDateString()
  birthdate!: string;

  @Length(10, 10, {
    groups: [RegistrationFormSubSteps.Personal],
  })
  mobilePhone!: string;

  @IsEmail(undefined, {
    groups: [RegistrationFormSubSteps.Personal],
  })
  email!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Personal],
  })
  agreement!: boolean;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Personal],
  })
  passportSeriesNumber!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Personal],
  })
  passportIssueCode!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Personal],
  })
  passportIssueName!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsDateString()
  passportIssueDate!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Personal],
  })
  passportBirthplace!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  homeType!: RegistrationHomeType;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  city!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  addressLine!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  postcode!: number;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  maritalStatus!: RegistrationMaritalStatus;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  kidsAmount!: RegistrationKidsAmount;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  dependentsAmount!: RegistrationDependentsAmount;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  additionalContactName!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  additionalContactType!: RegistrationAdditionalContactType;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Family],
  })
  additionalContactPhoneNumber!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Employment],
  })
  employmentType!: RegistrationEmploymentType;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Employment],
  })
  employerName!: string;

  @ValidateIf((o) => o.employmentType === RegistrationEmploymentType.Student)
  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Employment],
  })
  institutionName!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Employment],
  })
  jobDescription!: string;

  @ValidateIf((o) => o.employmentType === RegistrationEmploymentType.Student)
  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Employment],
  })
  institutionDepartmentName!: string;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Employment],
  })
  monthlyIncome!: number;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Employment],
  })
  periodOfEmployment!: RegistrationPeriodOfEmployment;

  @ValidateIf((o) => o.employmentType === RegistrationEmploymentType.Unemployed)
  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Employment],
  })
  periodOfUnemployment!: RegistrationPeriodOfEmployment;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Employment],
  })
  additionalIncomeAmount!: number;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Additional],
  })
  driverLicense!: boolean;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Additional],
  })
  ownCar!: boolean;

  @IsNotEmpty({
    groups: [RegistrationFormSubSteps.Additional],
  })
  minimalDesiredAmount!: number;
}
