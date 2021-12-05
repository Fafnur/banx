import { IsBoolean, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, Length, ValidateIf } from 'class-validator';

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
  @IsNotEmpty({
    context: { errorCode: 1000 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(4, 60, {
    context: { errorCode: 1001 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  firstName!: string;

  @IsNotEmpty({
    context: { errorCode: 1000 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(4, 60, {
    groups: [RegistrationFormSubSteps.Personal],
    context: { errorCode: 1000 },
  })
  lastName!: string;

  @IsOptional({
    context: { errorCode: 1000 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(1, 60, {
    groups: [RegistrationFormSubSteps.Personal],
  })
  middleName!: string;

  @IsNotEmpty({
    context: { errorCode: 1000 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsEnum(RegistrationGender)
  gender!: RegistrationGender;

  @IsNotEmpty({
    context: { errorCode: 1000 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsDateString({
    context: { errorCode: 1002 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  birthdate!: string;

  @IsNotEmpty({
    context: { errorCode: 1000 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(10, 10, {
    context: { errorCode: 1001 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  mobilePhone!: string;

  @IsNotEmpty({
    context: { errorCode: 1000 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsEmail(undefined, {
    context: { errorCode: 1001 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  email!: string;

  @IsNotEmpty({
    context: { errorCode: 1000 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsBoolean({
    context: { errorCode: 1002 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  agreement!: boolean;

  @IsNotEmpty({
    context: { errorCode: 1000 },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(11, 11, {
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
